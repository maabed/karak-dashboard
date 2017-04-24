Template.login.onCreated(function formsOnCreated() {

});

Template.login.onRendered(function formsOnRendered() {  

});


Template.login.events({
  'click .toggle'(event, instance) {
    $('.container').stop().addClass('active');
  },
  'click .close'(event, instance) {
    $('.container').stop().removeClass('active');
  },
  'click #forgot'(event, instance) {
    $('.toggle').css('display', 'none');
    $('.login').css('display', 'none');
    $('.forgot').fadeIn('slow');
  },
  'click #login'(event, instance) {
    $('.forgot').css('display', 'none');
    $('.toggle').fadeIn('slow');
    $('.login').fadeIn('slow');
  },
});
