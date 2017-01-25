$("#translateform").validate({
    rules: {
        cchangeacc: "required",
        Beneficiary: "required",
        amount: "required",
        details: "required",
        pass: "required",

        pass: {
            required: true,
            minlength: 5
        }
    },
    messages: {
        cchangeacc: "Please Select Account",
        Beneficiary: "Please Enter Beneficiary Account No.",
        amount: "Please Enter Transfer Amount",
        details: "Please Enter Transfer Details",
        pass: "Please Enter Transfer Password",
        Beneficiary: {
            required: "Beneficiary Account No.",
            minlength: "Account No. Must Be At Least 12 Number",
            maxlength: "Account No. Must Be At Most 14 Number"
        },
        pass: {
            required: "Please Enter Transfer Password",
        },

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
        }
    },
    success: function(label, element) {
        // Add the span element, if doesn't exists, and apply the icon classes to it.
        if (!$(element).next("span")[0]) {
            $("<span class='glyphicon glyphicon-ok form-control-feedback'></span>").insertAfter($(element));
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


function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
