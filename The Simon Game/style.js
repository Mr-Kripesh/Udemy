var userClickedPattern = [];
var buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];
var started = false;
var level = 0;

$(document).keypress(function() {
    if (!started) {
       $("h1").text("Level "+ level);
       nextSequence();
       started = true;
    }

});

$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
   });

function nextSequence() {
    level++;
    $("h1").text("Level "+ level);

    var randomNumber = Math.floor((Math.random()*4));
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#"+ randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColor);

}

function playSound(name){

     var audio = new Audio("sounds/" + name + ".mp3");
     audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");

    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}



// For green Button

$("button.green").addClass("size green");


//For red button
$("button.red").addClass("size red");


//For Yellow button
$("button.yellow").addClass("size yellow");


//For blue button
$("button.blue").addClass("size blue");

// For headline 
$("h1").addClass("title");









