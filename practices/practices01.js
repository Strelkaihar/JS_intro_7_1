// //Task 1
// Requirement:
// Write a program that generates a random number 
// between 0 and 50 (both 0 and 50 are included)
// Multiply number with 5 and print the result with below 
// message
// Expected result:
// The random number * 5 = {result}

let min = 0;
let max = 50;
let rangeNum = max - min + 1;
randomNum = (Math.floor(Math.random() * rangeNum) + min);

console.log("Random number = " + randomNum)
console.log("The random number * 5 = " + randomNum * 5);

// Task 2

let r1 = Math.floor(Math.random() * 11);
let r2 = Math.floor(Math.random() * 11);
console.log(r1, r2);
console.log(Math.min(r1 , r2));
console.log(Math.max(r1 , r2));
console.log(Math.abs(r1 - r2));


// Task 3

let num1 = 50;
let num2 = 100;
let ranNum = num2 - num1 + 1;

console.log(randomN = Math.floor(Math.random() * ranNum) + num1);
console.log("The random number % 10 = " + (reminder = randomN % 10));

// Task 4



let numb1 = Math.ceil(Math.random() * 11) * 5;
let numb2 = Math.ceil(Math.random() * 11) * 4;
let numb3 = Math.ceil(Math.random() * 11) * 3;
let numb4 = Math.ceil(Math.random() * 11) * 2;
let numb5 = Math.ceil(Math.random() * 11);
console.log(numb1 + numb2 + numb3 + numb4 + numb5);

//Task 5

let numt1 = Math.ceil(Math.random() * 25);
console.log(numt1);
let numt2 = Math.ceil((Math.random() * 25) + 25);
let numt3 = Math.ceil((Math.random() * 25) + 50);
let numt4 = Math.ceil((Math.random() * 25) + 75);

console.log(Math.max(numt1, numt2, numt3, numt4) - Math.min(numt1, numt2, numt3, numt4)); // console.log(numt4 - numt1)
console.log(Math.abs(numt2 - numt3));
console.log((numt1 + numt2 + numt3 + numt4) / 4);

let number1 = 24, number2 = 10;



console.log(Math.floor(Math.random() * 26));
console.log(Math.floor(Math.random() * 26));
console.log(Math.floor(Math.random() * 26));
console.log(Math.floor(Math.random() * 26));
console.log(Math.floor(Math.random() * 26));
console.log(Math.floor(Math.random() * 26));
console.log(Math.floor(Math.random() * 26));
console.log(Math.floor(Math.random() * 26));
console.log(Math.floor(Math.random() * 26));
