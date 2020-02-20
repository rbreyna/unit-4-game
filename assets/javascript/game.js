$(document).ready(function(){
//initialize variables
var targetScore;
var currentScore = 0;
var increment_1;
var increment_2;
var increment_3;
var increment_4;
var wins = 0;
var losses = 0;

newGame();

function newGame(){
    currentScore=0;
    targetScore = 19 + Math.floor(Math.random()*(120-19));
    $("#target").text(targetScore);
    increment_1 = Math.floor(Math.random()*12)+1;
    increment_2 = Math.floor(Math.random()*12)+1;
    increment_3 = Math.floor(Math.random()*12)+1;
    increment_4 = Math.floor(Math.random()*12)+1;
    console.log(targetScore);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#current").text(currentScore);
}



if(currentScore != targetScore){
    
    $("#crystal_1").on("click", function(){
        currentScore += increment_1;
        $("#current").text(currentScore);
        if (currentScore === targetScore){
            alert("Congrats! You reached the target score!");
            wins++;
            newGame();
        } else if (currentScore > targetScore){
            alert("You busted and lost! Try again.");
            losses++;
            newGame();
        }
    });

    $("#crystal_2").on("click", function(){
        currentScore += increment_2;
        $("#current").text(currentScore);
        if (currentScore === targetScore){
            alert("Congrats! You reached the target score!");
            wins++;
            newGame();
        } else if (currentScore > targetScore){
            alert("You busted and lost! Try again.");
            losses++;
            newGame();
        }
    });

    $("#crystal_3").on("click", function(){
        currentScore += increment_3;
        $("#current").text(currentScore);
        if (currentScore === targetScore){
            alert("Congrats! You reached the target score!");
            wins++;
            newGame();
        } else if (currentScore > targetScore){
            alert("You busted and lost! Try again.");
            losses++;
            newGame();
        }
    });

    $("#crystal_4").on("click", function(){
        currentScore += increment_4;
        $("#current").text(currentScore);
        if (currentScore === targetScore){
            alert("Congrats! You reached the target score!");
            wins++;
            newGame();
        } else if (currentScore > targetScore){
            alert("You busted and lost! Try again.");
            losses++;
            newGame();
        }
    });
} 


});
