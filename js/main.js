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