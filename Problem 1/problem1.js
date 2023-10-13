/*
    Define an array that contains 10 objects which has the properties
    name, age, and sex. Iterate throughout the array and display each of their name, age, and sex (one object per line in console).

    Example:
    John 24 Male
    Marie 27 Female
    Lotty 22 Female
        -- make sure that name and sex are strings and age is a number when displayed
*/
const hoomans = [
    { name: "John", age: 24, sex: "Male" },
    { name: "Marie", age: 27, sex: "Female" },
    { name: "Lotty", age: 22, sex: "Female" },
    { name: "Hitler", age: 56, sex: "Male"},
    { name: "Jotaro", age: 40, sex: "Male"},
    { name: "Princess", age: 19, sex: "Female"},
    { name: "Oogway", age: 90, sex: "Male"},
    { name: "Roe", age: 20, sex: "Male"},
    { name: "Dryxe", age: 19, sex: "Male"},
    { name: "Jesha", age: 20, sex: "Female"},
];

for (let peeps of hoomans) {
    console.log(`${peeps.name} ${Number(peeps.age)} ${peeps.sex}`);
}
