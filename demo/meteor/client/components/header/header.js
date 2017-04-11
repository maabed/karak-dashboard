Template.header.helpers({
    notifications: [{
        image: '/images/user_01_54.jpg',
        name: 'Mohammad Meshaal',
        notification: 'wants your confirmation on his Leave Request on 12 Mar 2017',
    }, {
        image: '/images/user_04_54.jpg',
        name: 'Nasir ahmad',
        notification: 'sent a payment on 11 Mar 2017',
    }, ],
    messages: [{
        image: '/images/user_02_54.jpg',
        name: 'Layla smith',
        message: 'Job offer',
    }, {
        image: '/images/user_01_54.jpg',
        name: 'Mohammad Meshaal',
        message: 'Please send me the work templates',
    }, {
        image: '/images/user_03_54.jpg',
        name: 'Dana khalid',
        message: 'Do you wanna hang out today?',
    }, {
        image: '/images/user_04_54.jpg',
        name: 'Nasir ahmad',
        message: 'Are we going to the match today?',
    }, ],
});

Template.header.events({
  'click .menu-toggle'(event) {
    event.preventDefault();
    $('.wrapper').toggleClass('toggled');
  },

  'click #notifications'(event) {
    $('.notifecations-box').fadeToggle();
    $('.messages-box').fadeOut();
    $('#not-badg').fadeOut();
    $('.user-info-box').fadeOut();
  },
  'click #messages'(event) {
    $('.messages-box').fadeToggle();
    $('.notifecations-box').fadeOut();
    $('#message-badg').fadeOut();
    $('.user-info-box').fadeOut();
  },
  'click #user-box'(event) {
    $('.user-info-box').fadeToggle();
    $('.notifecations-box').fadeOut();
    $('.messages-box').fadeOut();
  },
  'mouseup document'(event) {
    const container = $('.notifecations-box, .messages-box, .user-info-box');
    if (!container.is(event.target) && container.has(event.target).length === 0) {
      container.hide();
    }
  },
});
