/* basic circle */
$(document).ready(function(){
$("#circleGenerate").click(function(){
$("#basic").remove();
        $("#bounce").remove();
        $("#multi").remove();
        var Color = $("#Color").val();
        var value = $('select[name=progress-select]').val();
        if (value == "basic"){
$("#progress-container").append("<div id='basic' class='center-block'></div>")
        var basicC = new ProgressBar.Circle(basic, {
        strokeWidth: 6,
                easing: 'easeInOut',
                duration: 1400,
                color: Color,
                trailColor: '#eee',
                trailWidth: 1,
                svgStyle: null
        });
        basicC.animate(1.0);
        var flag = 0;
        $("#basicGenerate").click(function(){
if (flag == 0){
basicC.animate(0.0)
        flag = 1;
        }
else{
basicC.animate(1.0)
        flag = 0;
        }
});
        }

/* bounce circle */
else if (value == "bounce"){
$("#progress-container").append("<div id='bounce' class='center-block'></div>")
        var bounceC = new ProgressBar.Circle(bounce, {
        color: '#FFEA82',
                trailColor: '#eee',
                trailWidth: 1,
                duration: 1400,
                easing: 'bounce',
                strokeWidth: 6,
                from: {color: Color, a:0},
                to: {color: Color, a:1},
                // Set default step function for all animate calls
                step: function(state, circle) {
                circle.path.setAttribute('stroke', state.color);
                }
        });
        bounceC.animate(1.0);
        var flag2 = 0;
        $("#BounceGenerate").click(function(){
if (flag2 == 0){
bounceC.animate(0.0)
        flag2 = 1;
        }
else{
bounceC.animate(1.0)
        flag2 = 0;
        }
});
}
/* multi circle */


else if (value == "multiple"){
$("#progress-container").append("<div id='multi' class='center-block'></div>")
        var multiC = new ProgressBar.Circle(multi, {
        color: '#aaa',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 4,
                trailWidth: 1,
                easing: 'easeInOut',
                duration: 1400,
                text: {
                autoStyleContainer: false
                },
                from: { color: Color, width: 1 },
                to: { color: Color, width: 4 },
                // Set default step function for all animate calls
                step: function(state, circle) {
                circle.path.setAttribute('stroke', state.color);
                        circle.path.setAttribute('stroke-width', state.width);
                        var value = Math.round(circle.value() * 100);
                        if (value === 0) {
                circle.setText('');
                } else {
                circle.setText(value);
                }

                }
        });
        multiC.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
        multiC.text.style.fontSize = '2rem';
        multiC.animate(1.0);
        var flag3 = 0;
        $("#multiGenerate").click(function(){
if (flag3 == 0){
multiC.animate(0.0)
        flag3 = 1;
        }
else{
multiC.animate(1.0)
        flag3 = 0;
        }
});
}
});
        /*lines*/


        /*basic bar*/
        var barline = new ProgressBar.Line(line, {
        strokeWidth: 4,
                easing: 'easeInOut',
                duration: 1400,
                color: '#FFEA82',
                trailColor: '#eee',
                trailWidth: 1,
                svgStyle: {width: '30%', height: '100%', display : 'block', marginRight : 'auto', marginLeft : 'auto'}
        });
        barline.animate(1.0);
        var flag5 = 0;
        $("#BarGenerate").click(function(){
if (flag5 == 0){
barline.animate(0.0)
        flag5 = 1;
        }
else{
barline.animate(1.0)
        flag5 = 0;
        }
});
        /*percent bar*/
        percent = new ProgressBar.Line(percent, {
        strokeWidth: 4,
                easing: 'easeInOut',
                duration: 1400,
                color: '#FFEA82',
                trailColor: '#eee',
                trailWidth: 1,
                svgStyle: {width: '30%', height: '100%', display : 'block', marginRight : 'auto', marginLeft : 'auto'},
                text: {
                style: {
                // Text color.
                // Default: same as stroke color (options.color)
                color: '#999',
                        position: 'absolute',
                        right: '185px',
                        padding: 0,
                        margin: 0,
                        transform: null
                },
                        autoStyleContainer: false
                },
                from: {color: '#FFEA82'},
                to: {color: '#ED6A5A'},
                step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
        }
        });
        percent.animate(1.0);
        var flag6 = 0;
        $("#PercentGenerate").click(function(){
if (flag6 == 0){
percent.animate(0.0)
        flag6 = 1;
        }
else{
percent.animate(1.0)
        flag6 = 0;
        }
});
        /*colored bar*/

        colored = new ProgressBar.Line(colored, {
        strokeWidth: 4,
                easing: 'easeInOut',
                duration: 1400,
                color: '#FFEA82',
                trailColor: '#eee',
                trailWidth: 1,
                svgStyle: {width: '30%', height: '100%', display : 'block', marginRight : 'auto', marginLeft : 'auto'},
                from: {color: '#FFEA82'},
                to: {color: '#ED6A5A'},
                step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
        }
        });
        colored.animate(1.0); // Number from 0.0 to 1.0
        var flag7 = 0;
        $("#ColorGenerate").click(function(){
if (flag7 == 0){
colored.animate(0.0)
        flag7 = 1;
        }
else{
colored.animate(1.0)
        flag7 = 0;
        }
});
        /* semi circle*/


// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

        $("#semi-circleGenerate").click(function(){
$("#semi").remove();
        $("#txt").remove();
        var ColorS = $("#ColorS").val();
        var value = $('select[name=semi-select]').val();
        if (value == "Semi"){
$("#semi-progress-container").append("<div id='semi' class='center-block' style='width:40%;margin-bottom:10px;'></div>")
        var bar = new ProgressBar.SemiCircle(semi, {
        strokeWidth: 6,
                easing: 'easeInOut',
                duration: 1400,
                color: ColorS,
                trailColor: '#eee',
                trailWidth: 1,
                svgStyle: null
        });
        bar.animate(1.0); // Number from 0.0 to 1.0
        }
else if (value == "SemiText"){
$("#semi-progress-container").append("<div id='txt' class='center-block' style='width:40%;margin-bottom:10px;'></div>")

        var bar = new ProgressBar.SemiCircle(txt, {
        strokeWidth: 6,
                color: '#FFEA82',
                trailColor: '#eee',
                trailWidth: 1,
                easing: 'easeInOut',
                duration: 1400,
                svgStyle: null,
                text: {
                value: '',
                        alignToBottom: false
                },
                from: {color: ColorS},
                to: {color: ColorS},
                // Set default step function for all animate calls
                step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
                var value = Math.round(bar.value() * 100);
                if (value === 0) {
        bar.setText('');
        } else {
        bar.setText(value);
        }

        bar.text.style.color = state.color;
        }
        });
        bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
        bar.text.style.fontSize = '2rem';
        bar.animate(1.0); // Number from 0.0 to 1.0


        }
});
        /*Spinners colors*/

        /*bar spinner*/
    $("#spinner").click(function(){
        $(".loader-position").removeClass("hide-loader")
        $("#overlay").addClass("loading-opacity");
        setTimeout(function(){
            $(".preloader-wrapper").addClass("hide-loader")
            $("#overlay").removeClass("loading-opacity");
        }, 4500);
    });
        /*dots spinners*/
    $("#spinner-dot").click(function(){
        $("#dots-overlay").addClass("loading-opacity");
        $(".big-loader-position").removeClass("hide-loader");
        setTimeout(function(){
            $("#username").val('');
            $("#password").val('');
            $(".big-loader-position").addClass("hide-loader");
            $("#dots-overlay").removeClass("loading-opacity");
        }, 4500);
    });
    
    /*loading bar*/
    $("#loading-bar").click(function(){
        $("#progress-bar").removeClass("hide-loader");
        $(".image-bar").addClass("loading-opacity");
        setTimeout(function(){
            $("#progress-bar").addClass("hide-loader");
            $(".image-bar").removeClass("loading-opacity");
        }, 4500);
    });
    
    
        });