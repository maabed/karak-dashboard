/* basic circle */ 
$(document).ready(function(){
    $("#circleGenerate").click(function(){
        
        
        var value = $('select[name=progress-select]').val();
        if(value == "basic"){
        $("#progress-container").append("<div id=''></div>")    
        var basicC = new ProgressBar.Circle(basic, {
            strokeWidth: 6,
            easing: 'easeInOut',
            duration: 1400,
            color: '#FFEA82',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: null
        });
    basicC.animate(1.0);
    var flag = 0;
    $("#basicGenerate").click(function(){
        if(flag == 0){
            basicC.animate(0.0)
            flag = 1;
        }
        else{
          basicC.animate(1.0)
          flag = 0;
        }       
    });
        }
    });
/* bounce circle */ 
var bounceC = new ProgressBar.Circle(bounce, {
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  duration: 1400,
  easing: 'bounce',
  strokeWidth: 6,
  from: {color: '#FFEA82', a:0},
  to: {color: '#ED6A5A', a:1},
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
  }
});
bounceC.animate(1.0); 
    var flag2 = 0;
    $("#BounceGenerate").click(function(){
        if(flag2 == 0){
            bounceC.animate(0.0)
            flag2 = 1;
        }
        else{
          bounceC.animate(1.0)
          flag2 = 0;
        }       
    });


/* multi circle */ 
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
  from: { color: '#aaa', width: 1 },
  to: { color: '#333', width: 4 },
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
        if(flag3 == 0){
            multiC.animate(0.0)
            flag3 = 1;
        }
        else{
          multiC.animate(1.0)
          flag3 = 0;
        }       
    });
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
  svgStyle: {width: '30%', height: '100%',display : 'block' , marginRight : 'auto' , marginLeft : 'auto'}
});

barline.animate(1.0);
    var flag5 = 0;
    $("#BarGenerate").click(function(){
        if(flag5 == 0){
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
  svgStyle: {width: '30%', height: '100%',display : 'block' , marginRight : 'auto' , marginLeft : 'auto'},
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
        if(flag6 == 0){
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
  svgStyle: {width: '30%', height: '100%',display : 'block' , marginRight : 'auto' , marginLeft : 'auto'},
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
  }
});

colored.animate(1.0);  // Number from 0.0 to 1.0
    var flag7 = 0;
    $("#ColorGenerate").click(function(){
        if(flag7 == 0){
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

var bar = new ProgressBar.SemiCircle(semi, {
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
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
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

bar.animate(1.0);  // Number from 0.0 to 1.0

    var flag4 = 0;
    $("#semiGenerate").click(function(){
        if(flag4 == 0){
            bar.animate(0.0)
            flag4 = 1;
        }
        else{
          bar.animate(1.0)
          flag4 = 0;
        }       
    });





/*Spinners colors*/

/*bar spinner*/
            var opts = {
                lines: 13 // The number of lines to draw
                , length: 28 // The length of each line
                , width: 14 // The line thickness
                , radius: 42 // The radius of the inner circle
                , scale: 0.25 // Scales overall size of the spinner
                , corners: 1 // Corner roundness (0..1)
                , color: '#000' // #rgb or #rrggbb or array of colors
                , opacity: 0.25 // Opacity of the lines
                , rotate: 0 // The rotation offset
                , direction: 1 // 1: clockwise, -1: counterclockwise
                , speed: 1 // Rounds per second
                , trail: 60 // Afterglow percentage
                , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
                , zIndex: 2e9 // The z-index (defaults to 2000000000)
                , className: 'spinner' // The CSS class to assign to the spinner
                , top: '38%' // Top position relative to parent
                , left: '50%' // Left position relative to parent
                , shadow: false // Whether to render a shadow
                , hwaccel: false // Whether to use hardware acceleration
                , position: 'absolute' // Element positioning
            }
            var target = document.getElementById('basicspinner')
            $("#spinner").click(function(){
                $("#overlay").addClass("loading-opacity");
                var spinner = new Spinner(opts).spin(target);
                setTimeout(function(){
                   spinner.stop(); // To stop the spinner
                    $("#overlay").removeClass("loading-opacity");
                }, 4500);
            });

/*dots spinners*/
            var dots = {
                lines: 13 // The number of lines to draw
                , length: 0 // The length of each line
                , width: 14 // The line thickness
                , radius: 42 // The radius of the inner circle
                , scale: 0.25 // Scales overall size of the spinner
                , corners: 1 // Corner roundness (0..1)
                , color: '#3b97d2' // #rgb or #rrggbb or array of colors
                , opacity: 0 // Opacity of the lines
                , rotate: 0 // The rotation offset
                , direction: 1 // 1: clockwise, -1: counterclockwise
                , speed: 1 // Rounds per second
                , trail: 60 // Afterglow percentage
                , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
                , zIndex: 2e9 // The z-index (defaults to 2000000000)
                , className: 'spinner' // The CSS class to assign to the spinner
                , top: '38%' // Top position relative to parent
                , left: '50%' // Left position relative to parent
                , shadow: false // Whether to render a shadow
                , hwaccel: false // Whether to use hardware acceleration
                , position: 'absolute' // Element positioning
            }
            var targetdots = document.getElementById('basicspinner-dots')
            $("#spinner-dot").click(function(){
                $("#dots-overlay").addClass("loading-opacity");
                var spinnerdots = new Spinner(dots).spin(targetdots);
                setTimeout(function(){
                    $("#username").val('');
                    $("#password").val('');
                   spinnerdots.stop(); // To stop the spinner
                    $("#dots-overlay").removeClass("loading-opacity");
                }, 4500);
            });


            $("#loading-bar").click(function(){
                progressJs("#loader-bar").start();
                progressJs("#loader-bar").set(50);
                setTimeout(function(){
                    progressJs("#loader-bar").end();
                    $("#loader-bar").append("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper odio sit amet miultrices,consequat. Vestibulum et lacinia mauris. Phasellus imperdiet lobortis dictum </p>")
                }, 1000);
            });