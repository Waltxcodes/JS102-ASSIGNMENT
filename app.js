document.addEventListener("DOMContentLoaded", () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 3;

  const guessInput = document.getElementById("guessInput");
  const submitGuessButton = document.getElementById("submitGuess");
  const feedback = document.getElementById("feedback");
  const chances = document.getElementById("chances");

  submitGuessButton.addEventListener("click", () => {
      const userGuess = parseInt(guessInput.value);

      if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
          feedback.textContent = "Please enter a valid number between 1 and 100.";
          return;
      }

      attempts--;
      if (userGuess === randomNumber) {
          feedback.textContent = "Congratulations! You guessed the number!";
          feedback.style.color = "green";
          submitGuessButton.disabled = true;
      } else if (attempts === 0) {
          feedback.textContent = `Sorry, you've run out of attempts. The number was ${randomNumber}.`;
          feedback.style.color = "red";
          submitGuessButton.disabled = true;
      } else {
          if (userGuess < randomNumber) {
              feedback.textContent = "Too low!";
          } else {
              feedback.textContent = "Too high!";
          }
          feedback.style.color = "orange";
      }

      chances.textContent = `Chances left: ${attempts}`;
  });
});