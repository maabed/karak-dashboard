$(document).ready(function () {
    $("#notifications").click(function () {
        $(".notifecations-box").fadeToggle();
        $(".messages-box").fadeOut();
        $("#not-badg").fadeOut();
        $(".user-info-box").fadeOut();
    });
});
$(document).ready(function () {
    $("#messages").click(function () {
        $(".messages-box").fadeToggle();
        $(".notifecations-box").fadeOut();
        $("#message-badg").fadeOut();
        $(".user-info-box").fadeOut();
    });
});
$(document).ready(function () {
    $("#user-box").click(function () {
        $(".user-info-box").fadeToggle();
        $(".notifecations-box").fadeOut();
        $(".messages-box").fadeOut();
    });
});
$(document).mouseup(function (e) {
    var container = $(".notifecations-box, .messages-box, .user-info-box");
    if (!container.is(e.target)
        && container.has(e.target).length === 0) {
        container.hide();
    }
});