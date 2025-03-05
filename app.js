let targetNumber = Math.floor(Math.random() * 20) + 1;
let attempts = 0;

document.getElementById("submitGuess").addEventListener("click", function () {
  let userGuess = document.getElementById("guessInput").value;

  if (userGuess.toLowerCase() === "q") {
    document.getElementById("message").textContent =
      "You chose to quit the game. Goodbye!";
    return;
  }

  userGuess = parseInt(userGuess);
  attempts++;

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 20) {
    document.getElementById("message").textContent =
      "Please enter a valid number between 1 and 20.";
  } else if (userGuess < targetNumber) {
    document.getElementById("message").textContent = "Too low! Try again.";
  } else if (userGuess > targetNumber) {
    document.getElementById("message").textContent = "Too high! Try again.";
  } else {
    document.getElementById(
      "message"
    ).textContent = `Congratulations! You guessed it in ${attempts} attempts.`;

    if (attempts < 10) {
      document.getElementById("message").textContent +=
        " Either you know the secret or you got lucky!";
    } else if (attempts === 10) {
      document.getElementById("message").textContent +=
        " Ahah! You know the secret!";
    } else {
      document.getElementById("message").textContent +=
        " You should be able to do better!";
    }

    document.getElementById("submitGuess").style.display = "none";
    document.getElementById("playAgain").style.display = "inline-block";
  }
});

document.getElementById("playAgain").addEventListener("click", function () {
  targetNumber = Math.floor(Math.random() * 20) + 1;
  attempts = 0;
  document.getElementById("message").textContent = "";
  document.getElementById("guessInput").value = "";
  document.getElementById("submitGuess").style.display = "inline-block";
  document.getElementById("playAgain").style.display = "none";
});
