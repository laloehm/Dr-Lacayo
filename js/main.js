$(window).scroll(function () {
    let navbar = $("#navbar");
    if ($("#navbar").offset().top > 300) {
        // $("#navbar").removeClass("navbar-expand-lg");
        $(navbar).css('background', '#4948d2');
    } else {
        // $("#navbar").addClass("navbar-expand-lg");
        $(navbar).css("background", "transparent");
    }
});