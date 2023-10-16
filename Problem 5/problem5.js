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

