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
    { name: 'John', age: 24, sex: 'Male' },
    { name: 'Marie', age: 27, sex: 'Female' },
    { name: 'Lotty', age: 22, sex: 'Female' },
    { name: 'Luff', age: 28, sex: 'Male' },
    { name: 'Brandy', age: 26, sex: 'Female' },
    { name: 'Charlotte', age: 25, sex: 'Female' },
    { name: 'Angel', age: 21, sex: 'Female' },
    { name: 'Lucy', age: 29, sex: 'Female' },
    { name: 'Zoro', age: 300, sex: 'Male' },
    { name: 'Goku', age: 400, sex: 'Male' },
];

for (const person of people) {
    console.log(`${person.name} ${person.age} ${person.sex}`);
}
