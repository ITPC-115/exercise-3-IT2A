/*
    Define an array that contains 10 objects which has the properties
    name, age, and sex. Iterate throughout the array and display each of their name, age, and sex (one object per line in console).

    Example:
    John 24 Male
    Marie 27 Female
    Lotty 22 Female
        -- make sure that name and sex are strings and age is a number when displayed
*/



let Person1 = {
    name: ['Khryz', 'Kyle', 'Karla', 'Tyshaun', 'Yhl', 'Rayveen', 'Crizle', 'Niel', 'Cess', 'Shandy'],
    age: [20, 21, 23, 24, 22, 25, 23, 24, 26, 19],
    sex: ['Male', 'Male', 'Female', 'Male', 'Male', 'Male', 'Female', 'Male', 'Female', 'Female']
}

for(let i =0; i < Person1.age.length; i++)
{
    console.log(Person1.name[i], Person1.age[i], Person1.sex[i]);
}
