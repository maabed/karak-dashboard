Template.sidebar.helpers( {
   nav : [
    {
    link : "index.html",
    icon : "fa-tachometer",
    text : "Dashboard",
    hassub: 1
    },
    {
      link : "#",
      icon: "fa-file-text",
      text : "Forms",
      hassub: 0,

      submenu : [
      {
        link : "forms.html",
        text : "Form Elements"
      },
      {
        link : "form_wizard.html",
        text : "Form Wizard"
      },
      ],
    },
    {
      link : "#",
      icon: "fa-pie-chart",
      text : "Charts",
      hassub: 1
    },
    {
      link: "inbox.html",
      icon : "fa-envelope",
      text : "Email",
      hassub: 1
    },
    {
      link: "#",
      icon : "fa-eye ",
      text : "UI Elements",
      hassub: 0,

      submenu : [
      {
        link : "icons.html",
        text : "Icons"
      },
      {
        link : "colors.html",
        text : "Colors"
      },
      {
        link : "buttons.html",
        text : "Buttons"
      },
      {
        link : "Notifications.html",
        text : "Notifications"
      },
            {
        link : "modals.html",
        text : "Modals"
      },
      {
        link : "tabs.html",
        text : "Tabs"
      },
      {
        link : "cards.html",
        text : "Cards"
      },
            {
        link : "loading.html",
        text : "Loading"
      },
      {
        link : "panels.html",
        text : "Panels"
      },
      {
        link : "lists.html",
        text : "Lists"
      },
      {
        link : "menus.html",
        text : "Menus"
      },
      {
        link : "hover.html",
        text : "Hover"
      },
      ],

    },
    {
      link: "calendar.html",
      icon : "fa-calendar-check-o",
      text : "Calendar",
      hassub: 1
    },
    {
      link: "#",
      icon : "fa-star",
      text : "App Views",
      hassub: 0,

      submenu : [
      {
        link : "Budget.html",
        text : "Budget"
      },
      {
        link : "chat.html",
        text : "Chat"
      },
      {
        link : "social.html",
        text : "Social"
      },
      {
        link : "landing_page.html",
        text : "Landing Page"
      },
      ],
    },
    {
      link: "#",
      icon : "fa-table",
      text : "Tables",
      hassub: 0,

      submenu : [
      {
        link : "tables.html",
        text : "Basic Table"
      },
      {
        link : "data_tables.html",
        text : "Data Table"
      },
      ]
    },
    {
      link: "#",
      icon : "fa-map",
      text : "Maps",
      hassub: 0,

      submenu : [
      {
        link : "map.html",
        text : "Vector Maps"
      },
      {
        link : "gogole_map.html",
        text : "Google Map"
      },
      ]
    },
    {
      link: "#",
      icon : "fa-gift",
      text : "Extra",
      hassub: 0,

      submenu : [
      {
        link : "invoice.html",
        text : "Invoice"
      },
      {
        link : "error400.html",
        text : "400 Page"
      },
      {
        link : "error500.html",
        text : "500 Page"
      },
      {
        link : "login.html",
        text : "Login & Registration"
      },
      {
        link : "lock_screen.html",
        text : "Lock Screen"
      },
      {
        link : "tour.html",
        text : "Tour"
      },
      ]
    }

  ],
});

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