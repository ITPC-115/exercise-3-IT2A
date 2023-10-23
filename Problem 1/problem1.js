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
  {name: 'John', age: 20, sex: 'Male'},
  {name: 'Michael', age: 20, sex: 'Male'},
  {name: 'Emily', age: 20, sex: 'Female'},
  {name: 'Sarah', age: 20, sex: 'Female'},
  {name: 'David', age: 20, sex: 'Male'},
  {name: 'Daniel', age: 20, sex: 'Male'},
  {name: 'Jessica', age: 20, sex: 'Female'},
  {name: 'Matthew', age: 20, sex: 'Male'},
  {name: 'Olivia', age: 20, sex: 'Female'},
  {name: 'Sophia', age: 20, sex: 'Female'},
];

for (let i = 0; i < people.length; i++) {
  console.log(`${people[i].name} ${people[i].age} ${people[i].sex}`);
}
