/*
    Define an object with the properties name, brand, price, and color,
    and also a method to display the properties.
    make sure that when the code is run in the browser it will log the
    properties of the object. -- Make sure to incorprate the keyword this in here.
*/


const Food = {
name: "Oreo Strawberry",
brand: "Oreo",
price: 50,
color: "Pink",
logName: function(){
console.log(this.name);
console.log(this.brand);
console.log(this.price);
console.log(this.color);
}
}
Food.logName();