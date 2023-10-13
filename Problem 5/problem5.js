/*

    Create a simple guessing game. Write a program that will generate a random number 
    and will log the generated random number. Then ask the user for their guess number 
    until they guessed it correctly. When they got it correctly log "Congratulations you got it right".

    Constraints: The generated random number must be between 1 and 100 only.

*/
const randomNum = Math.floor(Math.random() * 100) + 1;
console.log("Randomized number: " + randomNum);

let guess = false;
let attempts = 0;

while (!guess) {
    const userGuess = window.prompt("Guess the number (between 1 and 100): ");
    attempts++;

    if(userGuess == randomNum) {
        alert(`Congratulations you got it right.`);
        console.log("attempts made: " + attempts);
        break;
    } else if(userGuess > randomNum) {
        alert(`Too high, try again`);
    } else if(userGuess < randomNum)
        alert(`Too low, try agin`);
}