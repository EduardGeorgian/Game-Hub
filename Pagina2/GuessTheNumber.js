function startGame() {
  // Get the minimum and maximum numbers from the input fields
  var min = parseInt(document.getElementById("min").value);
  var max = parseInt(document.getElementById("max").value);

  // Generate a random number between the minimum and maximum values
  var answer = Math.floor(Math.random() * (max - min + 1)) + min;

  // Prompt the user to guess the number
  // var guess = parseInt(prompt("Guess a number between " + min + " and " + max));

  // Get the player's guess from the input field
  var playerGuess = parseInt(document.getElementById("guess").value);

  // Check if the player's guess is correct and display a message
  if (playerGuess === answer) {
    document.getElementById("game").innerHTML = "Congratulations! You guessed the correct number.";
  } else {
    document.getElementById("game").innerHTML = "Sorry, the correct number was " + answer + ".";
  }
}
