$(document).ready(function(){
  $("#press_me").click(function(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    $("#very_important_h1").css("color",color);
  });
});
