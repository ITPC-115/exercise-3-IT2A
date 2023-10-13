/*
    Define an array that contains 10 objects which has the properties
    name, age, and sex. Iterate throughout the array and display each of their name, age, and sex (one object per line in console).

    Example:
    John 24 Male
    Marie 27 Female
    Lotty 22 Female
        -- make sure that name and sex are strings and age is a number when displayed
*/
let person = [
     {name: 'Shandy', age: 20, sex: 'Female'},
     {name: 'Karla', age: 21, sex: 'Female'},
     {name: 'Andrea', age: 21, sex: 'Female'},
     {name: 'Khryz', age: 23, sex: 'Male'},
     {name: 'Kyle', age: 22, sex: 'Male'},
     {name: 'Tyshaun', age: 21, sex: 'Male'},
     {name: 'Yhl', age: 21, sex: 'Male'},
     {name: 'Rayveen', age: 23, sex: 'Male'},
     {name: 'Crizle', age: 22, sex: 'Female'},
     {name: 'Niel', age: 20, sex: 'Male'}];

for(let i =0; i < 10; i++)
{
    console.log(person[i]);
}
