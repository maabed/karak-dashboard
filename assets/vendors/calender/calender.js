$(document).ready(function() {
    $('#calendar').fullCalendar({
        theme: true,
        defaultView: 'month',
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay,listMonth'
        },
        defaultDate: '2017-12-12',
        navLinks: true,
        editable: true,
        eventLimit: true,
        selectable: true,
        selectHelper: true,
        select: function(start, end) {
            $('#name').val('');
            $('#name').removeClass('active');
            $('#name').blur();
            $('#eventclassName').val('default');
            $('#eventclassName').removeClass('active');
            $('#eventclassName').blur();
            $('#notes').val('');
            $('#notes').removeClass('active');
            $('#notes').blur();
            $('#location').val('');
            $('#location').removeClass('active');
            $('#location').blur();

            var allDay = !start.hasTime() && !end.hasTime();
            var eventstart = moment(start).format('DD MMM hh:mm A');
            var evntend = moment(end).format('DD MMM hh:mm A');
            var eventstartpost= moment(start).format('YYYY-MM-DD hh:mm');
            var evntendpost= moment(end).format('YYYY-MM-DD hh:mm');

            $('#add-event #apptStartpost').text(eventstartpost);
            $('#add-event #apptEndpost').text(evntendpost);
            $('#add-event #apptStartTime').text(eventstart);
            $('#add-event #apptEndTime').text(evntend);
            $('#add-event #apptAllDay').text(allDay);
            $('#add-event').modal('show');
        },
        events: [{
                title: 'All Day Event',
                start: '2017-12-01',
                className: 'info'
            },
            {
                title: 'Long Event',
                start: '2017-12-07',
                end: '2017-12-10',
                className: 'important'
            }, {
                title: 'Repeating Event',
                start: '2017-12-09T16:00:00',
                className: 'important'
            }, {
                title: 'Repeating Event',
                start: '2017-12-16T16:00:00',
                className: 'success'
            }, {
                title: 'Conference',
                start: '2017-12-11',
                end: '2017-12-13',
                className: 'success'
            }, {
                title: 'Meeting',
                start: '2017-12-12T10:30:00',
                end: '2017-12-12T12:30:00',
                className: 'info'
            }, {
                title: 'Lunch',
                start: '2017-12-12T12:00:00',
                className: 'info'
            }, {
                title: 'Meeting',
                start: '2017-12-12T14:30:00',

            }, {
                title: 'Happy Hour',
                start: '2017-12-12T17:30:00',

            }, {
                title: 'Dinner',
                start: '2017-12-12T20:00:00',
                className: 'info'
            }, {
                title: 'Birthday Party',
                start: '2017-12-13T07:00:00',
                className: 'success'
            }, {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2017-12-28',
                className: 'important'
            }, {
                title: 'Event Name',
                start: '2017-12-5',
                end: '2017-12-6',
                className: 'worning'
            },
        ]
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

});
