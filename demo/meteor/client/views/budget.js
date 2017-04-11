import Highcharts from 'highcharts';

Template.budget.onCreated(function budgetOnCreated() {

});

Template.budget.onRendered(function budgetOnRendered() {
  Highcharts.setOptions({
    global: {
      useUTC: false,
    },
  });

  Highcharts.chart('containerspline', {
    chart: {
      type: 'spline',
      animation: Highcharts.svg, // don't animate in old IE
      marginRight: 10,
      margin: [20, 20, 20, 35],
      events: {
        load() {
          // set up the updating of the chart each second
          const series = this.series[0];
          setInterval(() => {
            const x = (new Date()).getTime(); // current time
            const y = Math.random();
            series.addPoint([x, y], true, true);
          }, 1000);
        },
      },
    },
    title: {
      text: '',
    },
    xAxis: {
      type: 'datetime',
      tickPixelInterval: 150,
    },
    yAxis: {
      title: {
        text: 'Value',
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080',
      }],
    },
    tooltip: {
      formatter() {
        return '<b>' + this.series.name + '</b><br/>' +
          Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
          Highcharts.numberFormat(this.y, 2);
      },
    },
    legend: {
      enabled: false,
    },
    exporting: {
      enabled: false,
    },
    series: [{
      name: 'Random data',
      data: (function() {
        // generate an array of random data
        const data = [];
        const time = (new Date()).getTime();
        for (let i = -19; i <= 0; i += 1) {
          data.push({
            x: time + (i * 1000),
            y: Math.random(),
          });
        }
        return data;
      }()),
    }],
  });

  $('.select2-init-single').select2();
  $('.budget-datepicker').datepicker();
});

Template.budget.helpers(function budgethelpers() {

});

Template.budget.events(function budgetevents() {

});


