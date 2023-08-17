
// Number property
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // 9007199254740991
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.length); // 

console.log(123 + "2"); 

console.log((123).toString() + 2); // 1232
console.log((123).toString() * 2); // 246

console.log(10.521.toFixed(2)); // 10.52
console.log(10.521.toFixed(1)); // 10.5
console.log(10.577.toFixed(2)); // 10.58
console.log(10.577.toFixed(1)); // 10.6

console.log((120000 / 52)); // 2307.6923076923076
console.log((120000 / 52).toFixed(0)); //2308

console.log(1.23.toPrecision(2)); // 1.2
console.log(1.23144.toPrecision(3));  // 1.23

console.log(100.25.toFixed(1)); // 100.3


//Converting other data type into numbers
console.log(true + 1); //  2
console.log(false + 1); // 1

console.log(Number(true) + 1); // 2
console.log(Number(false) + 1); // 1

console.log(Number("five") + 1); // NaN
console.log(Number("5") + 1); // 6
console.log("5"+ 1); // 51

console.log(Number("5.5") + 1); // 6.5
console.log(parseInt("5.5") + 1); // 6
console.log(parseFloat("5.5") + 1); //6.5

console.log(Number("Hello") + 1); // NaN
console.log(parseInt("Hello") + 1); // NaN
console.log(parseFloat("Hello") + 1); //NaN

console.log(Number("") + 1); // 1
console.log(parseInt("") + 1); // NaN
console.log(parseFloat("") + 1); //NaN

// How to check if a nu,ber is integer or safe integer
let number1 = 1, number2 = 1000, number3 = "1", number4 = 123123124789127398123;
console.log(Number.isInteger(number1)); // true
console.log(Number.isInteger(number2)); // true
console.log(Number.isInteger(number3)); // false 
console.log(Number.isInteger(number4)); // true

console.log(Number.isSafeInteger(number1)); // true
console.log(Number.isSafeInteger(number2)); // true 
console.log(Number.isSafeInteger(number3)); // false
console.log(Number.isSafeInteger(number4)); // false
