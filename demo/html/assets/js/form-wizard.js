/*!
Compose JS
Karak dashboard: v1.0.0
Author: New Release
http://newrelease.io
Copyright 2017 New Release
*/
$(function($) {

  'use strict';

  $(document).ready(function() {
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

    $('#submit-wizard').click(function() {
      setTimeout(function() {
        swal({
          title: 'Your form was submitted successfully',
          text: '',
          type: 'success'
        }, function() {
          location.reload();
        });
      }, 100);
    });
  });
});
