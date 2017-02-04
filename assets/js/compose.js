document.getElementById("compose").onclick = function() {
  location.href = "compose.html";
};
$(document).ready(function() {
  $(".to").find(".bootstrap-tagsinput").find("input").attr("id", "To_tag");
  $("#To_tag").focusin(function() {
    $("#To_tag").parent().css("border-bottom", "1px solid #3B97D2");
  });
  $("#To_tag").focusout(function() {
    $("#To_tag").parent().css("border-bottom", "1px solid #E4E5E7");
  });


  $(".cc").find(".bootstrap-tagsinput").find("input").attr("id", "cc_tag");
  $("#cc_tag").focusin(function() {
    $("#cc_tag").parent().css("border-bottom", "1px solid #3B97D2");
  });
  $("#cc_tag").focusout(function() {
    $("#cc_tag").parent().css("border-bottom", "1px solid #E4E5E7");
  });
  $('#refresh-page').click(function() {
    $(".overlay-container").addClass("overlay");
    $(".refresh-loader").css("display", "block");
    setTimeout(function() {
      $(".overlay-container").removeClass("overlay");
      $(".refresh-loader").css("display", "none");
    }, 2000);
  });
  $(".current-date").append(moment().format('ll'));
  $(function() {
    $('.summernote-inbox').summernote({
      height: 200,
    });
  });
});