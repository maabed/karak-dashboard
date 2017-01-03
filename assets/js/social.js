$(document).ready(function(){
    var flag = 1;
    $("#gif-start").click(function(){
        if(flag == 1){
            $("#gif-start").removeAttr("src");
            $("#gif-start").attr("src","assets/images/mobile-wireframe.gif");
            flag = 0;
        }
        else{
            $("#gif-start").removeAttr("src");
            $("#gif-start").attr("src","assets/images/mobile-wireframe.png");
            flag = 1;  
        }
    });
});