
let num1 = 5, num2 = 10, num3 = 7, num4 = -5, num5 = -8;

// -8, -5, 5, 7, 10
let maxNumber = Math.max(num1, num2, num3, num4, num5);
let minNumber = Math.min(num1, num2, num3, num4, num5);
console.log(maxNumber);  // 10
console.log(minNumber);  // -8


// abs() method - mean absolute always give you positive value
console.log(Math.abs(num4));
console.log(Math.abs(num1 - num2));
console.log(Math.abs(num1 * num5 - num4));

console.log(Math.ceil(5.11));
console.log(Math.ceil(5.99));
console.log(Math.floor(5.11));
console.log(Math.floor(5.99));
console.log(Math.round(5.11));
console.log(Math.round(5.99));
console.log(Math.round(5.50));

console.log(Math.trunc(5.11));
console.log(Math.trunc(5.99));

//pow function
console.log(Math.pow(2, 5)); // 32 ame if i use **

console.log(Math.sqrt(64)); // sqrt(x) - returns the square root of x

//random() - returns a random number between 0 and 1 (0 included but 1 excluded)

console.log(Math.ceil(Math.random() * 10));

let min = 10;
let max = 20;
let rangeNum = max - min + 1;
console.log(Math.floor(Math.random() * rangeNum) + min);


