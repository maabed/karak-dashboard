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

Template.sidebar.helpers({
    'isActive': function (itemName) {

        if (FlowRouter.getRouteName() == itemName) {
            return 'selected open active';
        }

        else {
            return '';
        }
    },
    'opened': function (itemName) {
        if (FlowRouter.getRouteName() == itemName) {
            return 'open';
        }

        else {
            return '';
        }
    },
    'inner': function (itemName) {
        if (FlowRouter.getRouteName() == itemName) {
            return 'inner-selected';
        }

        else {
            return '';
        }
    },
});
