// Task 1 

let str1 = "5", str2 = "2";
let num1 = Number(str1), num2 = Number(str2);
console.log(`The sun of ${str1} and ${str2} is = ${num1 + num2}`);
console.log(`The product of ${str1} and ${str2} is = ${num1 * num2}`);
console.log(`The division of ${str1} and ${str2} is = ${num1 / num2}`);
console.log(`The subtraction of ${str1} and ${str2} is = ${num1 - num2}`);
console.log(`The remainder of ${str1} and ${str2} is = ${num1 % num2}`);
console.log(`The exponentiation of ${str1} and ${str2} is = ${num1 ** num2}`);

 //Task 2
let s1 = "200", s2 = "-50";
let n1 = Number(s1), n2 = Number(s2);
​
console.log("The greatest value is = " + Math.max(n1, n2));
console.log("The smallest value is = " + Math.min(n1, n2));
// console.log("The average value is = " + ((n1 + n2)/ 2));
console.log(`The average value is = ${(n1 + n2)/ 2}`);
console.log("The absolute difference is = " + Math.abs(n1 - n2));

//Task 3
let nm1 = Math.floor(Math.random() * 51);
let nm2 = Math.floor(Math.random() * 51);

console.log("The absolute difference between number is = " + Math.abs(nm1 - nm2));

// Task 4 
let randomNum1 = Math.floor(Math.random() * 51);
let randomNum2 = Math.floor(Math.random() * 51);
let randomNum3 = Math.floor(Math.random() * 51);
let randomNum4 = Math.floor(Math.random() * 51);
let randomNum5 = Math.floor(Math.random() * 51);

console.log("The max value = " + Math.max(randomNum1, randomNum2, randomNum3, randomNum4, randomNum5));
console.log("The max value = " + Math.min(randomNum1, randomNum2, randomNum3, randomNum4, randomNum5));

//Task 5 
let ranNum1 = Math.floor(Math.random() * 51 + 50);
let ranNum2 = Math.floor(Math.random() * 51 + 50);
let ranNum3 = Math.floor(Math.random() * 51 + 50);

console.log("The number 1 = " + ranNum1);
console.log("The number 2 = " + ranNum2);
console.log("The number 3 = " + ranNum3);
console.log("The sum of number is = " + (ranNum1 + ranNum2 + ranNum3));

// Task 6

let rNumber1 = Math.floor(Math.random() * 101);
let rNumber2 = Math.floor(Math.random() * 101);
let rNumber3 = Math.floor(Math.random() * 101);

console.log(rNumber1, rNumber2, rNumber3);
console.log(rNumber1 > 25 && rNumber2 > 25 && rNumber3 > 25);
//console.log(!(rNumber1 <= 25 || rNumber2 <=25 || rNumber3 <= 25));

//Task 7

let name = "David";
console.log("The length of the name is = " + name.length);
console.log("The first character in the name is = " + name[0]);
console.log("The last character in the name is = " + name[name.length - 1]);
console.log("The first 3 characters in the name are = " + name.slice(0, 3));
console.log("The last 3 characters in the name are = " + name.slice(name.length -3));


