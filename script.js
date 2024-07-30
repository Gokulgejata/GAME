var guessnumber = document.getElementById("guessnumber");
var result = document.getElementById("result");
var score = document.getElementById("score");
var randomnumber;
var totalscore;

function initializeGame() {
    randomnumber = Math.floor(Math.random() * 10) + 1;
    totalscore = 10;
    score.textContent = "Score: " + totalscore;
    result.textContent = "Your guess is correct/wrong";
    guessnumber.disabled = false;
    guessnumber.value = ""; // Clear the input field
}

function guessing() {
    var userGuess = Number(guessnumber.value);

    if (randomnumber === userGuess) {
        result.textContent = "Your guess is correct!";
        alert("YOU WON");
        initializeGame();
    } else {
        result.textContent = "Your guess is wrong.";
        alert("TRY AGAIN");
        totalscore -= 1;
        score.textContent = "Score: " + totalscore;

        if (totalscore <= 0) {
            result.textContent = "Game Over!";
            guessnumber.disabled = true;
        }
    }
}

function resetGame() {
    initializeGame();
}

window.onload = initializeGame;
