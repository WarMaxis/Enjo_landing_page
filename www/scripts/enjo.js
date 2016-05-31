$(function() {
    setTimeout(function() {
        $("nav.navbar-slide").addClass("show-menu");
    }, 2000);

    setTimeout(function() {
        $("#modalContact").modal();
    }, 20000);

$('#svg_arrow').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
    });
});