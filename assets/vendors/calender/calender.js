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

        select: function(start, end, jsEvent, view) {

            $('#patientName').val('');
            $('#patientName').removeClass("active");
            $("#patientName").blur();

            $('#eventclassName').val('default');
            $('#eventclassName').removeClass("active");
            $("#eventclassName").blur();

            $('#notes').val('');
            $('#notes').removeClass("active");
            $("#notes").blur();

            $('#location').val('');
            $('#location').removeClass("active");
            $("#location").blur();

            var allDay = !start.hasTime() && !end.hasTime();
            var eventstart = moment(start).format('MMM,DD ddd');
            var evntend = moment(end).format('MMM,DD ddd');

            var  eventstartpost= moment(start).format('YYYY-MM-DD');
            var  evntendpost= moment(end).format('YYYY-MM-DD');


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
                id: 999,
                title: 'Repeating Event',
                start: '2017-12-09T16:00:00',
                className: 'important'
            }, {
                id: 999,
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

        doSubmit();
    });



    function doSubmit() {
        $("#add-event").modal('hide');

        var starttime = $('#apptStartpost').text();
        var endtime = $('#apptEndpost').text();
        
        var eventtitle = $('#patientName').val();
        var boolcase = $('#apptAllDay').val();
        var eventclasename = $('#eventclassName').val();

        localStorage.setItem('title2', eventtitle);
        var eventnamemodal = localStorage.getItem("title2");

        localStorage.setItem('start2', $('#apptStartpost').text());
        var apptStartTimemodal = localStorage.getItem("start2");

        localStorage.setItem('end2', $('#apptEndpost').text());
        var apptEndTimemodal = localStorage.getItem("end2");


        localStorage.setItem('boolcase2', apptAllDay);
        var apptAllDaymodal = localStorage.getItem("boolcase2");

        localStorage.setItem('className2', eventclasename);
        var eventclasenamemodal = localStorage.getItem("className2");

        var myEvent = {
            title: eventnamemodal,
            start: apptStartTimemodal,
            end: apptEndTimemodal,
            className: eventclasenamemodal
        };


        $('#calendar').fullCalendar('renderEvent', myEvent, true);
        return myEvent;


    }

});
