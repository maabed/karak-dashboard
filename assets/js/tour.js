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
                    element: "#transaction-tour",
                    title: "Page header",
                    content: "You can use a backdrop to highlight the element.",
                    placement: "right"
                },
                {
                    element: "#calender-tour",
                    title: "Tour title",
                    content: "Or turn it off.",
                    placement: "top",
                    backdrop: false,

                },
                {
                    element: ".activities",
                    title: "Tour title",
                    content: "Nulla tincidunt nunc quam, ac faucibus dolor varius vel.",
                    placement: "right",
                    backdrop: false,

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