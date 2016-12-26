$(document).ready(function () {
    $('#carousel-example-generic').hammer().on('swipeleft', function () {
        $(this).carousel('next');
    })
    $('#carousel-example-generic').hammer().on('swiperight', function () {
        $(this).carousel('prev');
    })
});