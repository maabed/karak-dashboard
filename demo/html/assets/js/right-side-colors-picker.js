/*!
Right side colors JS
Blue Dashboard: v1.0.0
Author: New Release
http://newrelease.io
Copyright 2017 New Release
*/
$(function($) {

  'use strict';

  $(document).ready(function() {
    $('#default-color-btn').click(function() {
      $('#head').css('background-color', '#3B97D2');
      $('.body-header').css('border-left', '5px solid #3B97D2');
      $('.sidebar .selected a').css('border-left', '4px solid #3B97D2');
      $('.main-dashboard-search ').css('background-color', '#3B97D2');
      $('#company-name').css('background-color', '#2980B9');
      $('.sidebar-wrapper').css('background-color', '#fff');
      $('.sidebar li a').css('border-bottom', '1px solid #E4E5E7');
      $('.sidebar li a').css('border-right', '1px solid #E4E5E7');
      $('.sidebar li a').css('color', '#34495E');
      $('.nav-icon').css('color', '#C6C4DB');
      $('.user-box p').css('color', '#fff');
      $('.head-box i').css('color', '#fff');
      $('#company-name').css('color', '#fff');
      $('.sidebar .selected a .nav-icon ').css('color', '#3B97D2');
      $('.selected-theme').hide();
      $('#default-color-btn > .col-sm-12 > .selected-theme').show();
      $('.sidebar li').removeClass('dark-theme-hover');
      $('.sidebar .selected ul li a').css('border', '0px');
      $('.sidebar-submenue li a').css('border', '0px');

    });

    $('#orang-color-btn').click(function() {
      $('#head').css('background-color', '#f5d34b');
      $('.body-header').css('border-left', '5px solid #f5d34b');
      $('.sidebar .selected a').css('border-left', '4px solid #f5d34b');
      $('.main-dashboard-search').css('background-color', '#f5d34b');
      $('#company-name').css('background-color', '#f1c40f');
      $('.sidebar-wrapper').css('background-color', '#fff');
      $('.sidebar li a').css('border-bottom', '1px solid #E4E5E7');
      $('.sidebar li a').css('border-right', '1px solid #E4E5E7');
      $('.sidebar li a').css('color', '#34495E');
      $('.nav-icon').css('color', '#C6C4DB');
      $('.user-box p').css('color', '#fff');
      $('.head-box i').css('color', '#fff');
      $('#company-name').css('color', '#fff');
      $('.sidebar .selected a .nav-icon').css('color', '#f5d34b');
      $('.selected-theme').hide();
      $('#orang-color-btn > .col-sm-12 > .selected-theme').show();
      $('.sidebar li').removeClass('dark-theme-hover');
      $('.sidebar .selected ul li a').css('border', '0px');
      $('.sidebar-submenue li a').css('border', '0px');

    });

    $('#green-color-btn').click(function() {
      $('#head').css('background-color', '#62d995');
      $('.body-header').css('border-left', '5px solid #62d995');
      $('.sidebar .selected a').css('border-left', '4px solid #62d995');
      $('.main-dashboard-search').css('background-color', '#62d995');
      $('#company-name').css('background-color', '#2ecc71');
      $('.sidebar-wrapper').css('background-color', '#fff');
      $('.sidebar li a').css('border-bottom', '1px solid #E4E5E7');
      $('.sidebar li a').css('border-right', '1px solid #E4E5E7');
      $('.sidebar li a').css('color', '#34495E');
      $('.nav-icon').css('color', '#C6C4DB');
      $('.user-box p').css('color', '#fff');
      $('.head-box i').css('color', '#fff');
      $('#company-name').css('color', '#fff');
      $('.sidebar .selected a .nav-icon').css('color', '#62d995');
      $('.selected-theme').hide();
      $('#green-color-btn > .col-sm-12 > .selected-theme').show();
      $('.sidebar li').removeClass('dark-theme-hover');
      $('.sidebar .selected ul li a').css('border', '0px');
      $('.sidebar-submenue li a').css('border', '0px');

    });

    $('#whit-color-btn').click(function() {
      $('#head').css('background-color', '#fff');
      $('#head').css('box-shadow', ' 2px 2px 2px #ededed');
      $('.main-dashboard-search').css('background-color', '#828282');
      $('.body-header').css('border-left', '5px solid #828282');
      $('.sidebar .selected a').css('border-left', '4px solid #828282');
      $('#company-name').css('background-color', '#828282');
      $('#company-name').css('color', '#fff');
      $('.badge-notify').css('background-color', '#e0e0e0');
      $('.user-box p').css('color', '#686868');
      $('.head-box i').css('color', '#686868');
      $('.sidebar-wrapper').css('background-color', '#fff');
      $('.sidebar li a').css('border-bottom', '1px solid #E4E5E7');
      $('.sidebar li a').css('border-right', '1px solid #E4E5E7');
      $('.sidebar li a').css('color', '#34495E');
      $('.sidebar .selected a .nav-icon').css('color', '#828282');
      $('.selected-theme').hide();
      $('#whit-color-btn > .col-sm-12 > .selected-theme').show();
      $('.sidebar li').removeClass('dark-theme-hover');
      $('.sidebar .selected ul li a').css('border', '0px');
      $('.sidebar-submenue li a').css('border', '0px');

    });

    $('#dark1-color-btn').click(function() {
      $('#head').css('background-color', '#2b3643');
      $('.body-header').css('border-left', '5px solid #2b3643');
      $('.sidebar .selected a').css('border-left', '4px solid #F1F3F6');
      $('.main-dashboard-search').css('background-color', '#2b3643');
      $('#company-name').css('background-color', '#303b49');
      $('.sidebar-wrapper').css('background-color', '#364150');
      $('.sidebar li a').css('border-bottom', '1px solid #3d4957');
      $('.sidebar li a').css('border-right', '1px solid #3d4957');
      $('.sidebar li a').css('color', '#b0b4c4');
      $('.sidebar li').addClass('dark-theme-hover');
      $('.nav-icon').css('color', '#667287');
      $('.user-box p').css('color', '#fff');
      $('.head-box i').css('color', '#fff');
      $('#company-name').css('color', '#fff');
      $('.sidebar .selected a .nav-icon').css('color', '#2b3643');
      $('.selected-theme').hide();
      $('#dark1-color-btn > .col-sm-12 > .selected-theme').show();
      $('.sidebar .selected ul li a').css('border', '0px');
      $('.sidebar-submenue li a').css('border', '0px');

    });

    $('#dark2-color-btn').click(function() {
      $('.selected-theme').hide();
      $('#dark2-color-btn > .col-sm-12 > .selected-theme').show();
      $('#head').css('background-color', '#262930');
      $('.body-header').css('border-left', '5px solid #262930');
      $('.sidebar .selected a').css('border-left', '4px solid #F1F3F6');
      $('.main-dashboard-search').css('background-color', '#262930');
      $('#company-name').css('background-color', '#282b32');
      $('.sidebar-wrapper').css('background-color', '#2a2e35');
      $('.sidebar li a').css('border-bottom', '1px solid #262930');
      $('.sidebar li a').css('border-right', '1px solid #262930');
      $('.sidebar li a').css('color', '#5b616d');
      $('.sidebar li').addClass('dark-theme-hover');
      $('.nav-icon').css('color', '#767d8a');
      $('.user-box p').css('color', '#fff');
      $('.head-box i').css('color', '#fff');
      $('#company-name').css('color', '#fff');
      $('.sidebar .selected a .nav-icon').css('color', '#262930');
      $('.sidebar .selected ul li a').css('border', '0px');
      $('.sidebar-submenue li a').css('border', '0px');
    });
  });
});