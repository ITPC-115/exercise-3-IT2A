/*
    Define an array that contains 10 objects which has the properties
    name, age, and sex. Iterate throughout the array and display each of their name, age, and sex (one object per line in console).

    Example:
    John 24 Male
    Marie 27 Female
    Lotty 22 Female
        -- make sure that name and sex are strings and age is a number when displayed
*/
const people = [
    { name: "John", age: 24, sex: "Male" },
    { name: "Marie", age: 27, sex: "Female" },
    { name: "Lotty", age: 22, sex: "Female" },
    { name: "Aldos", age: 56, sex: "Male" },
    { name: "Loyla", age: 19, sex: "Female" },
    { name: "Zilong", age: 23, sex: "Male" },
    { name: "Miya", age: 19, sex: "Female" },
    { name: "Liljohn", age: 20, sex: "Male" },
    { name: "Khalifa", age: 21, sex: "Female" },
    { name: "Lexy", age: 28, sex: "Female" },
   
];

for (let i = 0; i < people.length; i++) {
    const person = people[i];
    console.log(`${person.name} ${person.age} ${person.sex}`);
}

