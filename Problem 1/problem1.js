/*
    Define an array that contains 10 objects which has the properties
    name, age, and sex. Iterate throughout the array and display each of their name, age, and sex (one object per line in console).

    Example:
    John 24 Male
    Marie 27 Female
    Lotty 22 Female
        -- make sure that name and sex are strings and age is a number when displayed
*/

let People = [
    {name:'Jison', age: 24, sex:'Male'},
    {name:'Karla', age: 21, sex:'Female'},
    {name:'Khryz', age: 20, sex:'Male'},
    {name:'Kyle', age: 20, sex:'Male'},
    {name:'Popoy', age: 25, sex:'Male'},
    {name:'Nelson', age: 22, sex:'Male'},
    {name:'Ipsum', age: 26, sex:'Female'},
    {name:'Germa', age: 27, sex:'Female'},
    {name:'Galan', age: 28, sex:'Male'},
    {name:'Arjon', age: 20, sex:'Female'},
]

People.forEach(person => {
    console.log(person.name, Number(person.age), person.sex);
});
