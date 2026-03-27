let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");

function checkGuess() {
    const userGuess = Number(document.getElementById("guessInput").value);

    if (!userGuess || userGuess < 1 || userGuess > 100) {
        message.innerText = "Enter a number between 1 and 100!";
        return;
    }

    attempts++;

    if (userGuess === randomNumber) {
        message.innerText = "🎉 Correct Guess!";
        attemptsText.innerText = `Total Attempts: ${attempts}`;
    } 
    else if (userGuess > randomNumber) {
        message.innerText = "Too High ⬆️";
        attemptsText.innerText = `Attempts: ${attempts}`;
    } 
    else {
        message.innerText = "Too Low ⬇️";
        attemptsText.innerText = `Attempts: ${attempts}`;
    }
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    document.getElementById("guessInput").value = "";
    message.innerText = "";
    attemptsText.innerText = "";
}