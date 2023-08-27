for (let i = 1; i < 10; i++) {
    console.log(i);
}

let num = 1;
while (num < 10) {
    console.log(num);
    num ++;
}


let num1 = 1;
let countE = 0;
while (num1 < 10) {
    if (num1 % 2 === 0) countE++;
    num1 ++;
}
console.log(countE);

let number = Math.floor(Math.random() * 10) + 1;
let randomNumber = Math.floor(Math.random() * 10) +1;
let attempts = 1;

while (number !== randomNumber) {

    randomNumber = Math.floor(Math.random() * 10) +1;
    attempts++;
}
console.log(`The random number is ${randomNumber} its take ${attempts}`);

// Write a program that generates a random number between 1 to 50 (both inclusive)
// Continue generating the number till you get a random number divisible 10

let randomNumber1 = Math.floor(Math.random() * 50) + 1;
let attempts1 = 1;
while (randomNumber1 % 10 !== 0) {
    console.log(randomNumber1);
    randomNumber1 = Math.floor(Math.random() * 50) + 1;
    attempts1++;
}
console.log(`The random number is ${randomNumber1} its take ${attempts1}`);

// 
const librariesName = ["Alex", "Ramez", "Yurii", "Yulia", "Akin"];
let randomIndex = Math.floor(Math.random() * (librariesName.length - 1)) + 1;
let attempts2 = 1;

while (librariesName[randomIndex][0] !== "A") {
    console.log(randomIndex,librariesName[randomIndex], librariesName[randomIndex][0]);
    randomIndex = Math.floor(Math.random() * librariesName.length - 1) + 1;
    attempts2++;
}
console.log(`The random number is ${randomIndex} its take ${attempts2}`);