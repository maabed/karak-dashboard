$(function($) {
  'use strict';
  $('#refresh-page').click(function() {
    $('.overlay-container').addClass('overlay');
    $('.refresh-loader').css('display', 'block');
    setTimeout(function() {
      $('.overlay-container').removeClass('overlay');
      $('.refresh-loader').css('display', 'none');
    }, 2000);
  });
  $('.ShowMessage').click(function() {
    $('.msg-overlay').addClass('overlay');
    $('.msg-loader').css('display', 'block');
    setTimeout(function() {
      $('.msg-overlay').removeClass('overlay');
      $('.msg-loader').css('display', 'none');
    }, 2000);
  });
  $(document).ready(function() {
    $('#summernote-inbox').summernote({
      height: 200,
    });
  });
});