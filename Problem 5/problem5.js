/*

    Create a simple guessing game. Write a program that will generate a random number 
    and will log the generated random number. Then ask the user for their guess number 
    until they guessed it correctly. When they got it correctly log "Congratulations you got it right".

    Constraints: The generated random number must be between 1 and 100 only.

*/
const randomNumber = Math.floor(Math.random() * 100) + 1;

function playGuessingGame() {
    let guess;
    
    do {
       
        guess = parseInt(prompt('Guess the number (between 1 and 100):'));

        if (isNaN(guess)) {
         
            alert('Please enter a valid number.');
        } else if (guess < 1 || guess > 100) {
           
            alert('Please enter a number between 1 and 100.');
        } else if (guess < randomNumber) {
            alert('Too low! Try again.');
        } else if (guess > randomNumber) {
            alert('Too high! Try again.');
        }
    } while (guess !== randomNumber);

    console.log('Congratulations! You got it right.');
}


console.log('Generated Random Number:', randomNumber);

playGuessingGame();
