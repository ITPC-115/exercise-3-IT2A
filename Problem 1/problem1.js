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
    name: ['Jer', 'Tin', 'Lyk', 'Tys', 'Lin', 'Ray', 'Lot', 'Ray', 'Ces', 'Sha'],
    age: [19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
    sex: ['Male', 'Male', 'Female', 'Male', 'Male', 'Male', 'Female', 'Male', 'Female', 'Female']
}
for(let i =0; i < 10; i++)
{
    console.log(Person1.name[i], Person1.age[i], Person1.sex[i]);
}

