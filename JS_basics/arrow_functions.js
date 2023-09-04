// Write a function called product which takes 2 numbers and returns their product
// product(3, 5)   -> 15
// product(2, 0)   -> 0
// product(4, 3)   -> 12

function product1 (a, b) { // regular syntax
    return a * b;
}
const product2 = function(a, b) { return a * b}; // function expression syntax

const product = (a , b) => a * b; // arrow function syntax

console.log(product(3,5));
console.log(product1(2, 0));
console.log(product2(4, 3));

// Write a function named as fizzBuzz that takes one number argument and
// Outputs 'Fizz' if the number is divisible by 3
// Outputs 'Buzz' if the number is divisible by 5
// Outputs 'FizzBuzz' if the number is divisible by both 3 and 5
// Outputs the number itself if it is not divisible by both 3 and 5

// fizzBuzz(3)         -> 'Fizz'
// fizzBuzz(10)        -> 'Buzz'
// fizzBuzz(45)        -> 'FizzBuzz'
// fizzBuzz(2)         -> '2'

const fizzBuzz1 = (num) => {                                    // arrow function syntax
    if ( num % 5 ===0 && num % 3 === 0) console.log("FizzBuzz");
    else if (num % 3 === 0) console.log("Fizz");
    else if (num % 5 === 0) console.log("Buzz");
    else console.log(num);
}
fizzBuzz1(3); //     Fizz
fizzBuzz1(10); //    Buzz
fizzBuzz1(45); //    FizzBuzz
fizzBuzz1(2);//      2

// function fizzBuzz (num) {                                         /// REGULAR SYNTAX
//     if ( num % 5 ===0 && num % 3 === 0) console.log(“fizzBuzz”);
//     else if (num % 3 === 0) console.log(“Fizz”);
//     else if (num % 5 === 0) console.log(“Buzz”);
//     else console.log(num)
// }
// fizzBuzz(3);
// fizzBuzz(10);
// fizzBuzz(45);
// fizzBuzz(2);

// const fizzBuzz = function (num) {                                //function expression syntax
//     if ( num % 5 ===0 && num % 3 === 0) console.log(“fizzBuzz”);
//     else if (num % 3 === 0) console.log(“Fizz”);
//     else if (num % 5 === 0) console.log(“Buzz”);
//     else console.log(num);
// }
// fizzBuzz(3);
// fizzBuzz(10);
// fizzBuzz(45);
// fizzBuzz(2);
function greeting1 () {
    console.log("Hello");
}
greeting1();

const greeting2 = function () {console.log("Hello")};
greeting2();

const greeting3 = () => console.log("Hello");
greeting3();