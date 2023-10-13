/*

    Create a simple guessing game. Write a program that will generate a random number 
    and will log the generated random number. Then ask the user for their guess number 
    until they guessed it correctly. When they got it correctly log "Congratulations you got it right".

    Constraints: The generated random number must be between 1 and 100 only.

*/
const n = Math.floor(Math.random() * 10) + 1;

do{
    var guess = window.prompt("Enter a number");
}while(guess != n);

if(guess == n){
    console.log("Congratulations you got it right");
}
