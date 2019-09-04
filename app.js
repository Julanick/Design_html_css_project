$(function() {
 
 let header = $("#header");
 let intro = $("#intro");
 let introH = intro.innerHeight();
 let scrillPos = $(window).scrollTop();

 $(window).on("scroll", function(){
    
    scrillPos = $(this).scrollTop();
     if( scrillPos > introH ){
        header.addClass("fixed");

     }
     else {
        header.removeClass("fixed");

     }
    
});

 



});
