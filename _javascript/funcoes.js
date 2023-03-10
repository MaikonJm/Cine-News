//função muda os icones do menu de acordo com os valores na var. Check
function mudaMenu(tipo) {

    switch (check) {
        case 1:
            document.getElementById("logoHome").src = "_imagens/" + tipo + ".png";
            break;
        case 2:
            document.getElementById("logoEmCartaz").src = "../_imagens/" + tipo + ".png";
            break;
        case 3:
            document.getElementById("logoSeries").src = "../_imagens/" + tipo + ".png";
        case 4:
            document.getElementById("logoEmBreve").src = "../_imagens/" + tipo + ".png";
            break;
        case 5:
            document.getElementById("logoRecomend").src = "../_imagens/" + tipo + ".png";
        case 6:
            document.getElementById("logoNews").src = "../_imagens/" + tipo + ".png";
            break;
    }
}

$(document).ready(function () {
    $("#topo").click(function () {
        $('html,body').scrollTop(0);
    });
});

$(document).ready(function () {


    $("#off").click(function () {
        var vid = document.getElementById("audio-page");

        if (vid.volume == 0) {
            vid.volume = 1;
            $("#off").attr("src", "../_imagens/icon_sound.png");
        } else {
            vid.volume = 0;
            $("#off").attr("src", "../_imagens/icon_sound2.png");
        }
    });
});


$(document).ready(function () {


    //função do interruptor luz na index    //criei funções separadas, pois os "urls" da index sao diferentes de _otherPages


    var interruptor = false;


    $("#turn-on2").click(function () {

        if (interruptor == false) {

            $("body").css("background-image", "url('_imagens/back3-black.jpg')");
            $("#turn-on2").attr("src", "_imagens/btn2.png");
            interruptor = true;

        } else if (interruptor == true) {
            $("body").css("background-image", "url('_imagens/back3.jpg')");
            $("#turn-on2").attr("src", "_imagens/btn.png");
            interruptor = false;
        }
    });


    //função do interruptor luz
    var interruptor = false;


    $("#turn-on").click(function () {

        if (interruptor == false) {

            $("body").css("background-image", "url('../_imagens/back3-black.jpg')");
            $("#turn-on").attr("src", "../_imagens/btn2.png");
            interruptor = true;

        } else if (interruptor == true) {
            $("body").css("background-image", "url('../_imagens/back3.jpg')");
            $("#turn-on").attr("src", "../_imagens/btn.png");
            interruptor = false;

        }

    });


    $(document).ready(function () {
        var tam = $(window).width();


        //caso tela menor sistema ajusta elemento
        if (tam < 730) {
            $(".top").hide();
            $(".inicio").removeClass("inicio");
            $("#turn-on").hide();
            $("#turn-on2").hide();
            $("#interface").css("marginTop", "-0.8px");
            $("#loading").css("marginLeft", "0");
            $("#loading").css("marginTop", "25%");
            $("#loading").css("height", "auto");
            $("#rodape").css("paddingTop", "8%");
            $("#person").css("marginTop", "15px");
            if (tam < 777) {
                $("#interface").css("border-radius", "0");
            }

        }

    });
    
    
});

 