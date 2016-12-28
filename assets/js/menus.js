function htmlbodyHeightUpdate() {
    var height3 = $(window).height()
    var height1 = $('.nav').height() + 50
    height2 = $('.main').height()
    if (height2 > height3) {
        $('html').height(Math.max(height1, height3, height2) + 10);
        $('body').height(Math.max(height1, height3, height2) + 10);
    } else {
        $('html').height(Math.max(height1, height3, height2));
        $('body').height(Math.max(height1, height3, height2));
    }

}
$(document).ready(function() {
    htmlbodyHeightUpdate()
    $(window).resize(function() {
        htmlbodyHeightUpdate()
    });
    $(window).scroll(function() {
        height2 = $('.main').height()
        htmlbodyHeightUpdate()
    });
});





$(document).ready(function() {
    $(".dropdown2").hover(
        function() {
            $('.dropdown-menu', this).stop(true, true).slideDown("fast");
            $(this).toggleClass('open');
        },
        function() {
            $('.dropdown-menu', this).stop(true, true).slideUp("fast");
            $(this).toggleClass('open');
        }
    );
});



$(document).ready(function() {
    $(".dropdown2").hover(
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideDown("400");
            $(this).toggleClass('open');
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideUp("400");
            $(this).toggleClass('open');
        }
    );
});

$(document).ready(function() {
    $(".carousel").carousel({
        interval: 5000
    });
    $('#myCarousel').on('slide.bs.carousel', function() {


        $(".myCarousel-target.active").removeClass("active");

        $('#myCarousel').on('slid.bs.carousel', function() {

            var to_slide = $(".carousel-item.active").attr("data-slide-no");

            $(".nav-indicators li[data-slide-to=" + to_slide + "]").addClass("active");

        });
    });

});
