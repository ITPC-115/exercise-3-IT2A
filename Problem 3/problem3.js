/*
    Complete the code. Assign the object student the following properties:
    name, yearLvl (uppercase), age (number type), subject. Make sure to log the object,
    and also log a somewhat an introduction with the student's name, age and year level.
    
    Sample Output:
    {name: 'Kim John Bautista', yearLvl: 'SECOND', age: 20, subjects: Array(2), introduce: ƒ}
    My name is Kim John Bautista, second year student and 20 years old.
*/

const studentName = 'Errol Anthony A. De Pedro';
const yearLevel = 'SECOND';
const age = 20;
const subjects = ['ITCC114','ITCC115'];

const student = new Object();
student.name = studentName;
student.yearLvl = yearLevel.toUpperCase();
student.age = parseInt(age);
student.subjects = subjects;

student.introduce = function () {
    return `My name is ${this.name}, ${this.yearLvl} year student and ${this.age} years old.`;
  };
  
console.log(student);
  
const introduction = student.introduce();
console.log(introduction);





