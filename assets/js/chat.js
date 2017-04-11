$(document).ready(function() {
    $(".submenu-li a i").css("font-size", "0.8em");
    $(".submenu-li a i").css("margin-top", "1.3em");
});

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

$('.SubMenue').hide();

$('.MainMenue').click(function(e) {
    e.preventDefault();
    var $this = $(this).parent().find('.Submenue');

    // here is what I want to do
    $this.toggle(300);
});
$("#left-Side-Section-Togle").click(function() {
    $(".InboxLeftSide").toggleClass("show-left");
});
