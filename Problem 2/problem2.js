/*
    Define an object with the properties name, brand, price, and color,
    and also a method to display the properties.
    make sure that when the code is run in the browser it will log the
    properties of the object. -- Make sure to incorprate the keyword this in here.
*/


// Define an object with properties and a method
var product = {
    name: "Laptop",
    brand: "HP",
    price: 799.99,
    color: "Silver",
    displayProperties: function() {
      console.log("Name: " + this.name);
      console.log("Brand: " + this.brand);
      console.log("Price: $" + this.price.toFixed(2)); // Format price as a decimal with 2 decimal places
      console.log("Color: " + this.color);
    }
  };
  
  // Call the method to display the properties
  product.displayProperties();
