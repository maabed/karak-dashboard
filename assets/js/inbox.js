/*!
Inbox JS
Blue Dashboard: v1.0.0
Author: New Release
http://newrelease.io
Copyright 2017 New Release
*/
$(function($) {

  'use strict';

  $(document).ready(function() {

    $('#refresh-page').click(function() {
      $('.overlay-container').addClass('overlay');
      $('.refresh-loader').css('display', 'block');
      setTimeout(function() {
        $('.overlay-container').removeClass('overlay');
        $('.refresh-loader').css('display', 'none');
      }, 500);
    });

    $('.show-message').click(function() {
      $('.msg-overlay').addClass('overlay');
      $('.msg-loader').css('display', 'block');
      setTimeout(function() {
        $('.msg-overlay').removeClass('overlay');
        $('.msg-loader').css('display', 'none');
      }, 500);
    });

    $('#summernote-inbox').summernote({
      height: 200,
    });

  });

});
