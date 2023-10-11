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
    {name: 'John', age: 24, gender: "Male"},
    {name: 'Mar', age: 22, gender: "Female"},
    {name: 'Lotty', age: 24, gender: "Female"},
    {name: 'Viv', age: 34, gender: "Female"},
    {name: 'Carl', age: 19, gender: "Male"},
    {name: 'Drea', age: 19, gender: "Female"},
    {name: 'Eya', age: 20, gender: "Female"},
    {name: 'Clyde', age: 25, gender: "Male"},
    {name: 'Juan', age: 16, gender: "Male"},
    {name: 'Johnny', age: 10, gender: "Male"},
];

for (let a = 0; a < people.length; a++) {
    let gc = people[a];
    console.log(gc.name + " " + gc.age + " " + gc.gender + " ");
}