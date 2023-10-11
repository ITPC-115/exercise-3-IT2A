/*
    Define an array that contains 10 objects which has the properties
    name, age, and sex. Iterate throughout the array and display each of their name, age, and sex (one object per line in console).

    Example:
    John 24 Male
    Marie 27 Female
    Lotty 22 Female
        -- make sure that name and sex are strings and age is a number when displayed
*/
const user = [
    {
        name : 'John', age: 24, sex: 'Male',
    },
    {
        name : 'Marie', age: 27, sex: 'Female',
    },
    {
        name : 'Lotty', age: 22, sex: 'Female',
    },
]
for (let i = 0; i < user.length; i++){
    const person = user[i];
    console.log(person.name + ' ' + person.age + ' ' + person.sex);
}