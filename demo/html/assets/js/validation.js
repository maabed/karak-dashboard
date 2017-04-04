/*!
Validation JS
Karak dashboard: v1.0.0
Author: New Release
http://newrelease.io
Copyright 2017 New Release
*/
$(function($) {

  'use strict';

  $(document).ready(function() {

    $.validator.setDefaults({
      submitHandler: function() {
        alert('submitted!');
      }
    });

    $('#form1').validate({
      rules: {
        fullName: {
          required: true,
          minlength: 2
        },
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true,
          minlength: 10
        },
        city: {
          required: true,
          minlength: 2
        },
      },
      messages: {
        full_name: 'Please enter your full name',
        email: 'Please enter your email',
        phone: {
          required: 'Please enter a phone number',
          minlength: 'Your phone number must consist of at least 10 digits'
        },
        city: {
          required: 'Please provide a city',
          minlength: 'Your password must be at least 2 characters long'
        },
      },
      errorElement: 'em',
      errorPlacement: function(error, element) {
        // Add the `help-block` class to the error element
        error.addClass('help-block');

        // Add `has-feedback` class to the parent div.form-group
        // in order to add icons to inputs
        element.parents('.parent').addClass('has-feedback');

        if (element.prop('type') === 'checkbox') {
          error.insertAfter(element.parent('label'));
        } else {
          error.insertAfter(element);
        }

        // Add the span element, if doesn't exists, and apply the icon classes to it.
        if (!element.next('span')[0]) {
          $('<span class="glyphicon glyphicon-remove form-control-feedback"></span>').insertAfter(element);
        }
      },
      success: function(label, element) {
        // Add the span element, if doesn't exists, and apply the icon classes to it.
        if (!$(element).next('span')[0]) {
          $('<span class="glyphicon glyphicon-ok form-control-feedback"></span>').insertAfter($(element));
        }
      },
      highlight: function(element) {
        $(element).parents('.parent').addClass('has-error').removeClass('has-success');
        $(element).next('span').addClass('glyphicon-remove').removeClass('glyphicon-ok');
      },
      unhighlight: function(element) {
        $(element).parents('.parent').addClass('has-success').removeClass('has-error');
        $(element).next('span').addClass('glyphicon-ok').removeClass('glyphicon-remove');
      }
    });

    $('#form2').validate({
      rules: {
        user_name: 'required',
        password: 'required',
      },
      messages: {
        user_name: 'Please enter your username',
        password: 'Please enter your password',
      },
      errorElement: 'em',
      errorPlacement: function(error, element) {
        // Add the `help-block` class to the error element
        error.addClass('help-block');

        // Add `has-feedback` class to the parent div.form-group
        // in order to add icons to inputs
        element.parents('.parent').addClass('has-feedback');

        if (element.prop('type') === 'checkbox') {
          error.insertAfter(element.parent('label'));
        } else {
          error.insertAfter(element);
        }

        // Add the span element, if doesn't exists, and apply the icon classes to it.
        if (!element.next('span')[0]) {
          $('<span class="glyphicon glyphicon-remove form-control-feedback"></span>').insertAfter(element);
        }
      },
      success: function(label, element) {
        // Add the span element, if doesn't exists, and apply the icon classes to it.
        if (!$(element).next("span")[0]) {
          $('<span class="glyphicon glyphicon-ok form-control-feedback"></span>').insertAfter($(element));
        }
      },
      highlight: function(element) {
        $(element).parents('.parent').addClass('has-error').removeClass('has-success');
        $(element).next('span').addClass('glyphicon-remove').removeClass('glyphicon-ok');
      },
      unhighlight: function(element) {
        $(element).parents('.parent').addClass('has-success').removeClass('has-error');
        $(element).next('span').addClass('glyphicon-ok').removeClass('glyphicon-remove');
      }
    });

    $('#form3').validate({
      rules: {
        email: 'required',
        password: 'required',
      },
      messages: {
        user_name: 'Please enter your email',
        password: 'Please enter your password',
      },
      errorElement: 'em',
      errorPlacement: function(error, element) {
        // Add the `help-block` class to the error element
        error.addClass('help-block');

        // Add `has-feedback` class to the parent div.form-group
        // in order to add icons to inputs
        element.parents('.parent').addClass('has-feedback');

        if (element.prop('type') === 'checkbox') {
          error.insertAfter(element.parent('label'));
        } else {
          error.insertAfter(element);
        }

        // Add the span element, if doesn't exists, and apply the icon classes to it.
        if (!element.next('span')[0]) {
          $('<span class="glyphicon glyphicon-remove form-control-feedback"></span>').insertAfter(element);
        }
      },
      success: function(label, element) {
        // Add the span element, if doesn't exists, and apply the icon classes to it.
        if (!$(element).next('span')[0]) {
          $('<span class="glyphicon glyphicon-ok form-control-feedback"></span>').insertAfter($(element));
        }
      },
      highlight: function(element) {
        $(element).parents('.parent').addClass('has-error').removeClass('has-success');
        $(element).next('span').addClass('glyphicon-remove').removeClass('glyphicon-ok');
      },
      unhighlight: function(element) {
        $(element).parents('.parent').addClass('has-success').removeClass('has-error');
        $(element).next('span').addClass('glyphicon-ok').removeClass('glyphicon-remove');
      }
    });

  });

});











