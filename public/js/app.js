$(document).ready(function() {

    // /////////////////////////////////////
    // Panels 
    // /////////////////////////////////////

    $(".label").on("click", function() {
        $( this ).parents("section")
            .addClass( "active" )
            .css("transition", "ease .5s")
            .siblings().removeClass("active");
        $("#about").css("width", "3vw");
        $(".about-content").css("opacity", "0").css("transition", "ease .25s");
        $(".home").css("visibility", "visible");
    });

    $(".close").on("click", function() {
        $( this ).parents("section").removeClass("active");
        $(".about-content").css("opacity", "1").css("transition", "ease .25s");
        $(".home").css("visibility", "hidden");

    });

    $("#about").on("click", function() {
        $("#about").css("width", "85vw");
        $(".about-content").css("opacity", "1").css("transition", "ease .25s");
        if ($("section").hasClass("active") === true) {
            $("section").removeClass("active");
        }
        $(".home").css("visibility", "hidden");

    });

    $("header").on("click", function() {
        $("#about").css("width", "85vw");
        $(".about-content").css("opacity", "1").css("transition", "ease .25s");
        if ($("section").hasClass("active") === true) {
            $("section").removeClass("active");
        }
        $(".home").css("visibility", "hidden");
    });

     

    // /////////////////////////////////////
    // About Page 
    // /////////////////////////////////////

    // Click event for mail
    $(".resume").on("click", function() {
        window.location = "/resume";        
    });

    // Click event for mail
    $(".contact").on("click", function() {
        window.location = "mailto:crys.espaillat@gmail.com";        
    });

    //Click event for social link divs

    $(".linkedin").on("click", function() {
        window.location = $(this).attr('href');        
    });
    $(".github").on("click", function() {
        window.location = $(this).attr('href');        
    });
    $(".twitter").on("click", function() {
        window.location = $(this).attr('href');        
    });
    $(".codepen").on("click", function() {
        window.location = $(this).attr('href');        
    });

});