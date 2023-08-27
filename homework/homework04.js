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
let randomNum;
for (let i = 1; i <= Infinity; i++) {
    let n =  Math.floor(Math.random() * 100 + 1);
    count++
    randomNum = n;
    if (n % 5 === 0) break;  
}
console.log(`The random number is ${randomNum} and it took ${count} attempt/s to generate it.`);

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
console.log(numStore.join("\n"));
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
console.log(storesObj);
for (const obj of storesObj) {
    if (obj[0].toLowerCase() === "b" || obj[0].toLowerCase() === "p") countS++;
}
console.log(`Elements starting with 'B' or 'P' = ${countS}`);
countS = 0;
for (let i = 0; i < storesObj.length; i ++) {
    if(storesObj[i].toLowerCase().includes("book") || storesObj[i].toLowerCase().includes("pen")) countS++;
}
console.log(`Elements having 'book' or 'pen' = ${countS}`);

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
let countN = 0;
for(const num of storesNum) {
    if (num > numberQ) countMore ++;
    else if (num < numberQ) countLess++;
    else countN++;
}
console.log(`Elements that are more than 10 = ${countMore}`);
console.log(`Elements that are less than 10 = ${countLess}`);
console.log(`Elements that are 10 = ${countN}`);

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
    for (let i = 0; i < array.length; i ++) {
        for(let j = i + 1; j < array.length; j ++) {
            if (array[i] === array[j]) return array[i];
        }
    }
    return -1;
}
console.log(firstDuplicate([1, "abs", 3, 0, "abs", 0 ]));
//Task 16 
// Write a function named as getDuplicates() which takes an array argument 
// and returns all the duplicated elements in the array when invoked.

// NOTE: Make your code dynamic that works for any array and return empty array 
// if there are no duplicates in the array. For two elements to be considered 
// as duplicated, value and data types of the elements must be same.
function firstDuplicate(array) {
    const duplicated = [];
    for (let i = 0; i < array.length; i ++) {
        for(let j = i + 1; j < array.length; j ++) {
            if (array[i] === array[j]) duplicated.push(array[i]);
        }
    }
    return duplicated;
}
console.log(firstDuplicate(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo', 12, 12 ]));

