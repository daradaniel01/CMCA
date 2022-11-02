$(document).ready(function() {
    $(window).scroll(function() {
     var scroll = $(window).scrollTop();
     if (scroll > 150) {
        $(".navigation").css("background" , "linear-gradient(45deg, #0f5db6, #094080)");
        $(".navigation").css("height" , "60px");
     }

     else {
        $(".navigation").css("background" , "transparent");
        $(".navigation").css("height" , "0px");
     }
    })
})