$(document).ready(function() {
  $("button#def1").click(function() {
    $(".js-hidden").toggle();
  });
  $("button#def2").click(function() {
    $(".operator-hidden").removeClass();
    $(".operator-hidden").toggle();
  
  });
});