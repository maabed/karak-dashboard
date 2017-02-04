$(function($) {

  'use strict';

  $('.toggle').on('click', function() {
    $('.container').stop().addClass('active');
  });
  $('.close').on('click', function() {
    $('.container').stop().removeClass('active');
  });
  $('#forgot').click(function() {
    $('.toggle').css('display', 'none');
    $('.login').css('display', 'none');
    $('.forgot').fadeIn('slow');
  });
  $('#login').click(function() {
    $('.forgot').css('display', 'none');
    $('.toggle').fadeIn('slow');
    $('.login').fadeIn('slow');
  });
  
});