/*
    Define an array that contains 10 objects which has the properties
    name, age, and sex. Iterate throughout the array and display each of their name, age, and sex (one object per line in console).

    Example:
    John 24 Male
    Marie 27 Female
    Lotty 22 Female
        -- make sure that name and sex are strings and age is a number when displayed
*/
const PersonArray = [
    {
        name: 'Tyshaun',
        age: 19,
        sex: 'Male',
    },
    {
        name: 'Ainz',
        age: 300,
        sex: 'Male',
    },
    {
        name: 'Cherry',
        age: 56,
        sex: 'Female',
    },
    {
        name: 'Marcos',
        age: 19,
        sex: 'Male',
    },
    {
        name: 'Yhl',
        age: 36,
        sex: 'Male',
    },
    {
        name: 'Pearl',
        age: 19,
        sex: 'Male',
    },
    {
        name: 'Sylas',
        age: 19,
        sex: 'Male',
    },
    {
        name: 'Jane',
        age: 19,
        sex: 'Female',
    },
    {
        name: 'Shaun',
        age: 19,
        sex: 'Male',
    },
    {
        name: 'Darla',
        age: 19,
        sex: 'Female',
    }

]
for(let i = 0; i <PersonArray.length; i++){
    console.log(PersonArray[i].name,PersonArray[i].age,PersonArray[i].sex);
}
