const student = new Object();
const studentName = window.prompt('Enter Your Name');
const yearLevel = window.prompt('Enter Your Year Level (First, Second, Third, Fourth)').toUpperCase();
const age = Number(window.prompt('Enter Age'));
const subjects = [{ name: 'RE112', schedule: 'MWF' }, { name: 'SOSC143', schedule: 'TTh' }];

student.name = studentName;
student.yearLvl = yearLevel;
student.age = age;
student.subjects = subjects;

student.introduce = function () {
    console.log(`My name is ${this.name}, ${this.yearLvl.toLowerCase()} year student, and ${this.age} years old.`);
};

console.log(student);
student.introduce();
