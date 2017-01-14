$(function () {

    $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=world-population-density.json&callback=?', function (data) {

        // Initiate the chart
        $('#container').highcharts('Map', {

            title: {
                text: ''
            },

            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },

            colorAxis: {
                  dataClasses: [{
                      to: 100,
                      color: "#67b2e4"
                    }, {
                      from: 100,
                      to: 10000,
                      color: "#999999"
                    }],
                min: 1,
                max: 1000,
                type: 'logarithmic'
            },

            series: [{
                data: data,
                mapData: Highcharts.maps['custom/world'],
                joinBy: ['iso-a2', 'code'],
                name: 'Cumulative Sales',
                color: 'red',
                states: {
                    hover: {
                        color: '#3498db'
                    }
                },
                tooltip: {
                    valueSuffix: '0$'
                }
            }]
        });
    });
});