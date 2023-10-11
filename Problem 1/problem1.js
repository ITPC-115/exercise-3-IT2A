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
    { name: "John Nguyen", age: 24, sex: "Male" },
    { name: "Marie Tan", age: 27, sex: "Female" },
    { name: "Lotty Yu", age: 22, sex: "Female" },
    { name: "Xi Jin", age: 56, sex: "Male"},
    { name: "Tiu Di Si", age: 19 , sex: "Male" },
    { name: "Bruce Wang", age: 23, sex: "Male" },
    { name: "Phuc Nao", age: 19, sex: "Female" },
    { name: "Sum Ting Wong", age: 20, sex: "Female" },
    { name: "Ba Ding Oh", age: 21, sex: "Female" },
    { name: "Ho Lee Shi T.", age: 28, sex: "Male" },

    
  ];
  

  for (var i = 0; i < people.length; i++) {
    var person = people[i];
    console.log(person.name + " " + person.age + " " + person.sex);
  }

  