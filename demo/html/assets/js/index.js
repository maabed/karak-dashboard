/*!
Index JS
Karak dashboard: v1.0.0
Author: New Release
http://newrelease.io
Copyright 2017 New Release
*/
$(function($) {

  'use strict';

  $(document).ready(function() {
    $(".fc-month-button,.fc-agendaWeek-button,.fc-agendaDay-button,.fc-listMonth-button").remove();

    Morris.Donut({
      element: 'donut',
      data: [
        {value: 70, label: 'In Store Sales'},
        {value: 15, label: 'Sales Online'},
        {value: 10, label: 'Sales in Mall'},
        {value: 5, label: 'Return Sales'}
      ],
      backgroundColor: '#ccc',
      labelColor: '#060',
      colors: [
        '#D96956',
        '#47D99B',
        '#BE5FDF',
        '#D9BD47'
      ],
      formatter: function (x) { return x + "%"},
      resize: true
    });

    Morris.Bar({
      element: 'bar',
      data: [
        {x: '2011 Q1', y: 3, z: 2, a: 3},
        {x: '2011 Q2', y: 2, z: null, a: 1},
        {x: '2011 Q3', y: 0, z: 2, a: 4},
        {x: '2011 Q4', y: 2, z: 4, a: 3}
      ],
      xkey: 'x',
      ykeys: ['y', 'z', 'a'],
      labels: ['Y', 'Z', 'A'],
      resize: true
    }).on('click', function(i, row){
      console.log(i, row);
    });

    Morris.Area({
      element: 'graph',
      behaveLikeLine: true,
      data: [
        {x: '2011 Q1', y: 3, z: 3},
        {x: '2011 Q2', y: 2, z: 1},
        {x: '2011 Q3', y: 2, z: 4},
        {x: '2011 Q4', y: 3, z: 3}
      ],
      xkey: 'x',
      ykeys: ['y', 'z'],
      labels: ['Y', 'Z'],
      resize: true
    });





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
  });
});



$(function() {
  $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=usdeur.json&callback=?', function(data) {

    Highcharts.chart('containerexchange', {
      chart: {
        zoomType: 'x',
        margin: [10, 0, 20, 35],
        height: 150,
      },
      title: {
        text: ''
      },
      subtitle: {
        text: document.ontouchstart === undefined ?
          '' : 'Pinch the chart to zoom in'
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis: {
        title: {
          text: 'Exchange rate'
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
            ]
          },
          marker: {
            radius: 2
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1
            }
          },
          threshold: null
        }
      },
      exporting: {
        buttons: [{
          symbol: '',
        }]
      },

      series: [{
        type: 'area',
        name: 'USD to EUR',
        data: data
      }]
    });
  });

  function formatState(state) {
    if (!state.id) {
      return state.text;
    }
    var $state = $(
      '<span><img src="assets/images/' + state.element.value.toLowerCase() + '.png"  /> ' + state.text + '</span>'
    );
    return $state;
  }

  $('.select2-init-images').select2({
    templateResult: formatState,
    minimumResultsForSearch: -1

  });

});