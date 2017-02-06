(function($) {
  'use strict';
  $(document).ready(function() {
    $('.submenu-li a i').css({'font-size': '0.8em','margin-top': '1.3em'});
  });
  $('#menu-toggle').click(function(e) {
    e.preventDefault();
    $('#wrapper').toggleClass('toggled');
  });
  $('.SubMenue').hide();
  $('.MainMenue').click(function(e) {
    e.preventDefault();
    var $this = $(this).parent().find('.Submenue');
    $this.toggle(300);
  });
  $('#left-Side-Section-Togle').click(function() {
    $('.InboxLeftSide').toggleClass('show-left');
  });
})(window.jQuery);