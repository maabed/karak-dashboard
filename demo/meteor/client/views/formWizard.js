Template.wizard.onCreated(function wizardOnCreated() {

});

Template.wizard.onRendered(function wizardonRendered() {
  $('#rootwizard').bootstrapWizard({
    onNext: function() {
      $('#first_name-resault').html($('#first_name').val());
      $('#last_name-resault').html($('#last_name').val());
      $('#email-resault').html($('#email').val());
      $('#phone-resault').html($('#phone').val());
      $('#address-resault').html($('#address').val());
      $('#country-resault').html($('#country').val());
      $('#city-resault').html($('#city').val());
      $('#holder-result').html($('#holder').val());
      $('#cardno-result').html($('#card_number').val());
      $('#cvc-result').html($('#cvc').val());
      $('#expiration-result').html($('#exp-month').val() + $('#exp-year').val());
    },
  });

  $('.select2-init-single').select2();
  $('[data-toggle="popover"]').popover();
});

Template.wizard.helpers({

});

Template.wizard.events({
  'click #submit-wizard'(event, instance) {
    setTimeout(function () {
      swal({
        title: 'Your form was submitted successfully',
        text: '',
        type: 'success',
      }, function () {
        location.reload();
      });
    }, 100);
  },
});
