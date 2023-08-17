
// Write a function called isPositive that take an argument and return true if the arg is positive
//and false if negative
function isPositive(arg1) {
return arg1 > 0;
}
console.log(isPositive(3)); //true
console.log(isPositive(-6)); //false
console.log(isPositive(0)); //false
// Write a function called isNegative that take an argument and return true if the arg is negative
//and false if positive

function isNegative(arg1) {
    return arg1 < 0;
}
console.log(isNegative(3)); //false
console.log(isNegative(-6)); //true
console.log(isNegative(0)); //false

// write a function called getFirstChar that take an argument and return first character from argument
function getFirstChar(str) {
    return str[0];
}
console.log(getFirstChar("Hello"));

function getFirstLastChar(str) {
    return str[0] + str[str.length -1];
}
console.log(getFirstLastChar("a"));

function getRandomNumber (max, min) {
    return random = Math.floor(Math.random() * (max - min + 1)) + min;
   
}
console.log(getRandomNumber(10,0));
console.log(getRandomNumber(20,10));
console.log(getRandomNumber(1, 3));

// Write a function called average5 that take 5 arguments and return their average

function average5 (arg1, arg2, arg3, arg4, arg5) {
    return (arg1 + arg2 + arg3 + arg4 + arg5) /5;
}
console.log(average5(10, 10, 10, 10, 10));