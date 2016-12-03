$('.single-tap-details').hide();
$('.toggle-icon').hide();
$('.single-tap-title').click(function (e) {

    e.preventDefault();
    // hide all span
    var $this = $(this).parent().find('.single-tap-details');
    $(".single-tap-details").not($this).hide(300);
    // here is what I want to do
    $this.toggle(300);

});

$('.single-tap-title').click(function (e) {

    e.preventDefault();
    // hide all span
    var $this = $(this).parent().find('.toggle-icon2');
    $(".toggle-icon2").not($this).hide(300);
    // here is what I want to do
    $this.toggle(300);

});

