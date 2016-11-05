$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});


var randomScalingFactor = function () {
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
                display: false,
                text: 'Chart.js Combo Bar Line Chart'
            }
        }
    });
};

$('#randomizeData').click(function () {
    $.each(chartData.datasets, function (i, dataset) {
        dataset.backgroundColor = 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',.7)';
        dataset.data = [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()];

    });
    window.myMixedChart.update();
});

$('.SubMenue').hide();

$('.MainMenue').click(function (e) {

    e.preventDefault();

    var $this = $(this).parent().find('.Submenue');
    $(".Submenue").not($this).hide(300);

    // here is what I want to do
    $this.toggle(300);

});


//Right side Section


$(document).ready(function () {
    $('#Right-Side-Section-Togle').click(function () {
        var toggleWidth = $("#Right-Side-Section").width() == 300 ? "200px" : "300px";
        $('#Right-Side-Section').animate({ width: toggleWidth });

    });
});

$('#Right-Side-Section-Togle').click(function (e) {

    e.preventDefault();
    // hide all span
    var $this = $(this).parent().find('#Right-Side-Section');
    $("#Right-Side-Section").not($this).width('300px;');
    $('#Right-Side-Section-Togle').hide(100);
});

function closeToggel() {
    var a = document.getElementById("Right-Side-Section")
    a.style.width = "0px";
    $('#Right-Side-Section-Togle').show(100);
}

/*Message Veiw in inbox*/
function viewMessage() {
    document.getElementById("No-email-selected").style.display("none");
}

$(document).ready(function () {
    $(".ShowMessage").click(function () {
        $("#No-email-selected").hide(300);
        $("#email-content").show(300);
    });

});
/*Text Editor*/
$(document).ready(function () {
    $("#txtEditor").Editor();
});

$('#tokenfield').tokenfield({
    autocomplete: {
        source: ['red', 'blue', 'green', 'yellow', 'violet', 'brown', 'purple', 'black', 'white'],
        delay: 100
    },
    showAutocompleteOnFocus: true
})


/*Tool Tip*/

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

