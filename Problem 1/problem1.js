const people = [
    { name: "John", age: 24, sex: "Male" },
    { name: "Marie", age: 27, sex: "Female" },
    { name: "Lotty", age: 22, sex: "Female" },
    { name: "Hina", age: 16, sex: "Female" },
    { name: "Kenny", age: 20, sex: "Male" },
    { name: "Loppy", age: 21, sex: "Female" },
    { name: "Sam", age: 25, sex: "Male" },
    { name: "Danny", age: 23, sex: "Male" },
    { name: "Keller", age: 29, sex: "Female" },
    { name: "Hans", age: 28, sex: "Male" },
];

people.forEach(person => {
    console.log(`${person.name} ${person.age} ${person.sex}`);
});
