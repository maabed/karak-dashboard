$(document).ready(function () {
    /* Bootstrap alerts */
    $("#alert-generate").click(function () {
        if ($("#alert-select").val() == "success") {
            $(".alerts-container").prepend("<div class='alert alert-success alert-dismissable'><a href='#' class='close' data-dismiss='alert' aria-label='close'>×</a>This alert box could indicate a successful or positive action.</div>")
        }
        else if ($("#alert-select").val() == "info") {
            $(".alerts-container").prepend("<div class='alert alert-info alert-dismissable'><a href='#' class='close' data-dismiss='alert' aria-label='close'>×</a>This alert box indicates an informative change or action.</div>")
        }
        else if ($("#alert-select").val() == "warning") {
            $(".alerts-container").prepend("<div class='alert alert-warning alert-dismissable'><a href='#' class='close' data-dismiss='alert' aria-label='close'>×</a>This alert box indicates a warning.</div>")
        }
        else {
            $(".alerts-container").prepend("<div class='alert alert-danger alert-dismissable'><a href='#' class='close' data-dismiss='alert' aria-label='close'>×</a>This alert box indicates a potentially negative action.</div>")
        }
    });
    
    
    
    /* Toastr alerts */
    $("#toastr-generate").click(function (event) {
        event.stopPropagation();
        toastr.remove();
        var value = $('select[name=toastr-select]').val();
        if (value == "TopRight") {
            toastr.options = {
                "positionClass": "toast-top-right",
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
            toastr["success"]("Top Right!")
        }
        else if (value == "BottomRight") {
            toastr.options = {
                "positionClass": "toast-bottom-right",
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
            toastr["info"]("Bottom Right!")
        }
        else if (value == "BottomLeft") {
            toastr.options = {
                "positionClass": "toast-bottom-left",
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
            toastr["warning"]("Bottom Left!")
        }
        else if (value == "TopLeft") {
            toastr.options = {
                "positionClass": "toast-top-left",
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
            toastr["error"]("Top Left!")
        }
        else if (value == "TopFull") {
            toastr.options = {
                "positionClass": "toast-top-full-width",
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
            toastr["success"]("top full width!")
        }
        else if (value == "BottomFull") {
            toastr.options = {
                "positionClass": "toast-bottom-full-width",
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
            toastr["info"]("bottom full width!")
        }
        else if (value == "TopCenter") {
            toastr.options = {
                "positionClass": "toast-top-center",
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
            toastr["warning"]("Top Center!")
        }
        else if (value == "BottomCenter") {
            toastr.options = {
                "positionClass": "toast-bottom-center",
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
            toastr["error"]("Bottom Center!")
        }
    });

    /* Sweet alerts */

    $('#basic').click(function () {
        swal("Here's a message!")
    });
    $("#success").click(function () {
        swal("Good job!", "You clicked the button!", "success");
    });
    $("#warning").click(function () {
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: false
        },
        function () {
            swal("Deleted!", "Your imaginary file has been deleted.", "success");
        });
    });
    $('#execute').click(function () {
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel plx!",
            closeOnConfirm: false,
            closeOnCancel: false
        },
        function (isConfirm) {
            if (isConfirm) {
                swal("Deleted!", "Your imaginary file has been deleted.", "success");
            } else {
                swal("Cancelled", "Your imaginary file is safe :)", "error");
            }
        });
    });

    /*second row*/
    $('#custom').click(function () {
        swal({
            title: "Sweet!",
            text: "Here's a custom image.",
            imageUrl: "assets/images/notifications/thumbs-up.jpg"
        });
    });
    $('#HTML').click(function () {
        swal({
            title: "HTML <small>Title</small>!",
            text: "A custom <span style='color:#F8BB86'>html<span> message.",
            html: true
        });
    });
    $('#Timer').click(function () {
        swal({
            title: "Auto close alert!",
            text: "I will close in 2 seconds.",
            timer: 2000,
            showConfirmButton: false
        });
    });
    $('#Prompt').click(function () {
        swal({
            title: "An input!",
            text: "Write something interesting:",
            type: "input",
            showCancelButton: true,
            closeOnConfirm: false,
            animation: "slide-from-top",
            inputPlaceholder: "Write something"
        },
        function (inputValue) {
            if (inputValue === false)
                return false;
            if (inputValue === "") {
                swal.showInputError("You need to write something!");
                return false
            }
            swal("Nice!", "You wrote: " + inputValue, "success");
        });
    });

    /*Tooltips*/

    $('[data-toggle="tooltip"]').tooltip();

});