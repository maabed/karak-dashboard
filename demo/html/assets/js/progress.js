/*!
Progress JS
Karak dashboard: v1.0.0
Author: New Release
http://newrelease.io
Copyright 2017 New Release
*/
$(function($) {

    'use strict';
    /* basic circle */
    $(document).ready(function() {
        $('#progress-container').append("<div id='init' class='center-block' style='height:100px;width:100px;'></div>")
        var basicinit = new ProgressBar.Circle(init, {
            strokeWidth: 6,
            easing: 'easeInOut',
            duration: 1400,
            color: '#67b2e4',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: null
        });
        basicinit.animate(1.0);
        $('#circleGenerate').click(function() {
            $('#init,#basic,#bounce,#multi,#semi,#txt').remove();
            var Color = $("#Color").val();
            var value = $('select[name=progress-select]').val();

            /* Basic progress circle */
            if (value == 'basic') {
                $('#progress-container').append("<div id='basic' class='center-block'></div>")
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
                $('#basicGenerate').click(function() {
                    if (flag == 0) {
                        basicC.animate(0.0);
                        flag = 1;
                    } else {
                        basicC.animate(1.0);
                        flag = 0;
                    }
                });
            }
            /* bounce circle */
            else if (value == 'bounce') {
                $('#progress-container').append("<div id='bounce' class='center-block'></div>")
                var bounceC = new ProgressBar.Circle(bounce, {
                    color: '#FFEA82',
                    trailColor: '#eee',
                    trailWidth: 1,
                    duration: 1400,
                    easing: 'bounce',
                    strokeWidth: 6,
                    from: {
                        color: Color,
                        a: 0
                    },
                    to: {
                        color: Color,
                        a: 1
                    },
                    step: function(state, circle) {
                        circle.path.setAttribute('stroke', state.color);
                    }
                });
                bounceC.animate(1.0);
                var flag2 = 0;
                $("#BounceGenerate").click(function() {
                    if (flag2 == 0) {
                        bounceC.animate(0.0);
                        flag2 = 1;
                    } else {
                        bounceC.animate(1.0);
                        flag2 = 0;
                    }
                });
            }
            /* multi circle */
            else if (value == 'multiple') {
                $('#progress-container').append("<div id='multi' class='center-block'></div>")
                var multiC = new ProgressBar.Circle(multi, {
                    color: '#aaa',
                    strokeWidth: 4,
                    trailWidth: 1,
                    easing: 'easeInOut',
                    duration: 1400,
                    text: {
                        autoStyleContainer: false
                    },
                    from: {
                        color: Color,
                        width: 1
                    },
                    to: {
                        color: Color,
                        width: 4
                    },
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
                $("#multiGenerate").click(function() {
                    if (flag3 == 0) {
                        multiC.animate(0.0);
                        flag3 = 1;
                    } else {
                        multiC.animate(1.0);
                        flag3 = 0;
                    }
                });
            }
            /*Semi circle*/
            else if (value == 'Semi') {
                $('#progress-container').append("<div id='semi' class='center-block' style='width:40%;margin-bottom:10px;'></div>")
                var bar = new ProgressBar.SemiCircle(semi, {
                    strokeWidth: 6,
                    easing: 'easeInOut',
                    duration: 1400,
                    color: Color,
                    trailColor: '#eee',
                    trailWidth: 1,
                    svgStyle: null
                });
                bar.animate(1.0); // Number from 0.0 to 1.0
            } else if (value == 'SemiText') {
                $('#progress-container').append("<div id='txt' class='center-block' style='width:40%;margin-bottom:10px;'></div>")
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
                    from: {
                        color: Color
                    },
                    to: {
                        color: Color
                    },
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
                bar.animate(1.0);
            }
        });
        /*lines*/
        /*basic bar*/
        var barline = new ProgressBar.Line(line, {
            strokeWidth: 4,
            easing: 'easeInOut',
            duration: 1400,
            color: '#67b2e4',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {
                width: '100%',
                height: '5px',
                display: 'block',
                marginRight: 'auto',
                marginLeft: 'auto'
            }
        });
        barline.animate(1.0);
        var flag5 = 0;
        $('#BasicLGenerate').click(function() {
            if (flag5 == 0) {
                barline.animate(0.0);
                flag5 = 1;
            } else {
                barline.animate(1.0);
                flag5 = 0;
            }
        });
        /*percent bar*/
        var percentage = new ProgressBar.Line(percent, {
            strokeWidth: 4,
            easing: 'easeInOut',
            duration: 1400,
            color: '#67b2e4',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {
                width: '100%',
                height: '5px',
                display: 'block',
                marginRight: 'auto',
                marginLeft: 'auto'
            },
            text: {
                style: {
                    color: '#999',
                    position: 'absolute',
                    right: '15px',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
                autoStyleContainer: false
            },
            from: {
                color: '#FFEA82'
            },
            to: {
                color: '#ED6A5A'
            },
            step: (state, bar) => {
                bar.setText(Math.round(bar.value() * 100) + ' %');
            }
        });
        percentage.animate(1.0);
        var flag6 = 0;
        $("#PercentGenerate").click(function() {
            if (flag6 == 0) {
                percentage.animate(0.0);
                flag6 = 1;
            } else {
                percentage.animate(1.0);
                flag6 = 0;
            }
        });
        /*colored bar*/
        var bar = new ProgressBar.Line(colored, {
            strokeWidth: 4,
            easing: 'easeInOut',
            duration: 1400,
            color: '#FFEA82',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {
                width: '100%',
                height: '5px',
                display: 'block',
                marginRight: 'auto',
                marginLeft: 'auto'
            },
            from: {
                color: '#cce5f6'
            },
            to: {
                color: '#67b2e4'
            },
            step: (state, bar) => {
                bar.path.setAttribute('stroke', state.color);
            }
        });

        bar.animate(1.0);
        var flag7 = 0;
        $("#ColorGenerate").click(function() {
            if (flag7 == 0) {
                bar.animate(0.0);
                flag7 = 1;
            } else {
                bar.animate(1.0);
                flag7 = 0;
            }
        });
        /*Static bars*/
        /*Blue line*/
        var barlineI = new ProgressBar.Line(BasicInfoLine, {
            strokeWidth: 4,
            easing: 'easeInOut',
            duration: 1400,
            color: '#67b2e4',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {
                width: '100%',
                height: '5px',
                display: 'block',
                marginRight: 'auto',
                marginLeft: 'auto'
            }
        });
        barlineI.animate(1.0);
        /*Green line*/
        var barlineS = new ProgressBar.Line(BasicSuccessLine, {
            strokeWidth: 4,
            easing: 'easeInOut',
            duration: 1400,
            color: '#62d995',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {
                width: '100%',
                height: '5px',
                display: 'block',
                marginRight: 'auto',
                marginLeft: 'auto'
            }
        });
        /*Black line*/
        barlineS.animate(1.0);
        var barlineP = new ProgressBar.Line(BasicPrimaryLine, {
            strokeWidth: 4,
            easing: 'easeInOut',
            duration: 1400,
            color: '#677786',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {
                width: '100%',
                height: '5px',
                display: 'block',
                marginRight: 'auto',
                marginLeft: 'auto'
            }
        });
        /*Orange line*/
        barlineP.animate(1.0);
        var barlineW = new ProgressBar.Line(BasicWarningLine, {
            strokeWidth: 4,
            easing: 'easeInOut',
            duration: 1400,
            color: '#f5d34b',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {
                width: '100%',
                height: '5px',
                display: 'block',
                marginRight: 'auto',
                marginLeft: 'auto'
            }
        });
        /*Red line*/
        barlineW.animate(1.0);
        var barlineD = new ProgressBar.Line(BasicDangerLine, {
            strokeWidth: 4,
            easing: 'easeInOut',
            duration: 1400,
            color: '#ed796d',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {
                width: '100%',
                height: '5px',
                display: 'block',
                marginRight: 'auto',
                marginLeft: 'auto'
            }
        });
        barlineD.animate(1.0);
        /*Bar sizes*/
        /*Thick line*/
        var barlineThk = new ProgressBar.Line(BasicthickLine, {
            strokeWidth: 4,
            easing: 'easeInOut',
            duration: 1400,
            color: '#67b2e4',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {
                width: '100%',
                height: '5px',
                display: 'block',
                marginRight: 'auto',
                marginLeft: 'auto'
            }
        });
        barlineThk.animate(1.0);
        /*Thin line*/
        var barlinethn = new ProgressBar.Line(BasicthinLine, {
            strokeWidth: 4,
            easing: 'easeInOut',
            duration: 1400,
            color: '#67b2e4',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {
                width: '100%',
                height: '2px',
                display: 'block',
                marginRight: 'auto',
                marginLeft: 'auto'
            }
        });
        barlinethn.animate(1.0);

        $('.select2-init-single').select2();
    });
});