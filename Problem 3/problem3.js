/*
    Complete the code. Assign the object student the following properties:
    name, yearLvl (uppercase), age (number type), subject. Make sure to log the object,
    and also log a somewhat an introduction with the student's name, age and year level.
    
    Sample Output:
    {name: 'Kim John Bautista', yearLvl: 'SECOND', age: 20, subjects: Array(2), introduce: ƒ}
    My name is Kim John Bautista, second year student and 20 years old.
*/

const student = new Object();
const studentName = window.prompt('Enter Your Name');
const yearLevel = window.prompt('Enter Your Year Level (First, Second, Third, Fourth)').toUpperCase();
const age = parseInt(window.prompt('Enter Age'));
const subjects = [{ name: 'ITCC-114', schedule: 'TTh' }, { name: 'ITPC-115', schedule: 'MWF' }];

student.name = studentName;
student.yearLvl = yearLevel;
student.age = age;
student.subjects = subjects;
student.introduce = function () {
  return My name is ${this.name},a ${this.yearLvl.toLowerCase()} year student, and I am ${this.age} years old.;
};

console.log(student);
console.log(student.introduce());

