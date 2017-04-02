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

 $('.sidebar-submenue').hide();
 $('.has-submenu > a').click(function(e) {
  e.preventDefault();
   var $this = $(this).parent().find('.sidebar-submenue');
   $('.sidebar-submenue').not($this).hide(300);
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

 $('.sidebar').find('li.selected').find('.sidebar-submenue').css('display', 'block');


 $('.sidebar-submenue > li > a').not( ".chat-view-navbar .sidebar-submenue > li > a").css('margin-left', '40px');

 $('.has-submenu > a').click(function(){
  var current = $(this);
  var parent = $(this).parent().parent();
  var li = $(this).parent();
  if(li.hasClass("open active")){
    current.children('.left-arrow').removeClass("open");
    li.removeClass("open active");  
  }
  else{
    parent.children('li.open').find('.left-arrow').removeClass('open');
    parent.children('li.open').removeClass("open active");
    current.children('.left-arrow').addClass("open");
    li.addClass("open active");
  }
   
});

});

function printbtn() {
 window.print();
}