Template.chat.onCreated(function chatOnCreated() {

});

Template.chat.onRendered(function chatOnRendered() {

});

Template.chat.helpers({

});

Template.chat.events({
  'click #user-box' (event) {
    $('.user-info-box').fadeToggle();
    $('.notifecations-box').fadeOut();
    $('.messages-box').fadeOut();
  },
  'mouseup .wrapper' (event) {
    var container = $('.user-info-box');
    if (!container.is(event.target) && container.has(event.target).length === 0) {
      container.hide();
    }
  },
});
