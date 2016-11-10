

$(".statistics-item").hide();
var Item = $(".statistics-taps .active a").attr("href");
$(Item).show();
$(".statistics-taps li").on("click", function () {

    $(".statistics-taps .active").removeClass("active");
    $(this).addClass('active');

    $(Item).fadeOut("100", function () {
        Item = $(".statistics-taps .active a").attr("href");
        $(Item).fadeIn("100");
        $(document).ready(function () {
            size_li = $(Item + " .pitem").size();
            x = 8;
            $(Item + ' .pitem:lt(' + x + ')').show();
            $(Item + ' > .ploadmore').click(function () {
                x = (x + 8 <= size_li) ? x + 8 : size_li;
                $(Item + ' .pitem:lt(' + x + ')').show();

            });
        });

    });

    return false;
});
$(document).ready(function () {
    Item = $(".statistics-taps .active a").attr("href");
    size_li = $(Item + " .pitem").size();
    x = 8;
    $(Item + ' .pitem:lt(' + x + ')').show();
    $(Item + ' > .ploadmore').click(function () {
        x = (x + 8 <= size_li) ? x + 8 : size_li;
        $(Item + ' .pitem:lt(' + x + ')').show();

    });
});
