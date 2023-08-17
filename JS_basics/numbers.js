

let num1 = 5, num2 = 10.5;
console.log(num1);
console.log(num2);

console.log(num1 + num2);
console.log(num1 * num2);
console.log(num1 - num2);

let a = 2, b = 5, c = "10", d = "20";

console.log(a + b);
console.log(c + d);
console.log(d / a);

//NaN operator - Not a Number
console.log(NaN);
console.log(typeof Nan);

console.log("  " * 5);
console.log("" * 5);
console.log("Hello" * 5);
console.log("Hello" + NaN); // HelloNaN
console.log("  " - 5);

console.log(0 / 0); // NaN
console.log(0 / 5); // 0
console.log(5 / 0); // Infinity

console.log(Infinity); // Infinity
console.log(-Infinity); // - Infinity

console.log(typeof Infinity); // number
console.log(typeof -Infinity); // number

console.log(Infinity + Infinity);
console.log(Infinity - Infinity);

//isNan() function
console.log(isNaN(5)); // false
console.log(isNaN(10.5)); // false
console.log(isNaN("Hello")); // true

console.log(isNaN(true)); //false
console.log(isNaN(true + 5)); //false

let number = new Number(20);
console.log(typeof number); // object

//BigInt

 
