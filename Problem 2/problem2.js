/*
    Define an object with the properties name, brand, price, and color,
    and also a method to display the properties.
    make sure that when the code is run in the browser it will log the
    properties of the object. -- Make sure to incorprate the keyword this in here.
*/
const phone = {
    name: 'iPhone 15', // Changed name to iPhone 15
    brand: 'Apple',
    price: 126000, // Changed price to 126,000
    color: 'White',
    logProperties: function(){
        console.log(this.name);
        console.log(this.brand);
        console.log(this.price);
        console.log(this.color);
    }
}
phone.logProperties();


