$(document).ready(function () {
    $("#demo").on("hide.bs.collapse", function () {
        $(".panel-heading a").html('<span class="glyphicon glyphicon-chevron-down float-right"></span>');
    });
    $("#demo").on("show.bs.collapse", function () {
        $(".panel-heading a").html('<span class="glyphicon glyphicon-chevron-up float-right"></span>');
    });
});
$(document).ready(function () {
    $("#demo2").on("hide.bs.collapse", function () {
        $(".panel-heading a").html('<span class="glyphicon glyphicon-chevron-down float-right"></span>');
    });
    $("#demo2").on("show.bs.collapse", function () {
        $(".panel-heading a").html('<span class="glyphicon glyphicon-chevron-up float-right"></span>');
    });
});

$("#close_panele").click(function () {
    $("#close_panel_section").hide();
});
$("#close_panele2").click(function () {
    $("#close_panel_section2").hide();
});

$(document).ready(function () {
    //Toggle fullscreen
    $("#panel-fullscreen").click(function (e) {
        e.preventDefault();

        var $this = $(this);

        if ($this.children('i').hasClass('glyphicon-resize-full')) {
            $this.children('i').removeClass('glyphicon-resize-full');
            $this.children('i').addClass('glyphicon-resize-small');
        }
        else if ($this.children('i').hasClass('glyphicon-resize-small')) {
            $this.children('i').removeClass('glyphicon-resize-small');
            $this.children('i').addClass('glyphicon-resize-full');
        }
        $(this).closest('.panel').toggleClass('panel-fullscreen');
    });
});
