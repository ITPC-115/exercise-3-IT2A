/*
    Define an array that contains 10 objects which has the properties
    name, age, and sex. Iterate throughout the array and display each of their name, age, and sex (one object per line in console).

    Example:
    John 24 Male
    Marie 27 Female
    Lotty 22 Female
        -- make sure that name and sex are strings and age is a number when displayed
*/
let people = [
    {name: "John", age: 24, sex: "Male"},
    {name: "Karla", age: 27, sex: "Female"},
    {name: "Shandy", age: 22, sex: "Female"},
    {name: "Kyle", age: 30, sex: "Male"},
    {name: "Ervon", age: 19, sex: "Male"},
    {name: "David", age: 45, sex: "Male"},
    {name: "Andrea", age: 33, sex: "Female"},
    {name: "Carl", age: 28, sex: "Male"},
    {name: "Ryett", age: 31, sex: "Male"},
    {name: "Arvee", age: 26, sex: "Male"}
  ];
  
  for (let k = 0; k <10; k++) {
    console.log(people[k]);
  }
