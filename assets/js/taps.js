
$(document).ready(function () {
    $('.statistics-item').hide();
    var Item = $('.statistics-taps .active a').attr('href');
    $(Item).show();
    $('.statistics-taps li').on('click', function () {
        $('.statistics-taps .active').removeClass('active');
        $(this).addClass('active');
        $(Item).fadeOut('100', function () {
            Item = $('.statistics-taps .active a').attr('href');
            $(Item).fadeIn('100');
            var length = $(Item + ' .pitem').length;
            var x = 8;
            $(Item + ' .pitem:lt(' + x + ')').show();
            $(Item + ' > .ploadmore').click(function () {
                x = (x + 8 <= length) ? x + 8 : length;
                $(Item + ' .pitem:lt(' + x + ')').show();
            });
        });
        return false;
    });
});
