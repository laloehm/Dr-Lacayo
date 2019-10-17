$(window).scroll(function () {
    let navbar = $("#navbar");
    let logo = $('.logo');
    if ($("#navbar").offset().top > 300) {
        // $("#navbar").removeClass("navbar-expand-lg");
        $(navbar).css('background', '#4948d2');
        $(logo).css('width', '70px');
        $('.navbar-collapse').removeClass('mb-lg-5');
    } else {
        // $("#navbar").addClass("navbar-expand-lg");
        $(navbar).css("background", "transparent");
        $(logo).css('width', '150px')
        $('.navbar-collapse').addClass('mb-lg-5');
    }
});