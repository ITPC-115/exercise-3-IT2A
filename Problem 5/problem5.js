/*

    Create a simple guessing game. Write a program that will generate a random number 
    and will log the generated random number. Then ask the user for their guess number 
    until they guessed it correctly. When they got it correctly log "Congratulations you got it right".

    Constraints: The generated random number must be between 1 and 100 only.

*/

var x = Math.floor((Math.random() * 100)+1);
do{
    var answer = Number(window.prompt('Enter guessed number (1-100)'));
}while(answer != x);

if (answer = x){
    console.log("Congratulations you got it right");
}
