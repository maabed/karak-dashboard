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

 $('.submenue').hide();
 $('.nav-hyperlink').click(function(e) {
   e.preventDefault();
   var $this = $(this).parent().find('.submenue');
   $('.submenue').not($this).hide(300);
   $this.toggle(300);
 });

 /* search  */
 $('.search-text-box').keydown(function(e) {
   if (e.which === 13) {
     if ($('.search-text-box').val() != ' ') {
       window.location = 'search.html';
     }
   }
 });

 $('.sidebar-nav').find('li.selected').find('.submenue').css('display', 'block');

 $('.submenue').css({
   'padding': '0px',
   'position': 'relative',
   'padding-left': '0px'
 });
 $('.submenue > li > a').not( ".chat-view-navbar .submenue > li > a").css('margin-left', '40px');
});

function printbtn() {
 window.print();
}