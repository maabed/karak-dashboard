Template.header.helpers( {

    notifications : [
    {
        image : "/images/user_01_54.jpg",
        name : "Mohammad Meshaal",
        notification : "wants your confirmation on his Leave Request on 12 Mar 2017"
    },
    {
        image : "/images/user_04_54.jpg",
        name : "Nasir ahmad",
        notification : "sent a payment on 11 Mar 2017"
    },
    ],
    messages : [
    {
        image : "/images/user_02_54.jpg",
        name : "Layla smith",
        message : "Job offer"
    },
    {
        image : "/images/user_01_54.jpg",
        name : "Mohammad Meshaal",
        message : "Please send me the work templates"
    },
    {
        image : "/images/user_03_54.jpg",
        name : "Dana khalid",
        message : "Do you wanna hang out today?"
    },
    {
        image : "/images/user_04_54.jpg",
        name : "Nasir ahmad",
        message : "Are we going to the match today?"
    },
    ],
});

$(document).ready(function() {
    $("#notifications").click(function() {
        $(".notifecations-box").fadeToggle();
        $(".messages-box").fadeOut();
        $("#not-badg").fadeOut();
        $(".user-info-box").fadeOut();
    });
    $("#messages").click(function() {
        $(".messages-box").fadeToggle();
        $(".notifecations-box").fadeOut();
        $("#message-badg").fadeOut();
        $(".user-info-box").fadeOut();
    });
    $("#user-box").click(function() {
        $(".user-info-box").fadeToggle();
        $(".notifecations-box").fadeOut();
        $(".messages-box").fadeOut();
    });
    $(document).mouseup(function(e) {
        var container = $(".notifecations-box, .messages-box, .user-info-box");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.hide();
        }
    });
});