$(document).ready(function(){ 
$(function () {
        // Instance the tour
        var tour = new Tour({
            backdrop: true,
            onShown: function(tour) {
                // ISSUE    - https://github.com/sorich87/bootstrap-tour/issues/189
                // FIX      - https://github.com/sorich87/bootstrap-tour/issues/189#issuecomment-49007822
                // You have to write your used animated effect class
                // Standard animated class
                $('.animated').removeClass('fadeIn');
                // Animate class from animate-panel plugin
                $('.animated-panel').removeClass('zoomIn');
            },
            steps: [
                {
                    element: "#canvas",
                    title: "Page header",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut vulputate sapien, ac venenatis est.",
                    placement: "right"
                },
                {
                    element: ".statistics",
                    title: "Tour title",
                    content: "Ut sit amet laoreet nisl. Nam eget ex commodo, finibus dolor ac, aliquet nisi. Aenean blandit sit amet ligula eget commodo.",
                    placement: "top"
                },
                {
                    element: "#Low-trans",
                    title: "Tour title",
                    content: "Nulla tincidunt nunc quam, ac faucibus dolor varius vel.",
                    placement: "right"
                }
            ]});
        // Initialize the tour
        tour.init();
        tour.restart();

        // Restart the tour
//        $('#startTour').click(function(){
//            tour.restart();
//        });
 });
    });