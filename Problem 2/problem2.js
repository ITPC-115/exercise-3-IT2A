/*
    Define an object with the properties name, brand, price, and color,
    and also a method to display the properties.
    make sure that when the code is run in the browser it will log the
    properties of the object. -- Make sure to incorprate the keyword this in here.
*/
let prop ={
    name: 'iPhone 15',
    brand:'Apple',
    price: 62990.00,
    color:'Purple',
  
    logeName: function() {
    console.log(this.name);
    console.log(this.brand);
    console.log(this.price);
    console.log(this.color);
}
}
prop.logeName();
