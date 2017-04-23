Template.lockScreen.onCreated(function formsOnCreated() {

});

Template.lockScreen.onRendered(function formsOnRendered() {

});


Template.lockScreen.events({
  'click #forgot'(event, instance) {
    $('.lock').css('display', 'none');
    $('.forgot').fadeIn('slow');
  },
});
