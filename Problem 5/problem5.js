/*

    Create a simple guessing game. Write a program that will generate a random number 
    and will log the generated random number. Then ask the user for their guess number 
    until they guessed it correctly. When they got it correctly log "Congratulations you got it right".

    Constraints: The generated random number must be between 1 and 100 only.

*/
let mission = prompt('Enter a number:');
let n = Math.random() * 10;

console.log('Chosen number:' , mission);
console.log('Random:' , n.toFixed(0));
if (mission == n){
    console.log('Congratulations you got it right');
}