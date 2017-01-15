$(document).ready(function() {

        $('#calendar').fullCalendar({
            theme: true,
            defaultView: 'month',
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay,listMonth'
            },
            defaultDate: '2016-12-12',
            navLinks: true, // can click day/week names to navigate views
            editable: true,
            eventLimit: true, // allow "more" link when too many events
            selectable: true,
            selectHelper: true,

            // select: function(start, end, allDay) {
            //     $('#add-event').modal('show');

            //     endtime = $.fullCalendar.formatDate(end, 'h:mm tt');
            //     starttime = $.fullCalendar.formatDate(start, 'ddd, MMM d, h:mm tt');
            //     var mywhen = starttime + ' - ' + endtime;
            //     $('#add-event #apptStartTime').val(start);
            //     $('#add-event #apptEndTime').val(end);
            //     $('#add-event #apptAllDay').val(allDay);
            //     $('#add-event #when').text(mywhen);
            // },

            select: function(start, end, jsEvent, view) {
                var allDay = !start.hasTime() && !end.hasTime();
                var eventstart = moment(start).format('MMM, D dddd');
                var evntend = moment(end).format('MMM, D dddd');
                $('#add-event #apptStartTime').text(eventstart);
                $('#add-event #apptEndTime').text(evntend);
                $('#add-event #apptAllDay').text(allDay);
                $('#add-event').modal('show');


                // alert(["Event Start date: " + eventstart,
                //     "Event End date: " + evntend,
                //     "AllDay: " + allDay
                // ].join("\n"));
            },

            events: [{
                    title: 'All Day Event',
                    start: '2016-12-01',
                    className: 'info'
                },

                {
                    title: 'Long Event',
                    start: '2016-12-07',
                    end: '2016-12-10',
                    className: 'important'
                }, {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2016-12-09T16:00:00',
                    className: 'important'
                }, {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2016-12-16T16:00:00',
                    className: 'success'
                }, {
                    title: 'Conference',
                    start: '2016-12-11',
                    end: '2016-12-13',
                    className: 'success'
                }, {
                    title: 'Meeting',
                    start: '2016-12-12T10:30:00',
                    end: '2016-12-12T12:30:00',
                    className: 'info'
                }, {
                    title: 'Lunch',
                    start: '2016-12-12T12:00:00',
                    className: 'info'
                }, {
                    title: 'Meeting',
                    start: '2016-12-12T14:30:00',

                }, {
                    title: 'Happy Hour',
                    start: '2016-12-12T17:30:00',

                }, {
                    title: 'Dinner',
                    start: '2016-12-12T20:00:00',
                    className: 'info'
                }, {
                    title: 'Birthday Party',
                    start: '2016-12-13T07:00:00',
                    className: 'success'
                }, {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: '2016-12-28',
                    className: 'important'
                }, {
                    title: 'Event Name',
                    start: '2016-12-5',
                    end: '2016-12-6',
                    className: 'worning'
                },

            ]
        });

        $('#submitButton').on('click', function(e) {
            // We don't want this to act as a link so cancel the link action
            e.preventDefault();

            doSubmit();
        });

        function doSubmit() {
            $("#add-event").modal('hide');
            var starttime = $('#apptStartTime').text();
            var endtime = $('#apptEndTime').text();
            var eventtitle = $('#patientName').val();
            var boolcase = $('#apptAllDay').val();
            var eventclasename = $('#eventclassName').val();
            var myCalendar = $('#calendar');
            myCalendar.fullCalendar();

            var myEvent = {
                title: eventtitle,
                start: starttime,
                end: endtime,
                className: eventclasename
            };

            alert(myEvent.className);


            myCalendar.fullCalendar('renderEvent', myEvent, true);



            calendar.fullCalendar('unselect');
        }

    });











    // var calendar = $('#calendar').fullCalendar({


    //     axisFormat: 'h:mm',
    //     columnFormat: {
    //         month: 'ddd',    // Mon
    //         week: 'ddd d', // Mon 7
    //         day: 'dddd M/d',  // Monday 9/7
    //         agendaDay: 'dddd d'
    //     },
    //     titleFormat: {
    //         month: 'MMMM yyyy', // September 2009
    //         week: "MMMM yyyy", // September 2009
    //         day: 'MMMM yyyy'                  // Tuesday, Sep 8, 2009
    //     },

    //     select: function (start, end, allDay) {
    //         var title = prompt('Event Title:');
    //         if (title) {
    //             calendar.fullCalendar('renderEvent',
    //                 {
    //                     title: title,
    //                     start: start,
    //                     end: end,
    //                     allDay: allDay
    //                 },
    //                 true // make the event "stick"
    //             );
    //         }
    //         calendar.fullCalendar('unselect');
    //     },
    //     droppable: true, // this allows things to be dropped onto the calendar !!!
    //     drop: function (date, allDay) { // this function is called when something is dropped

    //         // retrieve the dropped element's stored Event Object
    //         var originalEventObject = $(this).data('eventObject');

    //         // we need to copy it, so that multiple events don't have a reference to the same object
    //         var copiedEventObject = $.extend({}, originalEventObject);

    //         // assign it the date that was reported
    //         copiedEventObject.start = date;
    //         copiedEventObject.allDay = allDay;

    //         // render the event on the calendar
    //         // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
    //         $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

    //         // is the "remove after drop" checkbox checked?
    //         if ($('#drop-remove').is(':checked')) {
    //             // if so, remove the element from the "Draggable Events" list
    //             $(this).remove();
    //         }

    //     },