/*
    Define an object with the properties name, brand, price, and color,
    and also a method to display the properties.
    make sure that when the code is run in the browser it will log the
    properties of the object. -- Make sure to incorprate the keyword this in here.
*/

const item = 
{
    name: 'iPhone 12 Pro Max',
    brand: 'Apple',
    price: 67000,
    color: 'Gold',
  
    
    displayProperties() {
      console.log(`Name: ${this.name}`);
      console.log(`Brand: ${this.brand}`);
      console.log(`Price: ${this.price}`);
      console.log(`Color: ${this.color}`);
    },
  };

  item.displayProperties();
  
