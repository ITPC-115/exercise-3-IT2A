const product = {
    name: "M1911",
    brand: "Colt",
    price: 999.99,
    color: "Silver with Oak grip",
    displayProperties: function () {
        console.log(`Name: ${this.name}`);
        console.log(`Brand: ${this.brand}`);
        console.log(`Price: $${this.price}`);
        console.log(`Color: ${this.color}`);
    }
};

product.displayProperties();
