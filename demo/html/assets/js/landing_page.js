/*!
Landing page JS
Karak dashboard: v1.0.0
Author: New Release
http://newrelease.io
Copyright 2017 New Release
*/
$(function($) {

  'use strict';

  $(document).ready(function() {
    scaleVideoContainer();
    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');
    $(window).on('resize', function() {
      scaleVideoContainer();
      scaleBannerVideoSize('.video-container .poster img');
      scaleBannerVideoSize('.video-container .filter');
      scaleBannerVideoSize('.video-container video');
    });

    function scaleVideoContainer() {
      var height = $(window).height() + 5;
      var unitHeight = parseInt(height) + 'px';
      $('.homepage-hero-module').css('height', unitHeight);
    }

    function initBannerVideoSize(element) {
      $(element).each(function() {
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
      });
      scaleBannerVideoSize(element);
    }

    function scaleBannerVideoSize(element) {
      var windowWidth = $(window).width(),
        windowHeight = $(window).height() + 5,
        videoWidth,
        videoHeight;

      $(element).each(function() {
        var videoAspectRatio = $(this).data('height') / $(this).data('width');
        $(this).width(windowWidth);
        if (windowWidth < 1000) {
          videoHeight = windowHeight;
          videoWidth = videoHeight / videoAspectRatio;
          $(this).css({
            'margin-top': 0,
            'margin-left': -(videoWidth - windowWidth) / 2 + 'px'
          });
          $(this).width(videoWidth).height(videoHeight);
        }
        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');
      });
      $('.custom1').owlCarousel({
        items: 1,
        margin: 30,
        stagePadding: 30,
        smartSpeed: 450,
        nav: true,
        loop: true
      });
      $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1500);
              return false;
            }
          }
        });
      });

    }
  });
});