/*
    Define an array that contains 10 objects which has the properties
    name, age, and sex. Iterate throughout the array and display each of their name, age, and sex (one object per line in console).

    Example:
    John 24 Male
    Marie 27 Female
    Lotty 22 Female
        -- make sure that name and sex are strings and age is a number when displayed
*/
var people = [
    { name: "John K. Lhung", age: 24, sex: "Male" },
    { name: "Marie Chan", age: 27, sex: "Female" },
    { name: "Lotty Chu", age: 22, sex: "Female" },
    { name: "Ashe Hull", age: 56, sex: "Female"},
    { name: "Ben O. Verbich", age: 19 , sex: "Male" },
    { name: "Hugh G. Rection", age: 23, sex: "Male" },
    { name: "Robyn Banks", age: 19, sex: "Female" },
    { name: "Chris P. Bacon", age: 20, sex: "Male" },
    { name: "Crystal Shanda Leer", age: 21, sex: "Female" },
    { name: "Ben R. Over", age: 28, sex: "Male" },

    
  ];
  

  for (var i = 0; i < people.length; i++) {
    var person = people[i];
    console.log(person.name + " " + person.age + " " + person.sex);
  }
