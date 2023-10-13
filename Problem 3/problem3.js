/*
    Complete the code. Assign the object student the following properties:
    name, yearLvl (uppercase), age (number type), subject. Make sure to log the object,
    and also log a somewhat an introduction with the student's name, age and year level.
    
    Sample Output:
    {name: 'Kim John Bautista', yearLvl: 'SECOND', age: 20, subjects: Array(2), introduce: ƒ}
    My name is Kim John Bautista, second year student and 20 years old.
*/

const student = new Object();
const studentName =window.prompt('Enter Your Name');
const yearLevel = window.prompt('Enter Your Year Level (First, Second, Third, Fourth)');
const age = window.prompt('Enter Age');
const subjects = [{name: 'RE112', schedule: 'MWF'},{name:'SOSC143', schedule:'TTh'}];

let intro;

student.name = studentName;
student.yearlvl = yearLevel;
student.age = age;
student.subjects = subjects;
student.intro = function() {
    console.log("My name is " + this.name +", " + this.yearlvl + " year student and " + this.age + " years old.")

}

console.log("{name : " + studentName + ", yearLvl: " + yearLevel + ", age: " + age + ", subjects: Array(" + subjects.length + "), introduce f}");
document.write("My name is " + studentName +", " + yearLevel + " year student and " + age + " years old.");
student.intro();


