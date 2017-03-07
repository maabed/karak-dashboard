/*!
Chat JS
Blue Dashboard: v1.0.0
Author: New Release
http://newrelease.io
Copyright 2017 New Release
*/
$(function($) {
    'use strict';
    $(document).ready(function() {
        $('.submenu-li a i').css({
            'font-size': '0.8em',
            'margin-top': '1.3em'
        });
    });
    $('#menu-toggle').click(function(e) {
        e.preventDefault();
        $('#wrapper').toggleClass('toggled');
    });
    $('.SubMenue').hide();
    $('.open-sub').click(function(e) {
        e.preventDefault();
        var $this = $(this).parent().parent().find('.Submenue');
        $this.toggle(300);
    });

    $('input:checkbox').on('click', function() {
        var $box = $(this);
        if ($box.is(':checked')) {
            var group = "input:checkbox[name='" + $box.attr("name") + "']";
            $(group).prop('checked', false);
            $box.prop('checked', true);
        } else {
            $box.prop('checked', false);
        }
    });
});

function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight) + "px";
}
