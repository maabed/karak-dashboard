/*!
Account manager JS
Karak dashboard: v1.0.0
Author: New Release
http://newrelease.io
Copyright 2017 New Release
*/
$(function($) {

  'use strict';

  $(document).ready(function() {

    // account manager validation
    $('#translateform').validate({
      rules: {
        cchangeacc: 'required',
        Beneficiary: 'required',
        amount: 'required',
        details: 'required',
        pass: 'required',

        pass: {
          required: true,
          minlength: 5
        }
      },
      messages: {
        changeacc: 'Please Select The Account',
        Beneficiary: 'Please Enter Beneficiary Account No.',
        amount: 'Please Enter Transfer Amount',
        details: 'Please Enter Transfer Details',
        pass: 'Please Enter Transfer Password',
        Beneficiary: {
          required: 'Beneficiary Account No.',
          minlength: 'Account No. Must Be At Least 12 Number',
          maxlength: 'Account No. Must Be At Most 14 Number'
        },
        pass: {
          required: 'Please Enter Transfer Password',
        },

      },
      errorElement: 'em',
      errorPlacement: function(error, element) {
        // Add the `help-block` class to the error element
        error.addClass('help-block');

        // Add `has-feedback` class to the parent div.form-group
        // in order to add icons to inputs
        element.parents('.col-val').addClass('has-feedback');

        if (element.prop('type') === 'checkbox') {
          error.insertAfter(element.parent('label'));
        } else {
          error.insertAfter(element);
        }

        // Add the span element, if doesn't exists, and apply the icon classes to it.
        if (!element.next('span')[0]) {
          $('<span class="glyphicon glyphicon-remove form-control-feedback"></span>').insertAfter(element);
          $('#date-valid').find('span').addClass('ok-pos');
        }
      },
      success: function(label, element) {
        // Add the span element, if doesn't exists, and apply the icon classes to it.
        if (!$(element).next('span')[0]) {
          $('<span class="glyphicon glyphicon-ok form-control-feedback"></span>').insertAfter($(element));
          $('#date-valid').find('span').addClass('ok-pos');
        }
      },
      highlight: function(element) {
        $(element).parents('.col-val').addClass('has-error').removeClass('has-success');
        $(element).next('span').addClass('glyphicon-remove').removeClass('glyphicon-ok');
      },
      unhighlight: function(element) {
        $(element).parents('.col-val').addClass('has-success').removeClass('has-error');
        $(element).next('span').addClass('glyphicon-ok').removeClass('glyphicon-remove');
      }
    });
    $('.select-display.text-drop').on('change', function() {
      $(this).valid();
    });

    // account manager charts 
    Highcharts.setOptions({
      global: {
        useUTC: false
      }
    });
    Highcharts.chart('containerspline', {
      chart: {
        type: 'spline',
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        margin: [20, 20, 20, 35],
        events: {
          load: function() {
            // set up the updating of the chart each second
            var series = this.series[0];
            setInterval(function() {
              var x = (new Date()).getTime(), // current time
                y = Math.random();
              series.addPoint([x, y], true, true);
            }, 1000);
          }
        }
      },
      title: {
        text: ''
      },
      xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
      },
      yAxis: {
        title: {
          text: 'Value'
        },
        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },
      tooltip: {
        formatter: function() {
          return '<b>' + this.series.name + '</b><br/>' +
            Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
            Highcharts.numberFormat(this.y, 2);
        }
      },
      legend: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      series: [{
        name: 'Random data',
        data: (function() {
          // generate an array of random data
          var data = [],
            time = (new Date()).getTime(),
            i;

          for (i = -19; i <= 0; i += 1) {
            data.push({
              x: time + i * 1000,
              y: Math.random()
            });
          }
          return data;
        }())
      }]
    });

    $('#change-acc').on('change', function() {
      $('#accno').text($('#change-acc').val());
    });

    // print
    $('.print').on('click', function() {
      window.print();
    });

    // init select2
    $('.select2-init-single').select2();

  });
});
