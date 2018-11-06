
var healthCounter = 3;



/*
function stopItsComing() {
  var stopItsComing = document.getElementById("introMusic");
  stopItsComing.pause();
}
*/

$(document).ready(function () {
  $("#room0").slideDown();
  $("#room0toRoom1").click(function() {
    $(".room").hide();
        $(".room1").hide();
    $("#room1").hide();
    $("#healthDisplay").text(healthCounter);
  });

  $("#GameOver").click(function() {
    $(".room").hide();
    $("#gameOver").slideDown();
  });

  $("#gameOverToRoom0").click(function() {
    $(".room").hide();
    $("#room0").slideDown();
  });

  $("#room1toRoom2").click(function() {
    $(".room").hide();
        $(".room1").hide();
    $("#room2").slideDown();
  });

  $("#room1toRoom2-damage").click(function() {
    $(".room").hide();
    $("#room2-damage").slideDown();
    healthCounter--;
  });

  $("#room2toRoom3").click(function() {
    $(".room").hide();
    $("#room3").slideDown();
  });

  $("#room2toRoom3-damage").click(function() {
    $(".room").hide();
    $("#room3-damage").slideDown();
    healthCounter--;
  });

  $("#room3toRoom4").click(function() {
    $(".room").hide();
    $("#room4").slideDown();
  });


});
