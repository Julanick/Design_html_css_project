$(function() {
    /* Fixed Header*/
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    checkScroll(scrollPos, introH);

    $(window).on("scroll load", function() {
        introH = intro.innerHeight();
        scrillPos = $(this).scrollTop();
        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* Smooth scroll*/
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        let elementId = $(this).data("scroll");
        let elementOffSet = $(elementId).offset().top;
        nav.removeClass("show");
        $("html, body").animate({
            scrollTop: elementOffSet - 70
        }, 700);
        console.log(elementOffSet);
    });

    /* Nav Toggle*/

    let nav = $("#nav");
    let navToggle = $("#navToggle");

    navToggle.on("click", function(event) {
        event.preventDefault();
        nav.toggleClass("show");
    });
});