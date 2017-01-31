$(document).ready(function () {
    /* Bootstrap alerts */
    $("#alert-generate").click(function () {
        if ($("#alert-select").val() == "success") {
            $(".alert").remove();
            $("body").prepend("<div class='alert alert-success global-alert alert-dismissable'><a href='#' class='close' data-dismiss='alert' aria-label='close'>×</a>This alert box could indicate a successful or positive action.</div>");
            setTimeout(function(){
                $('.alert-success').fadeOut();
            }, 2000);
        }
        else if ($("#alert-select").val() == "info") {
            $(".alert").remove();
            $("body").prepend("<div class='alert alert-info global-alert alert-dismissable'><a href='#' class='close' data-dismiss='alert' aria-label='close'>×</a>This alert box indicates an informative change or action.</div>");
            setTimeout(function(){
                $('.alert-info').fadeOut();
            }, 2000);
        }
        else if ($("#alert-select").val() == "warning") {
            $(".alert").remove();
            $("body").prepend("<div class='alert alert-warning global-alert alert-dismissable'><a href='#' class='close' data-dismiss='alert' aria-label='close'>×</a>This alert box indicates a warning.</div>");
            setTimeout(function(){
                $('.alert-warning').fadeOut();
            }, 2000);
        }
        else {
            $(".alert").remove();
            $("body").prepend("<div class='alert alert-danger global-alert alert-dismissable'><a href='#' class='close' data-dismiss='alert' aria-label='close'>×</a>This alert box indicates a potentially negative action.</div>");
            setTimeout(function(){
                $('.alert-danger').fadeOut();
            }, 2000);
        }
    });
    
    
    
    /* Toastr alerts */
    $("#right").click(function (event) {
        event.stopPropagation();
        toastr.remove();
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
    });
    $("#bottom-right").click(function (event) {
        event.stopPropagation();
        toastr.remove();
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
        });
    
    
    $("#bottom-left").click(function (event) {
        event.stopPropagation();
        toastr.remove();
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
        });
    
    
    $("#left").click(function (event) {
        event.stopPropagation();
        toastr.remove();
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
        });
    
    
    $("#full").click(function (event) {
        event.stopPropagation();
        toastr.remove();
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
        });
    
    
    $("#bottom-full").click(function (event) {
        event.stopPropagation();
        toastr.remove();
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
        });
    
    
    $("#center").click(function (event) {
        event.stopPropagation();
        toastr.remove();
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
        });
    
    
    $("#bottom-center").click(function (event) {
        event.stopPropagation();
        toastr.remove();
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
        });
        
 ////////////////////////////////////////////      


    /* Sweet alerts */
    $("#sweet-generate").click(function () {
        if ($("#sweet-select").val() == "basic") {
            swal("Here's a message!");
        }

    else if ($("#sweet-select").val() == "success") {
        swal("Good job!", "You clicked the button!", "success");
    }
        
        
    else if ($("#sweet-select").val() == "warning") {
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
    }

    else if ($("#sweet-select").val() == "execute") {
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
    }

    /*second row*/
    else if ($("#sweet-select").val() == "custom") {
        swal({
            title: "Sweet!",
            text: "Here's a custom image.",
            imageUrl: "assets/images/notifications/thumbs-up.jpg"
        });
    }
 

    else if ($("#sweet-select").val() == "HTML") {
        swal({
            title: "HTML <small>Title</small>!",
            text: "A custom <span style='color:#F8BB86'>html<span> message.",
            html: true
        });
    }
    else if ($("#sweet-select").val() == "Auto") {
        swal({
            title: "Auto close alert!",
            text: "I will close in 2 seconds.",
            timer: 2000,
            showConfirmButton: false
        });
    }
    else if ($("#sweet-select").val() == "Prompt") {
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
    }
    });

    /*Tooltips*/

    $('[data-toggle="tooltip"]').tooltip();
    
    $(document).ready(function() {
        $(".js-example-basic-single").select2();
    });

});