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
          link: 'form_wizard.html',
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
        link: 'inbox.html',
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
          link: 'icons.html',
          text: 'Icons',
        },
        {
          link: 'colors.html',
          text: 'Colors',
        },
        {
          link: 'buttons.html',
          text: 'Buttons',
        },
        {
          link: 'Notifications.html',
          text: 'Notifications',
        },
        {
          link: 'modals.html',
          text: 'Modals',
        },
        {
          link: 'tabs.html',
          text: 'Tabs',
        },
        {
          link: 'cards.html',
          text: 'Cards',
        },
        {
          link: 'loading.html',
          text: 'Loading',
        },
        {
          link: 'panels.html',
          text: 'Panels',
        },
        {
          link: 'lists.html',
          text: 'Lists',
        },
        {
          link: 'menus.html',
          text: 'Menus',
        },
        {
          link: 'hover.html',
          text: 'Hover',
        },
        ],

      },
      {
        link: 'calendar.html',
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
          link: 'Budget.html',
          text: 'Budget',
        },
        {
          link: 'chat.html',
          text: 'Chat',
        },
        {
          link: 'social.html',
          text: 'Social',
        },
        {
          link: 'landing_page.html',
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
          link: 'data_tables.html',
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
          link: 'map.html',
          text: 'Vector Maps',
        },
        {
          link: 'gogole_map.html',
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
          link: 'invoice.html',
          text: 'Invoice',
        },
        {
          link: 'error400.html',
          text: '400 Page',
        },
        {
          link: 'error500.html',
          text: '500 Page',
        },
        {
          link: 'login.html',
          text: 'Login & Registration',
        },
        {
          link: 'lock_screen.html',
          text: 'Lock Screen',
        },
        {
          link: 'tour.html',
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
