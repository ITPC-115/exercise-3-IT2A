let phone ={
    name: 'Smartphone',
    brand:'Vivo',
    price: 5999.00,
    color:'Gray',
  
    logeName: function() {
    console.log(this.name);
    console.log(this.brand);
    console.log(this.price);
    console.log(this.color);
}
}

phone.logeName();
