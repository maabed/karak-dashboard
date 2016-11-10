﻿var randomScalingFactor = function () {
    return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
};
var randomColorFactor = function () {
    return Math.round(Math.random() * 255);
};

var chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
        type: 'bar',
        label: 'Dataset 1',
        backgroundColor: "rgba(151,187,205,0.5)",
        data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
        borderColor: 'white',
        borderWidth: 2
    }, {
        type: 'line',
        label: 'Dataset 2',
        backgroundColor: "rgba(151,187,205,0.5)",
        data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
        borderColor: 'white',
        borderWidth: 2
    }, {
        type: 'bar',
        label: 'Dataset 3',
        backgroundColor: "rgba(220,220,220,0.5)",
        data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
    }, ]

};
window.onload = function () {
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myMixedChart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
            responsive: true,
            title: {
                display: true,
         
            }
        }
    });
};

//$('#randomizeData').click(function () {
//    $.each(chartData.datasets, function (i, dataset) {
//        dataset.backgroundColor = 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',.7)';
//        dataset.data = [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()];

//    });
//    window.myMixedChart.update();
//});