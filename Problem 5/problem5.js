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
        console.log('Too low! Try again.');
    } else {
        console.log('Too high! Try again.');
    }
}
