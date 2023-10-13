/*

    Create a simple guessing game. Write a program that will generate a random number 
    and will log the generated random number. Then ask the user for their guess number 
    until they guessed it correctly. When they got it correctly log "Congratulations you got it right".

    Constraints: The generated random number must be between 1 and 100 only.

*/

const min = 1;
const max = 100;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

function startGuessingGame() {
  let attempts = 0;

  function getUserGuess() {
    const userGuess = parseInt(prompt("Guess a number between 1 and 100:"));

    if (isNaN(userGuess) || userGuess < min || userGuess > max) {
      getUserGuess();
    } else {
      attempts++;

      if (userGuess === randomNum) {
        alert(`Congratulations, you got it right in ${attempts} attempts! The number was ${randomNum}.`);
      } else if (userGuess < randomNum) {
        alert("Try a higher number.");
        getUserGuess();
      } else {
        alert("Try a lower number.");
        getUserGuess();
      }
    }
  }

  getUserGuess();
}

startGuessingGame();
