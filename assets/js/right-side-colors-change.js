$(function($) {

  'use strict';

  $(document).ready(function() {

    $("#apply").click(function() {
      var color = $("#coloepicker").val();
      localStorage.setItem('head', color);
      localStorage.setItem('cssfile', 'assets/css/colors-options/colorpicker-default.css');
      var csslink = localStorage.getItem("cssfile");
      document.getElementById("default-color-picker").href = csslink;
      $("#head , #searchTB, .sidebar-brand").css("background-color", color);
      document.getElementById("company-name").style.color = "#fff";
      document.getElementById("company-name").style.opacity = "0.8";
      localStorage.setItem("opacity", "0.8");
      $("#sidebar-wrapper").css("background-color", "#fff");
      $(".sidebar-nav li a").css({
        "border-bottom": "1px solid #E4E5E7",
        "border-right": "1px solid #E4E5E7",
        "color": "#34495E"
      });
      $(".nav-icon").css("color", "#C6C4DB");
      $(".user-box p").css("color", "#fff");
      $(".head-box i").css("color", "#fff");
      $("#company-name").css("color", "#fff");
      $(".body-header").css("border-left", "5px solid" + color);
      $(".sidebar-nav .selected a").css("border-left", "4px solid" + color);
      $(".sidebar-nav .selected a .nav-icon ").css("color", color);
      $(".selected-theme").hide();
    });

    $("#default-color-btn").click(function() {
      localStorage.clear();
      localStorage.removeItem("opacity");
      localStorage.setItem('cssfile', 'assets/css/colors-options/default.css');
      var csslink = localStorage.getItem("cssfile");
      document.getElementById("default-color-picker").href = csslink;
      $("#head").css("background-color", "#3B97D2");
      $(".body-header").css("border-left", "5px solid #3B97D2");
      $(".sidebar-nav .selected a").css("border-left", "4px solid #3B97D2");
      $("#searchTB ").css("background-color", "#3B97D2");
      $("#company-name").css("background-color", "#2980B9");
      $("#sidebar-wrapper").css("background-color", "#fff");
      $(".sidebar-nav li a").css({
        "border-bottom": "1px solid #E4E5E7",
        "border-right": "1px solid #E4E5E7",
        "color": "#34495E"
      });

      $(".nav-icon").css("color", "#C6C4DB");
      $(".user-box p").css("color", "#fff");
      $(".head-box i").css("color", "#fff");
      $("#company-name").css("color", "#fff");
      $(".sidebar-nav .selected a .nav-icon ").css("color", "#3B97D2");
      document.getElementById("company-name").style.opacity = "1";
      $(".selected-theme").hide();
      $('#default-color-btn > .col-sm-12 > .selected-theme').show();
      return false;
    });
    $("#orang-color-btn").click(function() {
      localStorage.clear();
      localStorage.removeItem("opacity");
      localStorage.setItem('cssfile', 'assets/css/colors-options/orang.css');
      var csslink = localStorage.getItem("cssfile");
      document.getElementById("default-color-picker").href = csslink;
      document.getElementById("company-name").style.opacity = 1;
      $("#head").css("background-color", "#f5d34b");
      $(".body-header").css("border-left", "5px solid #f5d34b");
      $(".sidebar-nav .selected a").css("border-left", "4px solid #f5d34b");
      $("#searchTB ").css("background-color", "#f5d34b");
      $("#company-name").css("background-color", "#f1c40f");
      $("#sidebar-wrapper").css("background-color", "#fff");
      $(".sidebar-nav li a").css("border-bottom", "1px solid #E4E5E7");
      $(".sidebar-nav li a").css("border-right", "1px solid #E4E5E7");
      $(".sidebar-nav li a").css("color", "#34495E");
      $(".nav-icon").css("color", "#C6C4DB");
      $(".user-box p").css("color", "#fff");
      $(".head-box i").css("color", "#fff");
      $("#company-name").css("color", "#fff");
      $(".sidebar-nav .selected a .nav-icon ").css("color", "#f5d34b");
      $(".selected-theme").hide();
      $('#orang-color-btn > .col-sm-12 > .selected-theme').show();
      return false;
    });
    $("#green-color-btn").click(function() {
      localStorage.clear();
      localStorage.removeItem("opacity");
      localStorage.setItem('cssfile', 'assets/css/colors-options/green.css');
      var csslink = localStorage.getItem("cssfile");
      document.getElementById("default-color-picker").href = csslink;
      document.getElementById("company-name").style.opacity = 1;
      $("#head").css("background-color", "#62d995");
      $(".body-header").css("border-left", "5px solid #62d995");
      $(".sidebar-nav .selected a").css("border-left", "4px solid #62d995");
      $("#searchTB ").css("background-color", "#62d995");
      $("#company-name").css("background-color", "#2ecc71");
      $("#sidebar-wrapper").css("background-color", "#fff");
      $(".sidebar-nav li a").css("border-bottom", "1px solid #E4E5E7");
      $(".sidebar-nav li a").css("border-right", "1px solid #E4E5E7");
      $(".sidebar-nav li a").css("color", "#34495E");
      $(".nav-icon").css("color", "#C6C4DB");
      $(".user-box p").css("color", "#fff");
      $(".head-box i").css("color", "#fff");
      $("#company-name").css("color", "#fff");
      $(".sidebar-nav .selected a .nav-icon ").css("color", "#62d995");
      $(".selected-theme").hide();
      $('#green-color-btn > .col-sm-12 > .selected-theme').show();
      return false;
    });
    $("#whit-color-btn").click(function() {
      localStorage.clear();
      localStorage.removeItem("opacity");
      localStorage.setItem('cssfile', 'assets/css/colors-options/white.css');
      var csslink = localStorage.getItem("cssfile");
      document.getElementById("default-color-picker").href = csslink;
      document.getElementById("company-name").style.opacity = 1;
      $("#head").css("background-color", "#fff");
      $("#head").css("box-shadow", " 2px 2px 2px #ededed");
      $("#searchTB ").css("background-color", "#828282");
      $(".body-header").css("border-left", "5px solid #828282");
      $(".sidebar-nav .selected a").css("border-left", "4px solid #828282");
      $("#company-name").css("background-color", "#828282");
      $("#company-name").css("color", "#fff");
      $(".badge-notify").css("background-color", "#e0e0e0");
      $(".user-box p").css("color", "#686868");
      $(".head-box i").css("color", "#686868");
      $("#sidebar-wrapper").css("background-color", "#fff");
      $(".sidebar-nav li a").css("border-bottom", "1px solid #E4E5E7");
      $(".sidebar-nav li a").css("border-right", "1px solid #E4E5E7");
      $(".sidebar-nav li a").css("color", "#34495E");
      $(".sidebar-nav .selected a .nav-icon ").css("color", "#828282");
      $(".selected-theme").hide();
      $('#whit-color-btn > .col-sm-12 > .selected-theme').show();
      return false;
    });
    $("#dark1-color-btn").click(function() {
      localStorage.clear();
      localStorage.removeItem("opacity");
      localStorage.setItem('cssfile', 'assets/css/colors-options/dark1.css');
      var csslink = localStorage.getItem("cssfile");
      document.getElementById("default-color-picker").href = csslink;
      $("#head").css("background-color", "#2b3643");
      $(".body-header").css("border-left", "5px solid #2b3643");
      $(".sidebar-nav .selected a").css("border-left", "4px solid #2b3643");
      $("#searchTB ").css("background-color", "#2b3643");
      $("#company-name").css("background-color", "#303b49");
      $("#sidebar-wrapper").css("background-color", "#364150");
      $(".sidebar-nav li a").css("border-bottom", "1px solid #3d4957");
      $(".sidebar-nav li a").css("border-right", "1px solid #3d4957");
      $(".sidebar-nav li a").css("color", "#b0b4c4");
      $(".nav-icon").css("color", "#667287");
      $(".user-box p").css("color", "#fff");
      $(".head-box i").css("color", "#fff");
      $("#company-name").css("color", "#fff");
      $(".sidebar-nav .selected a .nav-icon ").css("color", "#2b3643");
      document.getElementById("company-name").style.opacity = "1";
      $(".selected-theme").hide();
      $('#dark1-color-btn > .col-sm-12 > .selected-theme').show();
      return false;
    });
    $("#dark2-color-btn").click(function() {
      localStorage.clear();
      $(".selected-theme").hide();
      $('#dark2-color-btn > .col-sm-12 > .selected-theme').show();
      localStorage.removeItem("opacity");
      localStorage.setItem('cssfile', 'assets/css/colors-options/dark2.css');
      var csslink = localStorage.getItem("cssfile");
      $("#head").css("background-color", "#262930");
      $(".body-header").css("border-left", "5px solid #262930");
      $(".sidebar-nav .selected a").css("border-left", "4px solid #262930");
      $("#searchTB ").css("background-color", "#262930");
      $("#company-name").css("background-color", "#282b32");
      $("#sidebar-wrapper").css("background-color", "#2a2e35");
      $(".sidebar-nav li a").css("border-bottom", "1px solid #262930");
      $(".sidebar-nav li a").css("border-right", "1px solid #262930");
      $(".sidebar-nav li a").css("color", "#5b616d");
      $(".nav-icon").css("color", "#767d8a");
      $(".user-box p").css("color", "#fff");
      $(".head-box i").css("color", "#fff");
      $("#company-name").css("color", "#fff");
      $(".sidebar-nav .selected a .nav-icon ").css("color", "#262930");
      document.getElementById("company-name").style.opacity = "1";
      document.getElementById("default-color-picker").href = csslink;
      return false;
    });
  });
});
