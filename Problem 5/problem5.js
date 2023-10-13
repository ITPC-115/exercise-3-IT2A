/*

    Create a simple guessing game. Write a program that will generate a random number 
    and will log the generated random number. Then ask the user for their guess number 
    until they guessed it correctly. When they got it correctly log "Congratulations you got it right".

    Constraints: The generated random number must be between 1 and 100 only.

*/


let num = Math.floor(Math.random() * 100)+1;

do {
    var what = prompt("Enter a number: ")
} while (what != num);

if (what == num) {
    console.log("Congratulations you got it right");
}

