$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});


$('.SubMenue').hide();

$('.MainMenue').click(function (e) {

    e.preventDefault();

    var $this = $(this).parent().find('.Submenue');
    $(".Submenue").not($this).hide(300);

    // here is what I want to do
    $this.toggle(300);

});


//Right side Section


$(document).ready(function () {
    $('#Right-Side-Section-Togle').click(function () {
        var toggleWidth = $("#Right-Side-Section").width() == 300 ? "200px" : "300px";
        $('#Right-Side-Section').animate({ width: toggleWidth });

    });
});

$('#Right-Side-Section-Togle').click(function (e) {

    e.preventDefault();
    // hide all span
    var $this = $(this).parent().find('#Right-Side-Section');
    $("#Right-Side-Section").not($this).width('300px;');
    $('#Right-Side-Section-Togle').hide(0);
});

function closeToggel() {
    var a = document.getElementById("Right-Side-Section")
    a.style.width = "0px";
    $('#Right-Side-Section-Togle').show(0);
}

// Left side section
$("#left-Side-Section-Togle").click(function(){
    $(".InboxLeftSide").toggleClass("show-left");
});

/* search  */


$(document).ready(function() {
  $('#searchTB').keydown(function(e) {
    if (e.which === 13) {
      if ($('#searchTB').val() != " ") {
        window.location = "search.html";
      }
    }
  });
});


/* Tour init */


$(document).ready(function(){ 
    $(function () {
        // Instance the tour
        var tour = new Tour({
            backdrop: true,
            template: "<div class='popover tour'> \
            <div class='arrow'></div> \
            <h3 class='popover-title'></h3> \
            <div class='popover-content'></div> \
            <div class='popover-navigation'> \
            <button type='button' class='btn btn-xs btn-info' data-role='prev'><i class='fa fa-angle-left'></i> &nbsp Prev</button> \
            <button type='button' class='btn btn-xs btn-info' data-role='next'>Next &nbsp <i class='fa fa-angle-right'></i></button> \
            <button type='button' class='btn btn-xs btn-danger' data-role='end'>End tour</button> \
            </div> \
            </div>",
            onShown: function(tour) {
                // ISSUE    - https://github.com/sorich87/bootstrap-tour/issues/189
                // FIX      - https://github.com/sorich87/bootstrap-tour/issues/189#issuecomment-49007822
                // You have to write your used animated effect class
                // Standard animated class
                $('.animated').removeClass('fadeIn');
                // Animate class from animate-panel plugin
                $('.animated-panel').removeClass('zoomIn');
            },
            steps: [
                {
                    element: "#transaction-tour",
                    title: "Page header",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget.",
                    placement: "right",
                },
                {
                    element: "#tour-element-email",
                    title: "Tour title",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget.",
                    placement: "right",

                },
                {
                    element: ".index-icons",
                    title: "Tour title",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget.",
                    placement: "left",
                },                 {
                    element: "#tour-img",
                    title: "Tour title",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget.",
                    placement: "left",
                }, 
                {
                    element: "#calender-tour",
                    title: "Tour title",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget.",
                    placement: "top",
                },
                {
                    element: ".activities",
                    title: "Tour title",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget.",
                    placement: "right",
                }           
            ]});
        // Initialize the tour
        tour.init();
        tour.restart();
    });
});