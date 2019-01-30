//let greetings = 10 + 15;
//alert(greetings);

// Data Types: 
// string
// boolean
// number
// null
// undefined
// Object
// Symbol

//let name = prompt('Enter your name');
//let msg = 'Hello, ' + name;
//alert(msg);

const age = parseInt(prompt('Enter your age'));
//let age = Number(prompt('Enter your age'));
//let age = parseFloat(prompt('Enter your age'));
// Зробити змінну, яка буде містити вік + 1
// Вивести результат на екран

//let newAge = age + 1;
alert('You are ' + checkAge(age));

function add(a, b, c) {
    const res = a + b + c;
    return res;
}

const total = add(2, 2, 2);
alert(total);

function checkAge(age) {
    if (age <= 18) {
        return 'child';
    } else {
        return 'adult';
    }
}

// Добути квадратний корінь
// Math.sqrt(81)