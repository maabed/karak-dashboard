/*!
Chat JS
Blue Dashboard: v1.0.0
Author: New Release
http://newrelease.io
Copyright 2017 New Release
*/
$(document).ready(function() {
    $('#menu-toggle').click(function(e) {
        e.preventDefault();
        $('.wrapper').toggleClass('toggled');
    });


    // search
    $('.search-text-box').keydown(function(e) {
        if (e.which === 13) {
            if ($('.search-text-box').val() != ' ') {
                window.location = 'search.html';
            }
        }
    });
});


function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight) + "px";
}
