/*!
Page theme JS
Karak dashboard: v1.0.0
Author: New Release
http://newrelease.io
Copyright 2017 New Release
*/
$(function($) {

  'use strict';
  $(document).ready(function() {
    if (localStorage.getItem("cssfile") && localStorage.getItem("head")) {
      $('#sidebar-wrapper').css('background-color', '#fff');
      $('.sidebar-nav li a').css('border-bottom', '1px solid #E4E5E7');
      $('.sidebar-nav li a').css('border-right', '1px solid #E4E5E7');
      $('.sidebar-nav li a').css('color', '#34495E');
      $('.nav-icon').css('color', '#C6C4DB')
      $('.user-box p').css('color', '#fff');
      $('.head-box i').css('color', '#fff');
      $('#company-name').css('color', '#fff');
    } else if (!localStorage.getItem("cssfile")) {
      //alert("no theam")
      $('head').append('<link rel="stylesheet" type="text/css" href="assets/css/colors-options/default.css">');
      $('#default-color-btn > .col-sm-12 > .selected-theme').show();
    } else {
      var color = localStorage.getItem('cssfile');
      $('head').append('<link rel="stylesheet" type="text/css" href="' + color + '">');
      switch (color) {
        case "assets/css/colors-options/default.css":
          //alert("default theam");
          $('.selected-theme').hide();
          $('#default-color-btn > .col-sm-12 > .selected-theme').show();
          break;
        case "assets/css/colors-options/orang.css":
          //alert("orang theam");
          $('.selected-theme').hide();
          $('#orang-color-btn > .col-sm-12 > .selected-theme').show();
          break;
        case "assets/css/colors-options/green.css":
          //alert("green theam");
          $('.selected-theme').hide();
          $('#green-color-btn > .col-sm-12 > .selected-theme').show();
          break;
        case "assets/css/colors-options/dark.css":
          //alert("dark1 theam");
          $('.selected-theme').hide();
          $('#dark1-color-btn > .col-sm-12 > .selected-theme').show();
          break;
        case "assets/css/colors-options/grey.css":
          //alert("dark2 theam");
          $('.selected-theme').hide();
          $('#dark2-color-btn > .col-sm-12 > .selected-theme').show();
          break;
        case "assets/css/colors-options/white.css":
          //alert("white theam");
          $('.selected-theme').hide();
          $('#whit-color-btn > .col-sm-12 > .selected-theme').show();
          break;
        default:
          //alert("no theam switch");
      }
    }
  });

});
