/*
    Define an array that contains 10 objects which has the properties
    name, age, and sex. Iterate throughout the array and display each of their name, age, and sex (one object per line in console).

    Example:
    John 24 Male
    Marie 27 Female
    Lotty 22 Female
        -- make sure that name and sex are strings and age is a number when displayed
*/
let kulto = [
    {name: 'Andrea' , age: 19 , sex: 'Female'},
    {name: 'Carl' , age: 19 , sex: 'Male'},
    {name: 'John' , age: 24 , sex: 'Male'},
    {name: 'Marie' , age: 27 , sex: 'Female'},
    {name: 'Lotty' , age: 22 , sex: 'Female'},
    {name: 'Robert' , age: 28 , sex: 'Male'},
    {name: 'Paul' , age: 36 , sex: 'Male'},
    {name: 'Steph' , age: 30 , sex: 'Male'},
    {name: 'Janet' , age: 45 , sex: 'Female'},
    {name: 'Cherry' , age: 25 , sex: 'Female'},
 ];

 kulto.forEach(function(kulto){
    console.log(kulto.name + " " + kulto.age + " " + kulto.sex);
 });
