/*

    Create a simple guessing game. Write a program that will generate a random number 
    and will log the generated random number. Then ask the user for their guess number 
    until they guessed it correctly. When they got it correctly log "Congratulations you got it right".

    Constraints: The generated random number must be between 1 and 100 only.

*/

const randomN = Math.floor(Math.random() * 100) + 1;

console.log(`Generated random number: ${randomN}`);

function playGuessingG()
{
    while (true) {
        const uGuess = parseInt(prompt('Guess the number (between 1 and 100):'));

        if (isNaN(uGuess) || uGuess < 1 || uGuess > 100)
        { 
            alert ("Enter a valid number between 1 to 100");
        } else if (uGuess === randomN)
         {
            console.log('Congratulations you got it right!');
            break;
         } else {
            alert ('Wrong guess. Try again');
         }
    }
}
playGuessingG();
