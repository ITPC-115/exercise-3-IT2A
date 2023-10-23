/*

    Create a simple guessing game. Write a program that will generate a random number 
    and will log the generated random number. Then ask the user for their guess number 
    until they guessed it correctly. When they got it correctly log "Congratulations you got it right".

    Constraints: The generated random number must be between 1 and 100 only.

*/

const min = 1;
const max = 100;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(`Generated random number: ${randomNumber}`);

let userGuess;

while (true) {
  userGuess = parseInt(prompt(`Guess the number between ${min} and ${max}:`));

  if (userGuess === randomNumber) {
    console.log("Congratulations! You got it right.");
    break; 
  } else if (isNaN(userGuess) || userGuess < min || userGuess > max) {
    alert(`Please enter a valid number between ${min} and ${max}.`);
  } else {
    const hint = userGuess < randomNumber ? "higher" : "lower";
    alert(`Try again! The number is ${hint}.`);
  }
}
