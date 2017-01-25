   $("#next-btn").hide();
   $("#secand-tab").addClass('disabled');
   $("#third-tab").addClass('disabled');
   $("#next-btn-wizard").show();

   if ($("#first-tab").hasClass('active')) {
       $("#previous").hide();
   }

   $("#previous").click(function() {
       if ($("#secand-tab").hasClass('active')) {
           $("#secand-tab").removeClass('active');
           $("#first-tab").addClass('active');
           $("#tab1").css('display', 'block');
           $("#tab2").css('display', 'none');
           $(".progress-bar").css('width', '33.3333%');
           $("#previous").hide();
           $("#next-btn-wizard").show();

       } else {
           $("#first-tab").removeClass('active');
           $("#third-tab").removeClass('active');
           $("#secand-tab").addClass('active');
           $("#tab2").css('display', 'block');
           $("#tab1").css('display', 'none');
           $("#tab3").css('display', 'none');
           $(".progress-bar").css('width', '66.6667%');
           $("#previous").show();
           $("#next-btn-wizard").show();
       }


   });

   $.validator.setDefaults({
       submitHandler: function() {
           if ($("#first-tab").hasClass('active')) {
               $("#secand-tab").removeClass('disabled');
               $("#secand-tab").addClass('active');
               $("#first-tab").removeClass('active');
               $("#tab1").css('display', 'none');
               $("#tab2").css('display', 'block');
               $(".progress-bar").css('width', '66.6667%');
               $("#previous").show();
               $("#next-btn-wizard").show();
           } else {
               $("#third-tab").removeClass('disabled');
               $("#third-tab").addClass('active');
               $("#secand-tab").removeClass('active');
               $("#tab1").css('display', 'none');
               $("#tab2").css('display', 'none');
               $("#tab3").css('display', 'block');
               $(".progress-bar").css('width', '100%');
               $("#previous").show();
               $('#fullname-result').html($('#firstname1').val());
               $('#email-result').html($('#email1').val());
               $('#phone-result').html($('#phone').val());
               $('#country-result').html($('#ddl option:selected').text());
               $('#city-result').html($('#city').val());
               $('#nameoncard-result').html($('#nameoncard').val());
               $('#cardno-result').html($('#cardnumber').val());
               $('#address-result').html($('#address').val());
               $('#cvc-result').html($('#cvc').val());
               $('#expiration-result').html($('#date').val());
               $("#next-btn-wizard").hide();
           }
       }
   });


   $("#first-tab").click(function() {
       $("#secand-tab").removeClass('active');
       $("#first-tab").addClass('active');
       $("#tab1").css('display', 'block');
       $("#tab2").css('display', 'none');
       $(".progress-bar").css('width', '33.3333%');
       $("#previous").hide();

       $("#next-btn-wizard").show();
   });

   $("#secand-tab").click(function() {

       if ($("#secand-tab").hasClass('disabled')) {

       } else {
           $("#first-tab").removeClass('active');
           $("#secand-tab").addClass('active');
           $("#tab2").css('display', 'block');
           $("#tab1").css('display', 'none');
           $(".progress-bar").css('width', '66.6667%');
           $("#previous").show();
           $("#tab3").css('display', 'none');
           $("#third-tab").removeClass('active');

           $("#next-btn-wizard").show();
       }

   });


   $("#third-tab").click(function() {

       if ($("#third-tab").hasClass('disabled')) {

       } else {
           $("#first-tab").removeClass('active');
           $("#secand-tab").removeClass('active');
           $("#third-tab").addClass('active');
           $("#tab3").css('display', 'block');
           $("#tab1").css('display', 'none');
           $("#tab2").css('display', 'none');
           $(".progress-bar").css('width', '100%');
           $("#previous").show();
           $("#next-btn-wizard").hide();
       }

   });

   $("#first-tab").click(function() {
       $("#first-tab").addClass('active');
       $("#secand-tab").removeClass('active');
       $("#third-tab").removeClass('active');
       $("#tab3").css('display', 'none');
       $("#tab1").css('display', 'block');
       $("#tab2").css('display', 'none');
       $(".progress-bar").css('width', '33.3333%');
       $("#previous").hide();

       $("#next-btn-wizard").show();
   });


   $(document).ready(function() {
       $("#signupForm").validate({
           rules: {
               firstname: "required",
               lastname: "required",
               username: {
                   required: true,
                   minlength: 2
               },
               password: {
                   required: true,
                   minlength: 5
               },
               confirm_password: {
                   required: true,
                   minlength: 5,
                   equalTo: "#password"
               },
               email: {
                   required: true,
                   email: true
               },
               agree: "required"
           },
           messages: {
               firstname: "Please enter your firstname",
               lastname: "Please enter your lastname",
               username: {
                   required: "Please enter a username",
                   minlength: "Your username must consist of at least 2 characters"
               },
               password: {
                   required: "Please provide a password",
                   minlength: "Your password must be at least 5 characters long"
               },
               confirm_password: {
                   required: "Please provide a password",
                   minlength: "Your password must be at least 5 characters long",
                   equalTo: "Please enter the same password as above"
               },
               email: "Please enter a valid email address",
               agree: "Please accept our policy"
           },
           errorElement: "em",
           errorPlacement: function(error, element) {
               // Add the `help-block` class to the error element
               error.addClass("help-block");

               if (element.prop("type") === "checkbox") {
                   error.insertAfter(element.parent("label"));
               } else {
                   error.insertAfter(element);
               }
           },
           highlight: function(element, errorClass, validClass) {
               $(element).parents(".col-sm-12").addClass("has-error").removeClass("has-success");
           },
           unhighlight: function(element, errorClass, validClass) {
               $(element).parents(".col-sm-12").addClass("has-success").removeClass("has-error");
           }
       });

       $("#signupForm1").validate({
           rules: {
               firstname1: "required",
               nameoncard: "required",
               address: "required",
               lastname1: "required",
               username1: {
                   required: true,
                   minlength: 2
               },
               password1: {
                   required: true,
                   minlength: 5
               },
               confirm_password1: {
                   required: true,
                   minlength: 5,
                   equalTo: "#password1"
               },
               email1: {
                   required: true,
                   email: true
               },
               agree1: "required"
           },
           messages: {
               firstname1: "Please enter your firstname",
               nameoncard: "Please enter the name on card",
               address: "Please enter billing address",
               lastname1: "Please enter your lastname",
               username1: {
                   required: "Please enter a username",
                   minlength: "Your username must consist of at least 2 characters"
               },
               password1: {
                   required: "Please provide a password",
                   minlength: "Your password must be at least 5 characters long"
               },
               confirm_password1: {
                   required: "Please provide a password",
                   minlength: "Your password must be at least 5 characters long",
                   equalTo: "Please enter the same password as above"
               },
               email1: "Please enter a valid email address",
               agree1: "Please accept our policy"
           },
           errorElement: "em",
           errorPlacement: function(error, element) {
               // Add the `help-block` class to the error element
               error.addClass("help-block");

               // Add `has-feedback` class to the parent div.form-group
               // in order to add icons to inputs
               element.parents(".col-val").addClass("has-feedback");

               if (element.prop("type") === "checkbox") {
                   error.insertAfter(element.parent("label"));
               } else {
                   error.insertAfter(element);
               }

               // Add the span element, if doesn't exists, and apply the icon classes to it.
               if (!element.next("span")[0]) {
                   $("<span class='glyphicon glyphicon-remove form-control-feedback'></span>").insertAfter(element);
                   $("#date-valid").find("span").addClass("ok-pos");   
               }
           },
           success: function(label, element) {
               // Add the span element, if doesn't exists, and apply the icon classes to it.
               if (!$(element).next("span")[0]) {
                   $("<span class='glyphicon glyphicon-ok form-control-feedback'></span>").insertAfter($(element));
                   $("#date-valid").find("span").addClass("ok-pos");   
               }
           },
           highlight: function(element, errorClass, validClass) {
               $(element).parents(".col-val").addClass("has-error").removeClass("has-success");
               $(element).next("span").addClass("glyphicon-remove").removeClass("glyphicon-ok");
           },
           unhighlight: function(element, errorClass, validClass) {
               $(element).parents(".col-val").addClass("has-success").removeClass("has-error");
               $(element).next("span").addClass("glyphicon-ok").removeClass("glyphicon-remove");
           }
       });
       $('.select-display.text-drop').on('change', function () {
           $(this).valid();
       });
   });

   function isNumber(evt) {
       evt = (evt) ? evt : window.event;
       var charCode = (evt.which) ? evt.which : evt.keyCode;
       if (charCode > 31 && (charCode < 48 || charCode > 57)) {
           return false;
       }
       return true;
   }
   $('#submit-wizard').click(function() {
       setTimeout(function() {
           swal({
               title: "Your form was submitted successfully",
               text: "",
               type: "success"
           }, function() {
               location.reload();	
           });
       }, 100);		
   });
$('select').selectpicker();


$(function() {
    $('input[name="date"]').daterangepicker({
        autoUpdateInput:false,
        singleDatePicker: true,
        showDropdowns: false
    });
$('input[name="date"]').on('apply.daterangepicker', function(ev, picker) {
      $(this).val(picker.startDate.format('MM/DD/YYYY'));
  });

$('input[name="date"]').on('cancel.daterangepicker', function(ev, picker) {
      $(this).val('');
  });
});