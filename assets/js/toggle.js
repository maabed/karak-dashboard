$('.single-tap-details').hide();
$('.toggle-icon').hide();
$('.single-tap-title').click(function (e) {

    e.preventDefault();
    // hide all span
    var $this = $(this).parent().find('.single-tap-details');
    $(".single-tap-details").not($this).hide();
    // here is what I want to do
    $this.toggle();

});

$('.single-tap-title').click(function (e) {

    e.preventDefault();
    // hide all span
    var $this = $(this).parent().find('.toggle-icon2');
    $(".toggle-icon2").not($this).hide();
    
    var $this2 = $(this).parent().find('.toggle-icon1');
    $(".toggle-icon1").not($this2).show();

    // here is what I want to do
    $this.toggle();
    $this2.toggle();

});

