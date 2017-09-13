Template.calendar.onCreated(function calendarOnCreated() {

});

Template.calendar.onRendered(function calendarOnRendered() {

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

});

Template.calendar.helpers(function calendarhelpers() {

});

Template.calendar.events(function calendarevents() {

});

