/*!
Main JS
Blue Dashboard: v1.0.0
Author: New Release
http://newrelease.io
Copyright 2017 New Release
*/
$(document).ready(function() {
  $('#menu-toggle').click(function(e) {
    e.preventDefault();
    $('.wrapper').toggleClass('toggled');
  });

  $('.SubMenue').hide();
  $('.MainMenue').click(function(e) {
    e.preventDefault();
    var $this = $(this).parent().find('.Submenue');
    $('.Submenue').not($this).hide(300);
    $this.toggle(300);
  });

  // Left side section
  $('#left-Side-Section-Togle').click(function() {
    $('.inbox-nav').toggleClass('show-left');
  });

  /* search  */
  $('.search-text-box').keydown(function(e) {
    if (e.which === 13) {
      if ($('.search-text-box').val() != ' ') {
        window.location = 'search.html';
      }
    }
  });

  $('.sidebar-nav').find('li.selected').find('.Submenue').css('display', 'block');

  $('.Submenue').css({
    'padding': '0px',
    'position': 'relative',
    'padding-left': '0px'
  });
  $('.Submenue > li > a').css('margin-left', '40px');
});

// function closeToggel() {
//   var a = document.getElementById('Right-Side-Section');
//   a.style.width = '0px';
//   $('#Right-Side-Section-Toggle').show(0);
// }

function printbtn() {
  window.print();
}