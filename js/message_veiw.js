
function viewMessage() {
    document.getElementById("No-email-selected").style.display("none");
}

$(document).ready(function () {
    $(".ShowMessage").click(function () {
        $("#No-email-selected").hide(300);
        $("#email-content").show(300);
    });

});