$(function () {

    $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=world-population-density.json&callback=?', function (data) {

        // Initiate the chart
        $('#container').highcharts('Map', {
            chart: {
                margin: [0, 0, 130, 25],
            },
            title: {
                text: ''
            },

            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },
             mapNavigation: {
                enabled: false,
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
            exporting: {
                buttons: [
                    {
                        symbol: '',
                    }
                ]
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