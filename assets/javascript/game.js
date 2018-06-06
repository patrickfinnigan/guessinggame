var alaphabet = "abcdefghijklmnopqrstuvwxyz";
var wins = 0;
var losses = 0;
var left = 10;
var guesses = ''

var computerGuess = alaphabet[Math.floor(Math.random() * alaphabet.length)];
console.log(computerGuess)

document.onkeyup = function (event) {
    var userguess = event.key;
    if (event.keyCode >= 65 && event.keyCode <= 90 && event.shiftKey === false) {
      console.log("true")
    } else {
        alert("Please Pick A Letter!")
    }


    if (userguess == computerGuess) {
        wins += 1;
        alert("You Win!")
        computerGuess = alaphabet[Math.floor(Math.random() * alaphabet.length)];
        console.log(computerGuess)
        left = 10;
        guesses = ''
    } else {
        left = left - 1;
        guesses += userguess + ' '
    }

    if (left == 0) {
        alert("Game Over")
        computerGuess = alaphabet[Math.floor(Math.random() * alaphabet.length)];
        console.log(computerGuess)
        losses += 1;
        left = 10;
        guesses = ''
    } else {
        console.log(left)
    }



    var html = "<h1>The Psychic Game</h1>" +
        "<h3>Guess What Letter I'm Thinking Of</h3>" +
        "<h3>Wins: " + wins + "</h3>" +
        "<h3>Losses: " + losses + "</h3>" +
        "<h3>Guesses Left: " + left + "</h3>" +
        "<h3>Your Guesses So Far: " + guesses + "</h3>";

    document.querySelector("#game").innerHTML = html;

}