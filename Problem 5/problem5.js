/*

    Create a simple guessing game. Write a program that will generate a random number 
    and will log the generated random number. Then ask the user for their guess number 
    until they guessed it correctly. When they got it correctly log "Congratulations you got it right".

    Constraints: The generated random number must be between 1 and 100 only.

*/



let quest = prompt("Enter a number:");
let num = Math.random() * 100;

console.log('Chosen number:', quest);
console.log('Random:', num.toFixed(0));


while (true) {

     
     if (quest > num) {
        quest = prompt("Enter a number:");
        
        console.log('Chosen number:', quest);
        console.log('Random:', num.toFixed(0));
    }
     if (quest < num) {
        quest = prompt("Enter a number:");
        
        console.log('Chosen number:', quest);
        console.log('Random:', num.toFixed(0));
    }
    else if(quest == num) {
        console.log("Congratulations you got it right");
        
    }
    
}

