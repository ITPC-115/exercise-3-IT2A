const number = (Math.floor(Math.random() * 100) + 1);

do{
    var guessNumber = Number(window.prompt('Guess the number'));
}while(guessNumber != number);

console.log('Congratulations you got it right');