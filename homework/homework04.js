//Task 1
// Requirement:
// Write a program that outputs all the numbers that are divisible by 7 starting from 
// 1 to 100 (both inclusive).
for (let i = 1; i <= 100; i ++){
    if (i % 7 === 0) console.log(i);
}

// Task 2
// Write a program that outputs all the numbers that are divisible by both 2 
// and 3 starting from 1 to 50 (both inclusive).

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0 && i % 3 ===0) console.log(i);
}

// Task 3
// Write a program that outputs all the numbers that are divisible 
// by 5 starting from 100 to 50 (both inclusive).

for (let i = 100; i >= 50; i -=5) {
    console.log(i); 
}

// Task 4
// Requirement:
// Write a program that outputs the squares of all numbers starting 
// from 0 to 7 (both inclusive).
for (let i = 0; i <= 7; i ++) {
    console.log(`The square of ${i} is = ${i ** 2}`);
}

// Task 5
// Requirement:
// Write a program that finds sum of the numbers starting from 1 to 10 (both inclusive).
// Calculation => 1+2+3+4+5+6+7+8+9+10

let sum = 0;
for (let i = 1; i <= 10; i ++) {
    sum += i;
}
console.log(sum);

//Task 6
// Requirement:
// Write a program generates a random number between 1 and 10 (both inclusive).
// And find the factorial of the number.

// Mathematically, the factorial of a non-negative integer n is defined as:
// n! = n × (n-1) × (n-2) × ... × 2 × 1

const n = Math.floor(Math.random() * 10 +1);
let factor = 1;
for (let i = 1; i <= n; i++) {
    factor *= i
}
console.log(n);
console.log(factor);

// Task 7
// Requirement:
// Write a program generates a random number between 1 and 100 (both inclusive).
// Keep generating a new number till you get a number that is divisible by 5.
// The program should also count how many attempts it takes to generate such a number.
// Eventually, print the random number divisible by 5 with the number of attempts as below.

let count = 0;
let randomNum = 0;
do {
    randomNum = Math.floor(Math.random() * 100) + 1;
    count++;
}
while(randomNum % 5 !== 0) 
console.log(`The random number is ${randomNum} and it took ${count} attempt/s to generate it.`);
/* Second way
for (let i = 1; i <= 100; i++) {
    randomNum =  Math.floor(Math.random() * 100 + 1);
    count++
    if (randomNum % 5 === 0) break;  
}
console.log(`The random number is ${randomNum} and it took ${count} attempt/s to generate it.`);
*/

// Task 8
// Requirement:
// -Create an array that stores countries below.
// Germany, Argentina, Ukraine, Romania
// THEN:
// -Output the entire array
// -Ouput the entire array sorted lexicographically

const country = ["Germany", "Argentina", "Ukraine", "Romania"];

console.log(country);
console.log(country.sort());

// Task 9
// Requirement:
// -Create a String array that stores cartoon dogs below
// Scooby Doo, Snoopy, Blue, Pluto, Dino, Sparky 
// THEN:
// -Output the entire array
// -Then, check if the array has Pluto element
// 	if it has Pluto, then output true
// 	if it does not have Pluto, output false

const cartoonDogs = ["Scooby Doo", "Snoopy", "Blue", "Pluto", "Dino", "Sparky"];
console.log(cartoonDogs.includes("Pluto"));

// Task 10
// -Create an array that stores cartoon cats below.
// Garfield, Tom, Sylvester, Azrael
// THEN:
// -Output the entire array sorted lexicographically
// -Then, check if the array has both Garfield and Felix
// 	if it has both, then output true
// 	if it does not have both, output false

const cartoonCats = ["Garfield", "Tom", "Sylvester", "Azrael", ];
console.log(cartoonCats.sort());
console.log(cartoonCats.includes("Garfield") && cartoonCats.includes("Felix"));

//Task 11
// Requirement:
// -Create an array that stores numbers below
// 10.5, 20.75, 70, 80, 15.75
const numStore = [10.5, 20.75, 70, 80, 15.75];
console.log(numStore);
/* second way
console.log(numStore.join("\n"));
*/
for (let i = 0; i < numStore.length; i ++) {
    console.log(numStore[i]);
}

//Task 12
// Requirement:
// -Create an array that stores objects below.
// Pen, notebook, Book, paper, bag, pencil, Ruler
// THEN:
// -Output the entire array.
// -Output how many elements starts with 'B' or 'P', ignoring cases.
// -Output how many elements has 'book' or 'pen' partial strings, ignoring cases.
const storesObj = ["Pen", "notebook", "Book", "paper", "bag", "pencil", "Ruler"];
let countS = 0;
let countT = 0
console.log(storesObj);
for (const obj of storesObj) {
    if (obj[0].toLowerCase() === "b" || obj[0].toLowerCase() === "p") countS++;
    if (obj.toLowerCase().includes("book") || obj.toLowerCase().includes("pen")) countT++;
}
console.log(`Elements starting with 'B' or 'P' = ${countS}`);
console.log(`Elements having 'book' or 'pen' = ${countT}`);

/* Second way with two loops
countS = 0;
for (let i = 0; i < storesObj.length; i ++) {
    if(storesObj[i].toLowerCase().includes("book") || storesObj[i].toLowerCase().includes("pen")) countS++;
}
console.log(`Elements having 'book' or 'pen' = ${countS}`);
*/ 

//Task 13
// -Create an array that stores numbers below.
// 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78
// THEN:
// -Output the entire array
// -Output how many elements are more than 10
// -Output how many elements are less than 10
// -Output how many elements are 10
const storesNum = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];
console.log(storesNum);
let numberQ = 10;
let countMore = 0;
let countLess = 0;
let countTen = 0;
for(const num of storesNum) {
    if (num > numberQ) countMore ++;
    else if (num < numberQ) countLess++;
    else countTen++;
}
console.log(`Elements that are more than 10 = ${countMore}`);
console.log(`Elements that are less than 10 = ${countLess}`);
console.log(`Elements that are 10 = ${countTen}`);

// Task 14 
// Requirement:
// -Create 2 arrays that stores numbers below.
// First array-> 		[ 5, 8, 13, 1, 2 ]
// Second array -> 	[ 9, 3, 67, 1, 0 ]
// THEN:
// -Output both arrays
// –Then, create a new array that will take the greatest value of same index from 
// first 2 arrays and output the third array as well.

const firstArr = [5, 8, 13, 1, 2];
const secondArr = [9, 3, 67, 1, 0 ];
const thirdArr = [];

for (let i = 0; i < firstArr.length; i++) {
    if (firstArr[i] > secondArr[i]) thirdArr.push(firstArr[i]);
    else thirdArr.push(secondArr[i]);
    // thirdArr.push(Math.max(firstArr[i], secondArr[i]));
}
console.log(`1st array is = [${firstArr}]`);
console.log(`2nd array is = [${secondArr}]`);
console.log(`3rd array is = [${thirdArr}]`);

//Task 15
// Write a function named as firstDuplicate() which takes an array argument 
// and returns the first duplicated number in the array when invoked.
// NOTE: Make your code dynamic that works for any array and return -1 if 
// there are no duplicates in the array. For two elements to be considered 
// as duplicated, value and data types of the elements must be same.
function firstDuplicate(array) {
    for (let i = 0; i < array.length - 1; i ++) {
    let firstNum = array[i];
    let restNum = array.slice(i + 1);
    if (restNum.includes(firstNum)) return firstNum;
    }
}
console.log(firstDuplicate([1, "abs", 3, 0, "abs", 0, 3 ]));
//Task 16 
// Write a function named as getDuplicates() which takes an array argument 
// and returns all the duplicated elements in the array when invoked.

// NOTE: Make your code dynamic that works for any array and return empty array 
// if there are no duplicates in the array. For two elements to be considered 
// as duplicated, value and data types of the elements must be same.
function getDuplicates(array) {
    const duplicated = [];
    for (let i = 0; i < array.length-1; i ++) {
    let firstNum = array[i];
    let restNum = array.slice(i + 1);
        if (restNum.includes(firstNum) && !duplicated.includes(firstNum)) {
            duplicated.push(firstNum);
        }
    }
    return duplicated;
}
console.log(getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0 ]));
console.log(getDuplicates(["A", "foo", "12", 12, "bar", "a", "a", "foo", "a"]));
console.log(getDuplicates(["foo", "12", 12, "bar", "a"]));

//Task 17 
// Write a function named as reverseStringWords() which takes a string as 
// an argument and returns string back with each word separately reversed when invoked.
// NOTE: Make your code dynamic that works for any string. Make sure you consider 
// extra spaces before and after words in the given string.

function reverseStringWords(str) {
    let word = str.split(" ");
    for (let i = 0; i < word.length; i++){
        word[i] = word[i].split("").reverse().join("");
    }
    const reverseWord = word.join(" ");
    return reverseWord;

}
console.log(reverseStringWords("I like JavaScript"));

//Task 18
// Write a function named as getEvens() which takes 2 number arguments and 
// returns all the even numbers as an array stored from smallest even number 
// to greatest even number when invoked.
// NOTE: Make your code dynamic that works for any numbers and return empty 
// array if there are no even numbers in the range of given 2 numbers. 
// Assume you will not be given negative numbers.

function getEvens(num1, num2) {
    const arrayEven = [];
    for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        if(i % 2 === 0) arrayEven.push(i);
    }
    return arrayEven;
    
}
console.log(getEvens(17, 5));
console.log(getEvens(4, 4));
console.log(getEvens(3, 3));

// Task 19
// Write a function named as getMultipleOf5() which takes 2 number arguments 
// and returns all the numbers divisible by 5 as an array stored from first 
// found match to last found match when invoked.
// NOTE: Make your code dynamic that works for any numbers and return empty 
// array if there are no numbers divisible by 5 in the range of given 2 numbers. 
// Assume you will not be given negative numbers.
function getMultipleOf5(num1, num2) {
    const arrayMultiple = [];
    for(let i = Math.min(num1, num2); i <= Math.max(num1, num2); i ++) {
        if ( i % 5 === 0) arrayMultiple.push(i);
    }
    if (num1 < num2) return arrayMultiple;
    else return arrayMultiple.reverse();
}
console.log(getMultipleOf5(3, 17));
console.log(getMultipleOf5(23, 5));
console.log(getMultipleOf5(5, 5));

// Task 20
// Requirement:
// Write a function named as fizzBuzz() which takes 2 number arguments and 
// returns a string composed with below requirements when invoked.
// You need to find all the numbers within the range of given 2 numbers
//  (both inclusive) and store them in a string from smallest to greatest 
//  number with a ' | ' separator for each number.
// You will need to convert numbers divisible by 3 to 'Fizz'
// You will need to convert numbers divisible by 5 to 'Buzz'
// You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
// The rest will stay the same.
// NOTE: Make your code dynamic that works for any numbers.
// Assume you will not be given negative numbers.
function fizzBuzz(num1, num2) {
    const arrayNum = [];
    for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        if (i % 3 === 0 && i % 5 === 0) arrayNum.push("FizzBuzz");
        else if ( i % 3 === 0) arrayNum.push("Fizz");
        else if ( i % 5 === 0) arrayNum.push("Buzz");
        else arrayNum.push(i);
    }
    return arrayNum.join(" | ");
}
console.log(fizzBuzz(13, 18));
console.log(fizzBuzz(12, 5));
console.log(fizzBuzz(9, 6));