/*!
Charts initialization JS
Karak dashboard: v1.0.0
Author: New Release
http://newrelease.io
Copyright 2017 New Release
*/
$(function($) {

  'use strict';

  $(document).ready(function() {
    /*Bar chart */
    var ctx = document.getElementById('bar');
    var bar = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    /* Pie charts */
    var ctx2 = document.getElementById("pie");
    var data = {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ]
      }]
    };
    var myPieChart = new Chart(ctx2, {
      type: 'pie',
      data: data,
    });

    /* doughnut chart */
    var ctxd = document.getElementById('doughnut');
    var datad = {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ]
      }]
    };
    var myDoughnutChart = new Chart(ctxd, {
      type: 'doughnut',
      data: datad,
    });

    /* Line chart*/
    var ctx4 = document.getElementById('line');
    var myLineChart = new Chart(ctx4, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'My First dataset',
          fill: true,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40],
          spanGaps: false,
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    /*polar chart*/
    var ctxp = document.getElementById('polar');
    var datap = {
      datasets: [{
        data: [
          7,
          3,
          14
        ],
        backgroundColor: [
          '#FFCE56',
          '#E7E9ED',
          '#36A2EB'
        ],
        label: 'My dataset' // for legend
      }],
      labels: [
        'Yellow',
        'Grey',
        'Blue'
      ]
    };
    new Chart(ctxp, {
      data: datap,
      type: 'polarArea',
    });

    /*High charts*/
    /*Spline updating each second*/
    Highcharts.setOptions({
      global: {
        useUTC: false
      }
    });
    Highcharts.chart('container', {
      chart: {
        margin: [20, 45, 45, 40],
        type: 'spline',
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
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
          text: ''
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

    /*Click to add a point*/
    Highcharts.chart('container2', {
      chart: {
        type: 'scatter',
        margin: [20, 0, 45, 45],
        events: {
          click: function(e) {
            // find the clicked values and the series
            var x = e.xAxis[0].value,
              y = e.yAxis[0].value,
              series = this.series[0];
            // Add it
            series.addPoint([x, y]);
          }
        }
      },
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        gridLineWidth: 1,
        minPadding: 0.2,
        maxPadding: 0.2,
        maxZoom: 60
      },
      yAxis: {
        title: {
          text: ''
        },
        minPadding: 0.2,
        maxPadding: 0.2,
        maxZoom: 60,
        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },
      legend: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      plotOptions: {
        series: {
          lineWidth: 1,
          point: {
            events: {
              'click': function() {
                if (this.series.data.length > 1) {
                  this.remove();
                }
              }
            }
          }
        }
      },
      series: [{
        data: [
          [20, 20],
          [80, 80]
        ]
      }]
    });

    /*Fixed placement columns*/
    Highcharts.chart('container3', {
      chart: {
        margin: [20, 0, 80, 35],
        type: 'spline'
      },
      title: {
        text: 'Monthly Average Temperature'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ]
      },
      yAxis: {
        title: {
          text: 'Temperature'
        },
        labels: {
          formatter: function() {
            return this.value + '°';
          }
        }
      },
      tooltip: {
        crosshairs: true,
        shared: true
      },
      plotOptions: {
        spline: {
          marker: {
            radius: 4,
            lineColor: '#666666',
            lineWidth: 1
          }
        }
      },
      exporting: {
        buttons: [{
          symbol: '',
        }]
      },
      series: [{
        name: 'Tokyo',
        marker: {
          symbol: 'square'
        },
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
          y: 26.5,
          marker: {
            symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
          }
        }, 23.3, 18.3, 13.9, 9.6]

      }, {
        name: 'London',
        marker: {
          symbol: 'diamond'
        },
        data: [{
          y: 3.9,
          marker: {
            symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)'
          }
        }, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
      }]
    });

    /*Scatter with regression line*/
    Highcharts.chart('container4', {
      chart: {
        margin: [20, 0, 80, 25],
      },
      xAxis: {
        min: -0.5,
        max: 5.5
      },
      yAxis: {
        min: 0
      },
      title: {
        text: ''
      },
      exporting: {
        buttons: [{
          symbol: '',
        }]
      },
      series: [{
        type: 'line',
        name: 'Regression Line',
        data: [
          [0, 1.11],
          [5, 4.51]
        ],
        marker: {
          enabled: false
        },
        states: {
          hover: {
            lineWidth: 0
          }
        },
        enableMouseTracking: false
      }, {
        type: 'scatter',
        name: 'Observations',
        data: [1, 1.5, 2.8, 3.5, 3.9, 4.2],
        marker: {
          radius: 4
        }
      }]
    });

    /*Time series, zoomable*/
    $(function() {
      $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=usdeur.json&callback=?', function(data) {

        Highcharts.chart('container5', {
          chart: {
            margin: [20, 0, 80, 25],
            zoomType: 'x'
          },
          exporting: {
            buttons: [{
              symbol: '',
            }]
          },
          title: {
            text: 'USD to EUR exchange rate over time'
          },
          subtitle: {
            text: document.ontouchstart === undefined ?
              'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
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

          series: [{
            type: 'area',
            name: 'USD to EUR',
            data: data
          }]
        });
      });
    });
    /* Scatter with regression line*/
    Highcharts.chart('container6', {
      chart: {
        margin: [20, 10, 80, 35],
        type: 'area'
      },
      exporting: {
        buttons: [{
          symbol: '',
        }]
      },
      title: {
        text: 'US and USSR nuclear stockpiles'
      },
      subtitle: {
        text: 'Source: <a href="http://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">' +
          'thebulletin.metapress.com</a>'
      },
      xAxis: {
        allowDecimals: false,
        labels: {
          formatter: function() {
            return this.value; // clean, unformatted number for year
          }
        }
      },
      yAxis: {
        title: {
          text: 'Nuclear weapon states'
        },
        labels: {
          formatter: function() {
            return this.value / 1000 + 'k';
          }
        }
      },
      tooltip: {
        pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
      },
      plotOptions: {
        area: {
          pointStart: 1940,
          marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
              hover: {
                enabled: true
              }
            }
          }
        }
      },
      series: [{
        name: 'USA',
        data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
          1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
          27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
          26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
          24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
          22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
          10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104
        ]
      }, {
        name: 'USSR/Russia',
        data: [null, null, null, null, null, null, null, null, null, null,
          5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
          4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
          15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
          33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
          35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
          21000, 20000, 19000, 18000, 18000, 17000, 16000
        ]
      }]
    });
  });

});

(function(){
  var a = b = 3;
})();
