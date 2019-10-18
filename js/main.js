$(window).scroll(function () {
    let navbar = $("#navbar");
    let logo = $('.logo');
    if ($("#navbar").offset().top > 300) {
        // $("#navbar").removeClass("navbar-expand-lg");
        $(navbar).css('background', '#4948d2');
        $('.nav-link').css('color', '#fff');
        // $(logo).css('width', '60px');
        $('.navbar-collapse').removeClass('mb-lg-5');
    } else {
        // $("#navbar").addClass("navbar-expand-lg");
        $(navbar).css("background", "transparent");
        // $(logo).css('width', '150px')
        $('.nav-link').css('color', '#ad0af9');
        $('.navbar-collapse').addClass('mb-lg-5');
    }
});

/* Smooth scrolling para anclas */
$("a.smooth").on("click", function (e) {
    e.preventDefault();
    var $link = $(this);
    var anchor = $link.attr("href");
    $("html, body")
        .stop()
        .animate({
                scrollTop: $(anchor).offset().top - 100 + "px"
            },
            1000
        );
});

$(".collapse").on("click", "a", function () {
    $(".navbar-collapse").removeClass("show");
    $(".navbar-toggler").removeClass("active");
});

$('.navbar-toggler').on('click', function () {
    $('.navbar').toggleClass('active');
})

var hamburger = $('#hamburger-icon');
hamburger.click(function () {
    hamburger.toggleClass('active');
    return false;
});