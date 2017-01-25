$(document).ready(function(){
    $('input[name="checkboxRow"]').on('change', function() {
        $(this).closest('tr').toggleClass('selected', $(this).is(':checked'));
    });
    $("#delete-row").click(function(){
        $(".selected").fadeOut();
    });
});