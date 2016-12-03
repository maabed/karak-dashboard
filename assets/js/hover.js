/**
 * Used to demonstrate Hover.css only. Not required when adding
 * Hover.css to your own pages. Prevents a link from being
 * navigated and gaining focus.
 */
var effects = document.querySelectorAll('.effects')[0];

effects.addEventListener('click', function (e) {

    if (e.target.className.indexOf('hvr') > -1) {
        e.preventDefault();
        e.target.blur();

    }
});