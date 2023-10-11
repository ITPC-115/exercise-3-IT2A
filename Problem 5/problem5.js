/*

    Create a simple guessing game. Write a program that will generate a random number 
    and will log the generated random number. Then ask the user for their guess number 
    until they guessed it correctly. When they got it correctly log "Congratulations you got it right".

    Constraints: The generated random number must be between 1 and 100 only.

*/
const randomNumber = Math.floor(Math.random() * 100) + 1;

console.log(`Generated Random Number: ${randomNumber}`);

let guessedCorrectly = false;
let attempts = 0;

while (!guessedCorrectly) {
    const userGuess = parseInt(prompt('Guess the number (between 1 and 100):'));

    attempts++;

    if (userGuess === randomNumber) {
        guessedCorrectly = true;
        console.log(`Congratulations! You got it right in ${attempts} attempts.`);
    } else if (userGuess < randomNumber) {
        console.log('Too low! try again');
    } else {
        console.log('Too high! try again');
    }
}