import Highcharts from 'highcharts';
Template.tour.onCreated(function tourOnCreated() {

});

Template.tour.onRendered(function touronRendered() {

  // $(".popover-navigation").find(".btn-group").children().remove()

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

  $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=usdeur.json&callback=?', function(data) {

    Highcharts.chart('containerexchange', {
      chart: {
        zoomType: 'x',
        margin: [10, 0, 20, 35],
        height: 150,
      },
      title: {
        text: '',
      },
      subtitle: {
        text: document.ontouchstart === undefined ?
          '' : 'Pinch the chart to zoom in',
      },
      xAxis: {
        type: 'datetime',
      },
      yAxis: {
        title: {
          text: 'Exchange rate',
        },
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1,
            },
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
            ],
          },
          marker: {
            radius: 2,
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1,
            },
          },
          threshold: null,
        },
      },
      exporting: {
        buttons: [{
          symbol: '',
        }],
      },

      series: [{
        type: 'area',
        name: 'USD to EUR',
        data: data,
      }],
    });
  });

  $('.statistics-item').hide();
  let Item = $('.statistics-taps .active a').attr('href');
  $(Item).show();
  $('.statistics-taps li').on('click', function() {
    $('.statistics-taps .active').removeClass('active');
    $(this).addClass('active');
    $(Item).fadeOut('100', function() {
      Item = $('.statistics-taps .active a').attr('href');
      $(Item).fadeIn('100');
      let length = $(Item + ' .pitem').length;
      let x = 8;
      $(Item + ' .pitem:lt(' + x + ')').show();
      $(Item + ' > .ploadmore').click(function() {
        x = (x + 8 <= length) ? x + 8 : length;
        $(Item + ' .pitem:lt(' + x + ')').show();
      });
    });
    return false;
  });

  formatState = function(state) {
    if (!state.id) {
      return state.text;
    }
    var $state = $(
      '<span><img src="assets/images/' + state.element.value.toLowerCase() + '.png"  /> ' + state.text + '</span>'
    );
    return $state;
  };

  $(".select2-init-images").select2({
    templateResult: formatState
  });

  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();

  var cleanupModal = function() {
    $('#name').val('').removeClass('active').blur();
    $('#eventclassName').val('default').removeClass('active').blur();
    $('#notes').val('').removeClass('active').blur();
    $('#location').val('').removeClass('active').blur();
  };

  $('#calendar').fullCalendar({
    theme: true,
    defaultView: 'month',
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay,listMonth'
    },
    defaultDate: date,
    navLinks: true,
    editable: true,
    eventLimit: true,
    selectable: true,
    selectHelper: true,
    select: function(start, end) {
      cleanupModal();

      var allDay = !start.hasTime() && !end.hasTime();
      var eventstart = moment(start).format('DD MMM hh:mm A');
      var evntend = moment(end).format('DD MMM hh:mm A');
      var eventstartpost = moment(start).format('YYYY-MM-DD hh:mm');
      var evntendpost = moment(end).format('YYYY-MM-DD hh:mm');

      $('#add-event #apptStartpost').text(eventstartpost);
      $('#add-event #apptEndpost').text(evntendpost);
      $('#add-event #apptStartTime').text(eventstart);
      $('#add-event #apptEndTime').text(evntend);
      $('#add-event #apptAllDay').text(allDay);
      $('#add-event').modal('show');
    },
    events: [{
      title: 'All Day Event',
      start: new Date(y, m, d - 3, 12, 00),
      className: 'info'
    }, {
      title: 'Long Event',
      start: new Date(y, m, d + 5 + 5, 10, 30),
      end: new Date(y, m, d + 8, 20, 30),
      className: 'important'
    }, {
      title: 'Repeating Event',
      start: new Date(y, m, d + 10, 10, 30),
      className: 'important'
    }, {
      title: 'Repeating Event',
      start: new Date(y, m, d + 4, 10, 30),
      className: 'success'
    }, {
      title: 'Conference',
      start: new Date(y, m, d + 14, 14, 30),
      end: new Date(y, m, d + 19, 16, 30),
      className: 'success'
    }, {
      title: 'Meeting',
      start: new Date(y, m, d + 10, 8, 00),
      end: new Date(y, m, d + 12, 10, 00),
      className: 'info'
    }, {
      title: 'Lunch',
      start: new Date(y, m, d - 5, 10, 30),
      className: 'info'
    }, {
      title: 'Meeting',
      start: new Date(y, m, d + 15, 10, 30),

    }, {
      title: 'Happy Hour',
      start: new Date(y, m, d + 21, 10, 30),

    }, {
      title: 'Dinner',
      start: new Date(y, m, d + 2, 10, 30),
      className: 'info'
    }, {
      title: 'Birthday Party',
      start: new Date(y, m, d, 10, 30),
      className: 'success'
    }, {
      title: 'Click for Google',
      url: 'http://google.com/',
      start: new Date(y, m, d, 10, 30),
      className: 'important'
    }, {
      title: 'Event Name',
      start: new Date(y, m, d, 10, 30),
      end: new Date(y, m, d, 10, 30),
      className: 'worning'
    }, ]
  });

  $('#submitButton').on('click', function(e) {
    e.preventDefault();
    $('#add-event').modal('hide');
    var targetEv = {
      title: $('#name').val(),
      start: $('#apptStartpost').text(),
      end: $('#apptEndpost').text(),
      className2: $('#eventclassName').val(),
    }

    localStorage.setItem('targetedEv', JSON.stringify(targetEv));
    var myEvent = {
      title: JSON.parse(localStorage.getItem('targetedEv')).title,
      start: JSON.parse(localStorage.getItem('targetedEv')).start,
      end: JSON.parse(localStorage.getItem('targetedEv')).end,
      className: JSON.parse(localStorage.getItem('targetedEv')).className2
    };

    $('#calendar').fullCalendar('renderEvent', myEvent, true);
    return myEvent;
  });
  $('.fc-month-button,.fc-agendaWeek-button,.fc-agendaDay-button,.fc-listMonth-button').remove();

  var tour = new Tour({
    name: 'index-tour',
    steps: [{
      element: "#live-tour",
      title: "Title of my step",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id erat hendrerit.",
    }, {
      element: "#income-tour",
      title: "Title of my step",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id erat hendrerit.",
      placement: "left"
    }, {
      element: "#world-tour",
      title: "Title of my step",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id erat hendrerit.",
      placement: "left"
    }, {
      element: "#calendar-tour",
      title: "Title of my step",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id erat hendrerit."
    }, {
      element: "#activities-tour",
      title: "Title of my step",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id erat hendrerit."
    }, {
      element: "#todo-tour",
      title: "Title of my step",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id erat hendrerit.",
      placement: "left"
    }, ],
    backdrop: false,
    storage: false,
    template: "<div class='popover tour'> \
                <div class='arrow'></div> \
                <h3 class='popover-title'></h3> \
                <div class='popover-content'></div> \
                <div class='popover-navigation'> \
                <button class='btn btn-info' data-role='prev'>Prev</button> \
                <button class='btn btn-info' data-role='next'>Next</button> \
                </div> \
                <button class='btn btn-danger' data-role='end'>End tour</button> \
                </div>",
  });
  // Initialize the tour
  tour.init();
  // Start the tour
  tour.start();

});