/*

    Create a simple guessing game. Write a program that will generate a random number 
    and will log the generated random number. Then ask the user for their guess number 
    until they guessed it correctly. When they got it correctly log "Congratulations you got it right".

    Constraints: The generated random number must be between 1 and 100 only.

*/

function guessingGame() {
  const min = 1;
  const max = 100;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  let attempts = 0;

  console.log(`A random number between ${min} and ${max} has been generated. Try to guess it!`);

  while (true) {
    const userGuess = parseInt(prompt("Enter your guess:"));

    if (isNaN(userGuess)) {
      alert("Please enter a valid number.");
    } else {
      attempts++;

      if (userGuess < min || userGuess > max) {
        alert(`Please guess a number between ${min} and ${max}.`);
      } else if (userGuess < randomNumber) {
        alert("Try a higher number.");
      } else if (userGuess > randomNumber) {
        alert("Try a lower number.");
      } else {
        alert(`Congratulations! You got it right in ${attempts} attempts.`);
        break;
      }
    }
  }
}

guessingGame();
