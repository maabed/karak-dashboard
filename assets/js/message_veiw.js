
function viewMessage() {
    document.getElementById("No-email-selected").style.display("none");
}

$(document).ready(function () {
    $(".ShowMessage").click(function () {
        $(".focus1").on('click',function(e){
            e.preventDefault();
            $(".Editor-editor").focus();
        });
        $(".no-selection").css("display","none");
        $(".message2").css("display","none");
        $(".message3").css("display","none");
        $(".message4").css("display","none");
        $(".message5").css("display","none");
        $(".message6").css("display","none");
        $(".message1").show(300);
        $(".email-content1").show(300);
    });
    $(".ShowMessage2").click(function () {
        $(".focus2").on('click',function(e){
            e.preventDefault();
            $(".Editor-editor").focus();
        });
        $(".no-selection").css("display","none");
        $(".message1").css("display","none");
        $(".message3").css("display","none");
        $(".message4").css("display","none");
        $(".message5").css("display","none");
        $(".message6").css("display","none");
        $(".message2").show(300);
        $(".email-content2").show(300);
    });
    $(".ShowMessage3").click(function () {
        $(".focus3").on('click',function(e){
            e.preventDefault();
            $(".Editor-editor").focus();
        });
        $(".no-selection").css("display","none");
        $(".message1").css("display","none");
        $(".message2").css("display","none");
        $(".message4").css("display","none");
        $(".message5").css("display","none");
        $(".message6").css("display","none");
        $(".message3").show(300);
        $(".email-content3").show(300);
    });
    $(".ShowMessage4").click(function () {
        $(".focus4").on('click',function(e){
            e.preventDefault();
            $(".Editor-editor").focus();
        });
        $(".no-selection").css("display","none");
        $(".message1").css("display","none");
        $(".message2").css("display","none");
        $(".message3").css("display","none");
        $(".message5").css("display","none");
        $(".message6").css("display","none");
        $(".message4").show(300);
        $(".email-content4").show(300);
    });
    $(".ShowMessage5").click(function () {
        $(".focus5").on('click',function(e){
            e.preventDefault();
            $(".Editor-editor").focus();
        });
        $(".no-selection").css("display","none");
        $(".message1").css("display","none");
        $(".message2").css("display","none");
        $(".message3").css("display","none");
        $(".message4").css("display","none");
        $(".message6").css("display","none");
        $(".message5").show(300);
        $(".email-content5").show(300);
    });
    $(".ShowMessage6").click(function () {
        $(".focus6").on('click',function(e){
            e.preventDefault();
            $(".Editor-editor").focus();
        });
        $(".no-selection").css("display","none");
        $(".message1").css("display","none");
        $(".message2").css("display","none");
        $(".message3").css("display","none");
        $(".message4").css("display","none");
        $(".message5").css("display","none");
        $(".message6").show(300);
        $(".email-content6").show(300);
    });
});