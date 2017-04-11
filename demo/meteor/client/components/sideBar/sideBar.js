Template.sidebar.helpers({
  menuItem() {
    const menuItem = [
      {
        link: '/',
        icon: 'fa-tachometer',
        text: 'Dashboard',
        hassub: 1,
      },
      {
        link: '#',
        icon: 'fa-file-text',
        text: 'Forms',
        hassub: 0,

        submenu: [{
          link: '/forms',
          text: 'Form Elements',
        },
        {
          link: '/form_wizard',
          text: 'Form Wizard',
        },
        ],
      },
      {
        link: '/charts',
        icon: 'fa-pie-chart',
        text: 'Charts',
        hassub: 1,
      },
      {
        link: '/inbox',
        icon: 'fa-envelope',
        text: 'Email',
        hassub: 1,
      },
      {
        link: '#',
        icon: 'fa-eye ',
        text: 'UI Elements',
        hassub: 0,

        submenu: [{
          link: '/icons',
          text: 'Icons',
        },
        {
          link: '/colors',
          text: 'Colors',
        },
        {
          link: '/buttons',
          text: 'Buttons',
        },
        {
          link: '/Notifications',
          text: 'Notifications',
        },
        {
          link: '/modals',
          text: 'Modals',
        },
        {
          link: '/tabs',
          text: 'Tabs',
        },
        {
          link: '/cards',
          text: 'Cards',
        },
        {
          link: '/loading',
          text: 'Loading',
        },
        {
          link: '/panels',
          text: 'Panels',
        },
        {
          link: '/lists',
          text: 'Lists',
        },
        {
          link: '/menus',
          text: 'Menus',
        },
        {
          link: '/hover',
          text: 'Hover',
        },
        ],

      },
      {
        link: '/calendar',
        icon: 'fa-calendar-check-o',
        text: 'Calendar',
        hassub: 1,
      },
      {
        link: '#',
        icon: 'fa-star',
        text: 'App Views',
        hassub: 0,

        submenu: [{
          link: '/Budget',
          text: 'Budget',
        },
        {
          link: '/chat',
          text: 'Chat',
        },
        {
          link: '/social',
          text: 'Social',
        },
        {
          link: '/landing_page',
          text: 'Landing Page',
        },
        ],
      },
      {
        link: '#',
        icon: 'fa-table',
        text: 'Tables',
        hassub: 0,

        submenu: [{
          link: '/tables',
          text: 'Basic Table',
        },
        {
          link: '/data_tables',
          text: 'Data Table',
        },
        ],
      },
      {
        link: '#',
        icon: 'fa-map',
        text: 'Maps',
        hassub: 0,

        submenu: [{
          link: '/map',
          text: 'Vector Maps',
        },
        {
          link: '/gogole_map',
          text: 'Google Map',
        },
        ],
      },
      {
        link: '#',
        icon: 'fa-gift',
        text: 'Extra',
        hassub: 0,

        submenu: [{
          link: '/invoice',
          text: 'Invoice',
        },
        {
          link: '/error400',
          text: '400 Page',
        },
        {
          link: '/error500',
          text: '500 Page',
        },
        {
          link: '/login',
          text: 'Login & Registration',
        },
        {
          link: '/lock_screen',
          text: 'Lock Screen',
        },
        {
          link: '/tour',
          text: 'Tour',
        },
        ],
      }];
    return menuItem;
  },
});


Template.sidebar.events({
  'click .has-submenu > a'(event, instance) {
    event.preventDefault();
    const $this = $(event.target).parent().find('.sidebar-submenue');
    $('.sidebar-submenue').not($this).hide(300);
    $this.toggle(300);
    const current = $(event.target);
    const parent = $(event.target).parent().parent();
    const li = $(event.target).parent();
    if (li.hasClass('open active')) {
      current.children('.left-arrow').removeClass('open');
      li.removeClass('open active');
    } else {
      parent.children('li.open').find('.left-arrow').removeClass('open');
      parent.children('li.open').removeClass('open active');
      current.children('.left-arrow').addClass('open');
      li.addClass('open active');
    }
  },

  'keydown .search-text-box'(event, instance) {
    if (event.which === 13) {
      if ($('.search-text-box').val() != ' ') {
        window.location = 'search.html';
      }
    }
  },
});

Template.sidebar.onRendered(function() {
 $('.sidebar-submenue').hide();
 $('.sidebar').find('li.selected').find('.sidebar-submenue').css('display', 'block');
 $('.sidebar-submenue > li > a').not( '.chat-view-navbar .sidebar-submenue > li > a').css('margin-left', '40px');
});
