$(document).ready(function(){
    $("#alert-generate").click(function(){
        if($("#alert-select").val() == "success"){
            $(".alerts-container").prepend("<div class='alert alert-success alert-dismissable'><a href='#' class='close' data-dismiss='alert' aria-label='close'>×</a>This alert box could indicate a successful or positive action.</div>")
        }
        else if($("#alert-select").val() == "info"){
            $(".alerts-container").prepend("<div class='alert alert-info alert-dismissable'><a href='#' class='close' data-dismiss='alert' aria-label='close'>×</a>This alert box indicates an informative change or action.</div>")  
        }
        else if($("#alert-select").val() == "warning"){
            $(".alerts-container").prepend("<div class='alert alert-warning alert-dismissable'><a href='#' class='close' data-dismiss='alert' aria-label='close'>×</a>This alert box indicates a warning.</div>")  
        }
        else{
            $(".alerts-container").prepend("<div class='alert alert-danger alert-dismissable'><a href='#' class='close' data-dismiss='alert' aria-label='close'>×</a>This alert box indicates a potentially negative action.</div>")  
        }
    }); 
});


 $(document).ready(function(){
                $("#toastr-generate").click(function(){
                    if($('select[name=toastr-select]').val() == "TopRight"){
                        toastr.options = {
                            "positionClass": "toast-top-right",
                            "onclick": null,
                            "showDuration": "300",
                            "hideDuration": "1000",
                            "timeOut": "5000",
                            "showMethod": "fadeIn",
                            "hideMethod": "fadeOut"
                        }
                        Command: toastr["success"]("Top Right!")
                    }
                    else if($('select[name=toastr-select]').val() == "BottomRight"){
                         toastr.options = {
                            "positionClass": "toast-bottom-right",
                            "onclick": null,
                            "showDuration": "300",
                            "hideDuration": "1000",
                            "timeOut": "5000",
                            "showMethod": "fadeIn",
                            "hideMethod": "fadeOut"
                        }
                        Command: toastr["info"]("Bottom Right!")
                    }
                    else if($('select[name=toastr-select]').val() == "BottomLeft"){
                         toastr.options = {
                            "positionClass": "toast-bottom-left",
                            "onclick": null,
                            "showDuration": "300",
                            "hideDuration": "1000",
                            "timeOut": "5000",
                            "showMethod": "fadeIn",
                            "hideMethod": "fadeOut"
                        }
                        Command: toastr["warning"]("Bottom Left!")
                    }
                    else if($('select[name=toastr-select]').val() == "TopLeft"){
                         toastr.options = {
                            "positionClass": "toast-top-left",
                            "onclick": null,
                            "showDuration": "300",
                            "hideDuration": "1000",
                            "timeOut": "5000",
                            "showMethod": "fadeIn",
                            "hideMethod": "fadeOut"
                        }
                        Command: toastr["error"]("Top Left!")
                    }
                    else if($('select[name=toastr-select]').val() == "TopFull"){
                         toastr.options = {
                            "positionClass": "toast-top-full-width",
                            "onclick": null,
                            "showDuration": "300",
                            "hideDuration": "1000",
                            "timeOut": "5000",
                            "showMethod": "fadeIn",
                            "hideMethod": "fadeOut"
                        }
                        Command: toastr["success"]("top full width!")
                    }
                    else if($('select[name=toastr-select]').val() == "BottomFull"){
                         toastr.options = {
                            "positionClass": "toast-bottom-full-width",
                            "onclick": null,
                            "showDuration": "300",
                            "hideDuration": "1000",
                            "timeOut": "5000",
                            "showMethod": "fadeIn",
                            "hideMethod": "fadeOut"
                        }
                        Command: toastr["info"]("bottom full width!")
                    }
                    else if($('select[name=toastr-select]').val() == "TopCenter"){
                         toastr.options = {
                            "positionClass": "toast-top-center",
                            "onclick": null,
                            "showDuration": "300",
                            "hideDuration": "1000",
                            "timeOut": "5000",
                            "showMethod": "fadeIn",
                            "hideMethod": "fadeOut"
                        }
                        Command: toastr["warning"]("Top Center!")
                    }
                    else if($('select[name=toastr-select]').val() == "BottomCenter"){
                         toastr.options = {
                            "positionClass": "toast-bottom-center",
                            "onclick": null,
                            "showDuration": "300",
                            "hideDuration": "1000",
                            "timeOut": "5000",
                            "showMethod": "fadeIn",
                            "hideMethod": "fadeOut"
                        }
                        Command: toastr["error"]("Bottom Center!")
                    }
                });
            });

$(document).ready(function(){
    $('#basic').click(function(){
        swal("Here's a message!")    
    });
    $("#success").click(function(){
        swal("Good job!", "You clicked the button!", "success");
    });
    $("#warning").click(function(){
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: false
        },
             function(){
            swal("Deleted!", "Your imaginary file has been deleted.", "success");
        });
    });
    $('#execute').click(function(){
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
             function(isConfirm){
            if (isConfirm) {
                swal("Deleted!", "Your imaginary file has been deleted.", "success");
            } else {
                swal("Cancelled", "Your imaginary file is safe :)", "error");
            }
        });
    });

        /*second row*/
    $('#custom').click(function(){
        swal({
            title: "Sweet!",
            text: "Here's a custom image.",
            imageUrl: "assets/images/notifications/thumbs-up.jpg"
        });
    });
    $('#HTML').click(function(){
        swal({
            title: "HTML <small>Title</small>!",
            text: "A custom <span style='color:#F8BB86'>html<span> message.",
            html: true
        });
    });
    $('#Timer').click(function(){
        swal({
            title: "Auto close alert!",
            text: "I will close in 2 seconds.",
            timer: 2000,
            showConfirmButton: false
        });
    });
    $('#Prompt').click(function(){
        swal({
            title: "An input!",
            text: "Write something interesting:",
            type: "input",
            showCancelButton: true,
            closeOnConfirm: false,
            animation: "slide-from-top",
            inputPlaceholder: "Write something"
        },
             function(inputValue){
            if (inputValue === false) return false;
            if (inputValue === "") {
                swal.showInputError("You need to write something!");
                return false
            }
            swal("Nice!", "You wrote: " + inputValue, "success");
        });
    });

        /*third row*/
    $('#loader').click(function(){
        swal({
            title: "Ajax request example",
            text: "Submit to run ajax request",
            type: "info",
            showCancelButton: true,
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
        },
             function(){
            setTimeout(function(){
                swal("Ajax request finished!");
            }, 2000);
        });
    });
});