$(document).ready(function() {

    //Click event for social links

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