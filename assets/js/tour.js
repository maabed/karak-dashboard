/*!
Tour JS
Blue Dashboard: v1.0.0
Author: New Release
http://newrelease.io
Copyright 2017 New Release
*/
$(function($) {
  'use strict';
  $(document).ready(function() {
    $(".popover-navigation").find(".btn-group").children().remove();
    var tour = new Tour({
      backdrop: true,
      steps: [{
        element: "#live-tour",
        title: "Title of my step",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id erat hendrerit."
      }, {
        element: "#income-tour",
        title: "Title of my step",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id erat hendrerit.",
        placement: "left",
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
});