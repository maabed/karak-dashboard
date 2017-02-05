
$(document).ready(function () {
    $('.ShowMessage').click(function(){
        $('.no-selection').hide();
        var index = $(this).attr('data-message-id');
        var msgData = message[index];
        $('#sender').text(msgData && msgData.sender);
        $('#date').text(msgData && msgData.date);
        $('#title').text(msgData && msgData.title);
        $('#body').text(msgData && msgData.body);
        $('#avatar').attr('src',msgData && msgData.avatar);
    });
    var message = [{
        sender:'David Nester',
        date:'Today at 1:33pm',
        title: 'Email Title Gose Here Email Title Gose Here',
        body:'I have recently ordered a new pair of soccer cleats (item #6542951) from your website on June 21. I received the order on June 26. Unfortunately, when I opened it, I saw that the cleats were used. The cleats had dirt all over it and there was a small tear in front of the part where the left toe would go. My order number is AF26168156.Sincerely, Signature',
        avatar:'assets/images/Sami.jpg',
    },
    {
        sender:'Sherman Knox',
        date:'Yesterday at 6:20pm',
        title: 'Email Title Gose Here Email Title Gose Here',
        body:'I have recently ordered a new pair of soccer cleats (item #6542951) from your website on June 21. I received the order on June 26. Unfortunately, when I opened it, I saw that the cleats were used. The cleats had dirt all over it and there was a small tear in front of the part where the left toe would go. My order number is AF26168156.To resolve the problem, I would like you to credit my account for the amount charged for my cleats; I have already went out and bought a new pair of cleats at my local sporting goods store so sending another would result in me having two pairs of the same cleats.Sincerely,',
        avatar:'assets/images/user.png',  
    },
    {
        sender:'Garrett Calvin',
        date:'Yesterday at 12:45pm',
        title: 'Email Title Gose Here Email Title Gose Here',
        body:'I have recently ordered a new pair of soccer cleats (item #6542951) from your website on June 21. I received the order on June 26. Unfortunately, when I opened it, I saw that the cleats were used. The cleats had dirt all over it and there was a small tear in front of the part where the left toe would go. My order number is AF26168156.',
        avatar:'assets/images/member-3.png',  
    },
    {
        sender:'Elaina Annmarie',
        date:'yesterday at 11:00am',
        title: 'Email Title Gose Here Email Title Gose Here',
        body:'I have recently ordered a new pair of soccer cleats (item #6542951) from your website on June 21. I received the order on June 26. Unfortunately, when I opened it, I saw that the cleats were used. The cleats had dirt all over it and there was a small tear in front of the part where the left toe would go. My order number is AF26168156.To resolve the problem, I would like you to credit my account for the amount charged for my cleats; I have already went out and bought a new pair of cleats at my local sporting goods store so sending another would result in me having two pairs of the same cleats.Than you for taking the time to read this letter. I have been a satisfied customer of your company for many years and this is the first time I have encountered a problem. If you need to contact me, you can reach me at (555) 555-5555.',
        avatar:'assets/images/team1.jpg',  
    },
    {
        sender:'Shirley Garnet',
        date:'Jan 15 at 02:22pm',
        title: 'Email Title Gose Here Email Title Gose Here',
        body:'I would like you to credit my account for the amount charged for my cleats; I have already went out and bought a new pair of cleats at my local sporting goods store so sending another would result in me having two pairs of the same cleats. Than you for taking the time to read this letter. I have been a satisfied customer of your company for many years and this is the first time I have encountered a problem. If you need to contact me, you can reach me at (555) 555-5555.',
        avatar:'assets/images/team-member.jpg',  
    },
    {
        sender:'Cheyenne Lauren',
        date:'Dec 22 at 08:05pm',
        title: 'Email Title Gose Here Email Title Gose Here',
        body:'I have recently ordered a new pair of soccer cleats (item #6542951) from your website on June 21. I received the order on June 26. If you need to contact me, you can reach me at (555) 555-5555.',
        avatar:'assets/images/team-member-5.jpg',  
    },
    ];
});








































































// function viewMessage() {
//     document.getElementById("No-email-selected").style.display("none");
// }

// $(document).ready(function () {
//     $(".ShowMessage").click(function () {
//         $(".focus1").on('click',function(e){
//             e.preventDefault();
//             $(".Editor-editor").focus();
//         });
//         $(".no-selection").css("display","none");
//         $(".message2").css("display","none");
//         $(".message3").css("display","none");
//         $(".message4").css("display","none");
//         $(".message5").css("display","none");
//         $(".message6").css("display","none");
//         $(".message1").show(300);
//         $(".email-content1").show(300);
//     });
//     $(".ShowMessage2").click(function () {
//         $(".focus2").on('click',function(e){
//             e.preventDefault();
//             $(".Editor-editor").focus();
//         });
//         $(".no-selection").css("display","none");
//         $(".message1").css("display","none");
//         $(".message3").css("display","none");
//         $(".message4").css("display","none");
//         $(".message5").css("display","none");
//         $(".message6").css("display","none");
//         $(".message2").show(300);
//         $(".email-content2").show(300);
//     });
//     $(".ShowMessage3").click(function () {
//         $(".focus3").on('click',function(e){
//             e.preventDefault();
//             $(".Editor-editor").focus();
//         });
//         $(".no-selection").css("display","none");
//         $(".message1").css("display","none");
//         $(".message2").css("display","none");
//         $(".message4").css("display","none");
//         $(".message5").css("display","none");
//         $(".message6").css("display","none");
//         $(".message3").show(300);
//         $(".email-content3").show(300);
//     });
//     $(".ShowMessage4").click(function () {
//         $(".focus4").on('click',function(e){
//             e.preventDefault();
//             $(".Editor-editor").focus();
//         });
//         $(".no-selection").css("display","none");
//         $(".message1").css("display","none");
//         $(".message2").css("display","none");
//         $(".message3").css("display","none");
//         $(".message5").css("display","none");
//         $(".message6").css("display","none");
//         $(".message4").show(300);
//         $(".email-content4").show(300);
//     });
//     $(".ShowMessage5").click(function () {
//         $(".focus5").on('click',function(e){
//             e.preventDefault();
//             $(".Editor-editor").focus();
//         });
//         $(".no-selection").css("display","none");
//         $(".message1").css("display","none");
//         $(".message2").css("display","none");
//         $(".message3").css("display","none");
//         $(".message4").css("display","none");
//         $(".message6").css("display","none");
//         $(".message5").show(300);
//         $(".email-content5").show(300);
//     });
//     $(".ShowMessage6").click(function () {
//         $(".focus6").on('click',function(e){
//             e.preventDefault();
//             $(".Editor-editor").focus();
//         });
//         $(".no-selection").css("display","none");
//         $(".message1").css("display","none");
//         $(".message2").css("display","none");
//         $(".message3").css("display","none");
//         $(".message4").css("display","none");
//         $(".message5").css("display","none");
//         $(".message6").show(300);
//         $(".email-content6").show(300);
//     });
// });