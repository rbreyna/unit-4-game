$(document).ready(function(){
//initialize variables
var targetScore;
var currentScore;
var increment_1;
var increment_2;
var increment_3;
var increment_4;
var playGame = true;

newGame();

function newGame(){
    targetScore = 19 + Math.floor(Math.random()*(120-19));
    $("#target").text(targetScore);
    console.log(targetScore);
}
});
