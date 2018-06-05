var alaphabet = "abcdefghijklmnopqrstuvwxyz";
var wins = 0;
var losses = 0;
var left = 10;

document.onkeyup = function() {
    // alert("working");
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    if (event.keyCode >= 65 && event.keyCode <= 90){
        // alert("true")
    } else {
        alert("false")
    }
    console.log(userGuess);


    var computerGuess = alaphabet[Math.floor(Math.random()*alaphabet.length)];
    console.log(computerGuess)


    if (userGuess == computerGuess) {
        wins + 1;
    } else {
        left = left - 1;
    }

    if (left == 0) {
        losses + 1;
        left = 10;
    } else {
        console.log(left)
    }



    var html= "<h1>The Psychic Game</h1>" +
    "<h3>Guess What Letter I'm Thinking Of</h3>" +
    "<h3>Wins: " + wins + "</h3>" +
    "<h3>Losses: " + losses + "</h3>" +
    "<h3>Guesses Left: " + left + "</h3>";
    // "<h3>Your Guesses So Far " + guesses + "</h3>";

    document.querySelector("#game").innerHTML = html;

}