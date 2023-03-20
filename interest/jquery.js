$(document).ready(function () {
    $("#main").mouseover(function () {
        $("#main").fadeOut();
        $("#main").fadeIn();
    });


    var isLightOn = false;

    $(".portrait").click(function () {
        if (isLightOn) {
            $("body").css("background", "#6B2737")
            isLightOn = false;
        } else {
            $("body").css("background", "red");
            isLightOn = true;
        }
    });

});