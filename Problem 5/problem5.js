/*

    Create a simple guessing game. Write a program that will generate a random number 
    and will log the generated random number. Then ask the user for their guess number 
    until they guessed it correctly. When they got it correctly log "Congratulations you got it right".

    Constraints: The generated random number must be between 1 and 100 only.

*/


const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(`Generated random number: ${randomNumber}`);

let guessNumber = parseInt(prompt("Guess a number between 1 and 100:"));

while (guessNumber !== randomNumber) {
    if (guessNumber < randomNumber) {
        guessNumber = parseInt(prompt("Too low! Guess again:"));
    } else {
        guessNumber = parseInt(prompt("Too high! Guess again:"));
    }
}
console.log("Congratulations you got it right!");
