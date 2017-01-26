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
