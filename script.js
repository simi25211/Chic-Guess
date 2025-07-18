let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");
const restartBtn = document.getElementById("restartBtn");

guessBtn.addEventListener("click", () => {
    const guess = Number(guessInput.value);
    attempts++;

    if (guess < 1 || guess > 100) {
        message.textContent = "❗ Enter a number between 1 and 100.";
    } else if (guess === secretNumber) {
        message.textContent = `🎉 Correct! The number was ${secretNumber}`;
        guessBtn.disabled = true;
        restartBtn.style.display = "inline-block";
    } else if (guess < secretNumber) {
        message.textContent = "📉 Too low! Try again.";
    } else {
        message.textContent = "📈 Too high! Try again.";
    }

    attemptsText.textContent = `Attempts: ${attempts}`;
    guessInput.value = "";
});

restartBtn.addEventListener("click", () => {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    message.textContent = "";
    attemptsText.textContent = "Attempts: 0";
    guessBtn.disabled = false;
    restartBtn.style.display = "none";
});
