var buttonArray = ["red", "blue", "green", "yellow"];
var gamePattern = []
function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonArray[randomNumber];
  gamePattern.append(randomChosenColor);
  $("button #" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio = new Audio(url("./sounds/" + buttonArray[randomChosenColor] + ".mp3"));
  audio.play();
}
