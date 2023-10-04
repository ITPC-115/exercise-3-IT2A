/*
    Define an array that contains 10 objects which has the properties
    name, age, and sex. Iterate throughout the array and display each of their name, age, and sex (one object per line in console).

    Example:
    John 24 Male
    Marie 27 Female
    Lotty 22 Female
        -- make sure that name and sex are strings and age is a number when displayed
*/

const People = 
[
    {
        name: 'Yhl',
        age: 20,
        sex: 'Male',
    },

    {
        name: 'Kim',
        age: 24,
        sex: 'Male',
    },

    {
        name: 'Carl',
        age: 19,
        sex: 'Male',
    },

    {
        name: 'Tysh',
        age: 35,
        sex: 'Male',
    },

    {
        name: 'Jonna',
        age: 22,
        sex: 'Female',
    },

    {
        name: 'Raiden',
        age: 14,
        sex: 'Male',
    },

    {
        name: 'Kylie',
        age: 26,
        sex: 'Female',
    },

    {
        name: 'Shine',
        age: 18,
        sex: 'Female',
    },
    {
        name: 'Jaiden',
        age: 25,
        sex: 'Male',
    },

    {
        name: 'Alyah',
        age: 29,
        sex: 'Female',
    },

    {
        name: 'Zane',
        age: 20,
        sex: 'Female',
    },
]

for(let i = 0; i < People.length; i++)
{
    console.log(People[i].name, People[i].age, People[i].sex);
}
