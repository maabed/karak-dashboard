Template.vectorMaps.onCreated(function vectorMapsOnCreated() {

});

Template.vectorMaps.onRendered(function vectorMapsOnRendered() {
  $('#vector').vectorMap({
    map: 'us_aea',
    markers: [
      [61.18, -149.53],
      [21.18, -157.49],
      [40.66, -73.56],
      [41.52, -87.37],
      [35.22, -80.84],
      [31.52, -87.37]
    ],
    series: {
      markers: [{
        attribute: 'fill',
        scale: ['#C8EEFF', '#0071A4'],
        normalizeFunction: 'polynomial',
        values: [408, 512, 550, 781],
        legend: {
          vertical: true
        }
      },{
        attribute: 'image',
        scale: {
          bank: '/img/icon-bank.png',
          factory: '/img/icon-factory.png'
        },
        values: {
          '4': 'bank',
          '5': 'factory'
        },
        legend: {
          horizontal: true,
          cssClass: 'jvectormap-legend-icons',
          title: 'Business type'
        }
      }],
      regions: [{
        scale: {
          red: '#ff0000',
          green: '#00ff00'
        },
        attribute: 'fill',
        values: {
          "US-KS": 'red',
          "US-MO": 'red',
          "US-IA": 'green',
          "US-NE": 'green'
        },
        legend: {
          horizontal: true,
          title: 'Color'
        }
      },{
        scale: {
          redGreen: '/img/bg-red-green.png',
          yellowBlue: '/img/bg-yellow-blue.png'
        },
        values: {
          "US-TX": 'redGreen',
          "US-CA": 'yellowBlue'
        },
        attribute: 'fill',
        legend: {
          horizontal: true,
          cssClass: 'jvectormap-legend-bg',
          title: 'Pattern',
          labelRender: function(v){
            return {
              redGreen: 'low',
              yellowBlue: 'high'
            }[v];
          }
        }
      }]
    }
  });

});

Template.vectorMaps.helpers({

});

Template.vectorMaps.events({

});
