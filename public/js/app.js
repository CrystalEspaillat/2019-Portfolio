$(document).ready(function() {

    // Hover effect for about section

    $("section").hover(function() {
        $("#about").addClass("hover");
    }, function() {
        $("#about").removeClass("hover");
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