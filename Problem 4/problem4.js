const keyValue = 'age';

const name = window.prompt('Enter your name');
let age = Number(window.prompt('Enter your age'));

const user = {
    name,
    age,
};

for (let year = 2024; year <= 2033; year++) {
    console.log(`${year} '${user.name}' ${user.age}`);
    user.age++;
}

alert(`You are ${user.age} years old after 10 years`);
