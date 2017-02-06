$(function($) {
    'use strict';
    $(document).ready(function() {
        $('.statistics-item').hide();
        var Item = $('.statistics-taps .active a').attr('href');
        $(Item).show();
        $('.statistics-taps li').on('click', function() {
            $('.statistics-taps .active').removeClass('active');
            $(this).addClass('active');
            $(Item).fadeOut('100', function() {
                Item = $('.statistics-taps .active a').attr('href');
                $(Item).fadeIn('100');
                var length = $(Item + ' .pitem').length;
                var x = 8;
                $(Item + ' .pitem:lt(' + x + ')').show();
                $(Item + ' > .ploadmore').click(function() {
                    x = (x + 8 <= length) ? x + 8 : length;
                    $(Item + ' .pitem:lt(' + x + ')').show();
                });
            });
            return false;
        });
        $('.single-tap-details').hide();
        $('.toggle-icon').hide();
        $('.single-tap-title').click(function(e) {
            e.preventDefault();
            var $this = $(this).parent().find('.single-tap-details');
            $('.single-tap-details').not($this).hide();
            $this.toggle();

        });
        $('.single-tap-title').click(function(e) {
            e.preventDefault();
            var $this = $(this).parent().find('.toggle-icon2');
            $('.toggle-icon2').not($this).hide();
            var $this2 = $(this).parent().find('.toggle-icon1');
            $('.toggle-icon1').not($this2).show();
            $this.toggle();
            $this2.toggle();
        });
    });
});