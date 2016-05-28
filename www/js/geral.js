var Geral = {
    validaSessao: function () {
        if (window.localStorage["Login"] == "" || window.localStorage["Login"] == null)
        {
            window.location = "index.html";
        }
    },
    recarregaDados: function () {
        
    },
    QueimarSessao: function () {
        window.localStorage["Login"] = "";
        window.location = "index.html";
    }
}
function SalvaUsuario() {
    debugger;
    $('#loader').show();
    var obj = {
        nome: $("#ContactName").val(),
        Login: $("#ContactEmail").val(),
        Senha: $("#ContactSenha").val()
    }


    $.ajax({
        type: 'POST',
        data: obj,
        url: 'http://app.apse.net.br/WS/Service.asmx/InsereUsuarios',
        dataType: 'json',
        cache: false,
        success: function (data) {

            if (data != null) {
                if (data != '') {
                    //app.Materiais = data;
                    alert('Cadastro feito com sucesso!');
                    mainView.router.loadPage("Publique.html");
                } else {
                    alert('Não retornou');
                }
            }
            else {
                alert('deu erro');
            }
            $('#loader').hide();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('Erro ao realizar Login. Verifique sua conexão com a Internet.');
            $('#loader').hide();
        }
    });
    return false;
};
function SalvaEvento() {
    debugger;
    $('#loader').show();
    var obj = {
        Desc_Evento: $("#Desc_Evento").val(),
        Departamento: $("#Departamento").val(),
        OqueAconteceu: $("#OqueAconteceu").val(),
        ComoAconteceu: $("#ComoAconteceu").val()
    }


    $.ajax({
        type: 'POST',
        data: obj,
        url: 'http://app.apse.net.br/WS/Service.asmx/InsereEvento',
        dataType: 'json',
        cache: false,
        success: function (data) {

            if (data != null) {
                if (data != '') {
                    //app.Materiais = data;
                    alert('Cadastro Feito com Sucesso!');
                    mainView.router.loadPage("blog.html");
                } else {
                    alert('Não retornou');
                }
            }
            else {
                alert('deu erro');
            }
            $('#loader').hide();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('Erro ao realizar Login. Verifique sua conexão com a Internet.');
            $('#loader').hide();
        }
    });
    return false;
};