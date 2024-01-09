// Convert given Strings below to number data types and find their sum, product, division, subtraction,
//  remainder and exponentiation.
let str1 = "5", str2 = "2";
let num1 = Number(str1), num2 = Number(str2);
console.log(`The sun of ${str1} and ${str2} is = ${num1 + num2}`);
console.log(`The product of ${str1} and ${str2} is = ${num1 * num2}`);
// Convert given Strings below to number data types and find the greatest and smallest values and 
// find the average and absolute difference of them.
let s1 = "200", s2 = "-50";
let n1 = Number(s1), n2 = Number(s2);
// Write a program that generates 2 random numbers between 1 and 50 (both 1 and 50 are included)
let nm1 = Math.floor(Math.random() * 51);
let nm2 = Math.floor(Math.random() * 51);
console.log("The absolute difference between number is = " + Math.abs(nm1 - nm2));
// Write a program that generates 5 random numbers between 1 and 50 (both 1 and 50 are included)
let ranNum1 = Math.floor(Math.random() * 51 + 50);
let ranNum2 = Math.floor(Math.random() * 51 + 50);
let ranNum3 = Math.floor(Math.random() * 51 + 50);

console.log("The number 1 = " + ranNum1);
console.log("The number 2 = " + ranNum2);
console.log("The number 3 = " + ranNum3);
console.log("The sum of number is = " + (ranNum1 + ranNum2 + ranNum3));
// Write a program that generates 3 random numbers between 1 and 100 (1 and 100 are included) 
// and find if all the numbers are more than 25.
// Print true if all numbers are greater than 25.
// Print false if any of the number is less than or equals 25.
let rNumber1 = Math.floor(Math.random() * 101);
let rNumber2 = Math.floor(Math.random() * 101);
let rNumber3 = Math.floor(Math.random() * 101);

console.log(rNumber1, rNumber2, rNumber3);
console.log(rNumber1 > 25 && rNumber2 > 25 && rNumber3 > 25);
// Assume you are given a name let name = "David"; 
// Print out the length of the name
// Find the first character in the name and print it
// Find the last character in the name and print it
// Find the first 3 characters in the name and print them
// Find the last 3 characters in the name and print them
let name = "David";
console.log("The length of the name is = " + name.length);
console.log("The first character in the name is = " + name[0]);
console.log("The last character in the name is = " + name[name.length - 1]);
console.log("The first 3 characters in the name are = " + name.slice(0, 3));
console.log("The last 3 characters in the name are = " + name.slice(name.length -3));
//Task 1
// Write a  program that generates 3 random numbers between 1 to 100 (1 and 100 are included)

// Print true if the average of the random numbers is greater or equals 50. 
// Print false if the average of the random numbers is less than 50.

let num1: = Math.floor(Math.random() * 100 + 1);
let num2: = Math.floor(Math.random() * 100 + 1);
let num3 = Math.floor(Math.random() * 100 + 1);

console.log((num1 + num2 + num3) / 3 >= 50);
// Task 2
// Write a  program that generates 3 random numbers between 1 to 3 (1 and 3 are included)

// -If all numbers are different, then print “NO MATCH”
// -If any of those 2 numbers are equal, then print “DOUBLE MATCH”
// -If all 3 numbers are equal, then print “TRIPLE MATCH”
let numb1 = Math.floor(Math.random() * 3 + 1);
let numb2 = Math.floor(Math.random() * 3 + 1);
let numb3 = Math.floor(Math.random() * 3 + 1);
console.log(numb1, numb2, numb3);
if (numb1 === numb2 && numb1 === numb3){
    console.log("TRIPLE MATCH");
} else if (numb1 === numb2 || numb1 === numb3 || numb2 === numb3){
    console.log("DOUBLE MATCH");
} else {
    console.log("NO MATCH");
}
// Task 3 
// Write a function named as hasA() which takes a string word as an argument and returns
//  true if given string has a character "a" or "A", and false otherwise when invoked.

// NOTE: Assume you will not be given an empty word.
function hasA(str) {
    return str.toUpperCase().includes("A");
}
console.log(hasA("Tech"));
console.log(hasA("Global"));
//Task 4 
// Requirement:
// Write a function named as doubleOrTripleWord() which takes a string word as an 
// argument and returns the given word back tripled if the string length is even 
// or doubled if the string length is odd when invoked.

function doubleOrTripleWord(str) {
    if (str.length % 2 === 0)
        return str + str + str
        else return str + str
}
console.log(doubleOrTripleWord("  "));
console.log(doubleOrTripleWord("22"));
//Task 5
// Requirement:
// Write a function named as firstWord() which takes a string word as 
// an argument and returns the first word from the given string when invoked.

function firstWord(str) {
    if (str.includes(" "))
    return str.slice(0, str.indexOf(" "));
    else return str
}
console.log(firstWord("Hello world"));
console.log(firstWord("I like JavaScript "));
console.log(firstWord("Hello"));
console.log(firstWord("  "));
// Task 6
// Write a function named as lastWord() which takes a string word as an 
// argument and returns the last word from the given string when invoked.

// NOTE: Return empty string if the given string does not have any word.

function lastWord(str) {
    if (str.includes(" "))
    return str.slice(str.lastIndexOf(" ")).trimStart();
    else return str
}
console.log(lastWord("Hello world"));
console.log(lastWord("I like JavaScript"));
console.log(lastWord("Hello"));
console.log(lastWord("  "));
// Task 7 
// Requirement: 
// Write a function named as firstlastWord() which takes a string word as 
// an argument and returns the first and last words from the given string when invoked.
function firstlastWord(str) {
    if (str.includes(" "))
    return str.slice(0, str.indexOf(" ")) + str.slice(str.lastIndexOf(" ")).trimStart();
    else return str + str;
}
console.log(firstlastWord("Hello world"));
console.log(firstlastWord("I like JavaScript"));
console.log(firstlastWord("Hello"));
console.log(firstlastWord("  "));

//Task 8 
// Requirement:
// Write a function named as startVowel() which takes a string word as an
//  argument and returns true if given string starts with a vowel, and 
//  false otherwise when invoked.
function startVowel(str) {
    return("aeiouAEIOU".includes(str[0]));
}
console.log(startVowel("Oello"));

// Task 9
// Requirement: 
// Write a function named as swap4() which takes a string word as an argument and returns
//  the string back with its first and last 4 characters swapped when invoked.

// NOTE: Return empty string if the given string does not have 8 or more characters.

function swap4(str){
    let first4 = str.slice(0, 4);
    let last4 = str.slice(str.length - 4);
    let mid = str.slice(4, str.length - 4);
    if (str.length > 8) return last4 + mid + first4;
    else return "";
}
console.log(swap4("abc"));
console.log(swap4("JavaScript"));
console.log(swap4("TechGlobal"));
console.log(swap4("Apple"));

//Task 10
// Write a function named as swapFirstLastWord() which takes a string word as an 
// argument and returns the string back with its first and last words swapped when invoked.

// NOTE: Return empty string if the given string does not have 2 or more words.
function swapFirstLastWord(str){
    if (str.trim().includes(" "))
    return str.slice(str.lastIndexOf(" ")) + str.slice(str.indexOf(" "), str.lastIndexOf(" ")) + " " +str.slice(0, str.indexOf(" "));
    else return "";
}
console.log(swapFirstLastWord("Hello "));
console.log(swapFirstLastWord("I like JavaScript"));
console.log(swapFirstLastWord("foo bar foo bar"));
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
    console.log(`The square of ${i} is = ${i * i}`);
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

const n = Math.floor(Math.random() * 10) + 1;
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
let countMore = 0;
let countLess = 0;
let countTen = 0;
for(const num of storesNum) {
    if (num > 10) countMore ++;
    else if (num < 10) countLess++;
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
    thirdArr.push(Math.max(firstArr[i], secondArr[i]));
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
    return word.join(" ");

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
//Task 1 
// Requirement:
// Write a function named countPos() which takes an array of numbers as an 
// argument and returns how many elements are positive​ when invoked. 

const countPos = (arr) => arr.filter(num => num > 0).length
// function countPos(array) {
//     let count = 0;
//     array.forEach(number => number > 0 ? count ++ : count)
//     return count;
// }
console.log(countPos([-45, 0, 0, 34, 5, 67]));
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));
console.log(countPos([0, -1, -2, -3]));

//Task 2
// Write a function named countA() which takes a string argument and returns how
//  many A or a there are in the given string when invoked.

// function countA (str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         str[i].toLowerCase().includes("a") ? count ++ : count;
//     }
//     return count;
// }
const countA = (str) => str.split("").filter(char => char.toLowerCase() === "a").length
console.log(countA("TechGlobal is a QA bootcamp"));
console.log(countA("QA stands for Quality Assurance"));
console.log(countA("Cypress"));

//Task 3
// Requirement: 
// Write a function named as countVowels() which takes a string word as an 
// argument and returns the count of the vowel letters when invoked.
// NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i

// function countVowel(str) {
//     let countVow = 0;
//     for(let i = 0; i < str.length; i++) ("AEOUI").includes(str[i].toUpperCase()) ? countVow ++ : countVow;
//     return countVow;
// }

const countVowel = (str) => str.split("").filter(char => ("AEOUI").includes(char.toUpperCase())).length
console.log(countVowel("Hello"));
console.log(countVowel("Hello World"));
console.log(countVowel("JavaScript is fun"));
console.log(countVowel(""));

//Task 4
// Requirement: 
// Write a function named as countConsonants() which takes a string word as 
// an argument and returns the count of the consonant letters when invoked.
// NOTE: A letter that is not vowel is considered as a consonant letter.

function countConsonants(str) {
    let countCons = 0;
    for(let i = 0; i < str.length; i++) !("AEOUI").includes(str[i].toUpperCase()) ? countCons ++ : countCons;
    return countCons
}
console.log(countConsonants("Hello"));
console.log(countConsonants("Hello World"));
console.log(countConsonants("JavaScript is fun"));
console.log(countConsonants(""));

// Task 5
// Requirement:
// Write a function named countWords() which takes a string argument and
//  returns the total count of words in the given string when invoked.
// NOTE: Be careful about the extra whitespaces before and after the string.

function countWords(str) {
    let count = str.trim().split(" ").length;
    return count;
}
console.log(countWords("    Javascript is fun    "));
console.log(countWords("Cypress is an UI automation tool.  "));
console.log(countWords("1 2 3 4"));

//Task6
// Requirement:
// Write a function named as factorial() which takes a number as an argument and 
// returns the factorial of the number when invoked.
// NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
// n! = n × (n-1) × (n-2) × ... × 2 × 1
// Assume you will not be given a negative number.

// function factorial (number) {
//     factor = 1;
//     for (let i = 1; i <= number; i++ ){
//         factor *= i
//     } 
//     return factor;
// }
const factorial = (num) => {
    if (num === 0 || num === 1) return 1
    return num * factorial(num - 1)
}
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));

//Task 7
// Write a function named as isPalindrome() which takes a string word as an argument 
// and returns true if the word is palindrome or returns false otherwise when invoked.
// NOTE: Palindrome: It is a word that is read the same backward as forward
// Examples: kayak, civic, madam
// NOTE: your function should ignore case sensitivity

function isPalindrome (str) {
    const reverseWord = str.toLowerCase().split("").reverse().join("")

    // const word = str.toLowerCase().split("");
    // const reverseWord = str.toLowerCase().split("").reverse()
    // console.log(str.toLowerCase().split("").reverse().join(""));
    // for (let i = 0; i < str.length; i++){
    //     if (word[i] !== reverseWord[i]) return false;
    return str.toLowerCase() === reverseWord;
}
console.log(isPalindrome("Hello"));
console.log(isPalindrome("Kayak"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("abba"));
console.log(isPalindrome("123454321"));
console.log(isPalindrome("ab c"));
console.log(isPalindrome("A"));
console.log(isPalindrome(""));


//Task 8
// Write a function named as countMultipleWords() which takes an array as an 
// argument and returns the count of the elements that has multiple words when invoked.
// NOTE: Be careful about the extra whitespaces before and after the array element.

function countMultipleWords(array) {
    let count = 0;
    for(const word of array) {
        if(word.trim().split(" ").length > 1) count++
    }
    return count;
}
console.log(countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]))
console.log(countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]))
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   "]))

// TAsk 9
// Write a function named as count3OrLess() which takes a string word as an argument and
//  returns the count of the words that has 3 characters or less when invoked.
function count3OrLess(string) {
    const arr = string.split(" ");
    let count = 0;
    arr.forEach(word => word.length <= 3 && word.length != 0  ? count++ : count)
    return count;
}
console.log(count3OrLess("Hello"));
console.log(count3OrLess("Hi John"));
console.log(count3OrLess("JavaScript is fun"));
console.log(count3OrLess("My name is John Doe"));
console.log(count3OrLess(""));

//Task10
// Requirement:
// Write a function named as isPrime() which takes a number as an argument and returns
//  true if the number is prime or returns false otherwise when invoked.
// NOTE: Mathematically, Prime number is a number that can be divided only by itself and 
// 1. It cannot be divided by any other number. The smallest prime number is 2 and 2 is 
// the only even prime number.
// Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31…
// NOTE: The smallest prime number is 2 and there is no negative prime numbers.

function isPrime(number) {
    if (number < 2) return false
    for (let i = 2; i < Math.sqrt(number); i ++) {
        if (number % i === 0) return false
    }
    return true
}
console.log(isPrime(5))
console.log(isPrime(2))
console.log(isPrime(29))
console.log(isPrime(-5))
console.log(isPrime(0))
console.log(isPrime(1))

//Task 11 
// Requirement:
// Write a function named add() which takes two array of numbers as argument and 
// returns a new array with sum of given arrays elements.
// NOTE: Be careful about the array sizes as they could be different.
function add(arr1, arr2){
    let maxLength = Math.max(arr1.length, arr2.length)
    const sum = [];
    for(let i = 0; i < maxLength; i++){
        sum.push((arr1[i] || 0) + (arr2[i] || 0));
    }
    return sum;
}
console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]));

//Task 12
// Requirement: 
// Write a function named as removeExtraSpaces() which takes a string word as an 
// argument and returns the string back with all extra spaces removed when invoked.

function removeExtraSpaces(str) {
    
    return str.split(" ").filter(x => x.length >= 1).join(" ");
}
console.log(removeExtraSpaces("      Hello    World     "))
console.log(removeExtraSpaces("     JavaScript is          fun"))
console.log(removeExtraSpaces("Hello"))
console.log(removeExtraSpaces(""))

//Task 13
// Requirement: 
// Write a function named findClosestTo10() which takes an array of numbers as 
// argument and returns the closest element to 10 from the given array.
// NOTE: Assume that length of array is always more than zero.
// NOTE: Ignore the 10 itself.
// NOTE: If there are more than one numbers are close equally, return the smaller number

function findClosestTo10(arr) {
    let closest = Infinity;
    for (let i = 0; i < arr.length; i++) {
      const diff = Math.abs(arr[i] - 10);
      if( arr[i] === 10) continue;
      else if (diff < Math.abs(closest - 10)) {
        closest = arr[i];
      }
      else if (diff === Math.abs(closest - 10) && arr[i] < closest) {
        closest = arr[i];
      }
    }
    return closest;
  }

console.log(findClosestTo10([11, 10, -13, 5, 70, 15, 57]));
console.log(findClosestTo10([10, -13, 8, 9, 15, -20]));
console.log(findClosestTo10([6,0, -1, -2]));

//14 
// Requirement: 
// Write a function named as isEmailValid() which takes a string email as an argument 
// and returns true if the email is valid or returns false otherwise when invoked.
// NOTE: A VALID EMAIL:
// should NOT have any space.
// should not have more than one “@” character.
// should be in the given format <2+chars>@<2+chars>.<2+chars> meaning
// There should be at least characters before @ character.
// There should be at least 2 characters between @ and . Characters.
// There should be at least 2 characters after the . character.

function isEmailValid(string) {
    if (string.includes(' ') || !string.includes('.com')) return false
    else if (string.split('@').length > 2) return false
    else if (string.split('@')[0].length < 2) return false
    else if (string.split('@')[1].split('.')[0].length < 2 ) return false
    else if (string.split('.')[1].length < 2) return false
   return true
}
console.log(isEmailValid(""));
console.log(isEmailValid("@gmail.com"));
console.log(isEmailValid("johndoe@yahoo"));
console.log(isEmailValid("johndoe@.com"));
console.log(isEmailValid("a@outlook.com"));
console.log(isEmailValid("johndoe@@gmail.com"));
console.log(isEmailValid("johndoe@a.com"));
console.log(isEmailValid("johndoe@gmail.com"));

//Task15
// Write a function named as isPasswordValid() which takes a string email as an 
// argument and returns true if the password is valid or returns false otherwise when invoked.
// NOTE: A VALID PASSWORD:
// should have length of 8 to 16 (both inclusive).
// should have at least 1 digit, 1 uppercase, 1 lowercase and 1 special char.
// should NOT have any space.
function isPasswordValid(string) {
    let hasDigit = false
    let hasLowerCase = false;
    let hasUpperCase = false;
    let hasSpecialChar = false;

    if(string.length < 8 || string.length > 16 || string.includes(" ")) return false;
    for (let i = 0; i <string.length; i++){
        if(("1234567890").includes(string[i])) hasDigit = true;
        else if (string[i] >= 'a' && string[i] <= 'z') hasLowerCase = true;
        else if (string[i] >= 'A' && string[i] <= 'Z') hasUpperCase = true;
        else if ("!@#$%^&*()_+{}[]:;<>,.?~\\/-".includes(string[i])) hasSpecialChar = true;
    }
    return hasDigit && hasLowerCase && hasUpperCase && hasSpecialChar;
}
console.log(isPasswordValid(""));
console.log(isPasswordValid("abcd"));
console.log(isPasswordValid("abcd1234"));
console.log(isPasswordValid("Abcd1234"));
console.log(isPasswordValid("Chicago12345US!#$%"));
console.log(isPasswordValid("Abcd1234$"));
console.log(isPasswordValid("Test1234#"));
//Task 1
// Write a function named noSpace() which takes a string as argument and returns a new string 
// with all the spaces removed.

const noSpace = (str) => str.split(" ").join("");
console.log(noSpace(""));
console.log(noSpace("Javascript"));
console.log(noSpace("  Hello   "));
console.log(noSpace(" Hello World  "));
console.log(noSpace("Tech Global"));

//Task 2
// Write a function named replaceFirstLast() which takes a string argument and 
// returns a new string with the first and last characters replaced.
// NOTE: If the length is less than 2, return an empty string.
// NOTE: Ignore extra spaces before and after the string.

const replaceFirstLast = (str) => str.trim().length > 1 ? str[str.length -1] + str.slice(1, str.length - 1) + str[0] : "";
console.log(replaceFirstLast(""));
console.log(replaceFirstLast("Hello"));
console.log(replaceFirstLast("Tech Globa"));
console.log(replaceFirstLast("A"));
console.log(replaceFirstLast("    A   "));

//Task 3
// Write a function named hasVowel() which takes a string argument and returns 
// true if the string has a vowel, returns false if the string doesn’t contain any vowel letter.
// NOTE: Vowels are = a, e, o, u, i.
// NOTE: Ignore upper/lower cases.

const hasVowel = (str) => str.split("").some(char => ('aeoui').includes(char.toLowerCase()));
console.log(hasVowel(""));
console.log(hasVowel("Javascript"));
console.log(hasVowel("Tech Global"));
console.log(hasVowel("1234"));
console.log(hasVowel("ABC"));

//Task 4
// Write a function named checkAge() which takes a number argument to be 
// considered as the yearOfBirth and returns a message below based on the given year.
// If the age is less than 16, then print "AGE IS NOT ALLOWED”"
// If the age is 16 or more, then print "AGE IS ALLOWED"
// If the age is more than 120 or a future year, print "AGE IS NOT VALID"
// NOTE: Consider someone born in 2013 is 10 years old as of 2023.

const checkAge = (num) => {
    const currentDate = new Date().getFullYear();
    const age = currentDate - num;
    if(age > 15 && age < 120) console.log("AGE IS ALLOWED");
    else if (age > 120 || age < 0) console.log("AGE IS NOT VALID");
    else console.log("AGE IS NOT ALLOWED");
}
checkAge(2015);
checkAge(2007);
checkAge(2050);
checkAge(1920);
checkAge(1800);

//Task 5
// Requirement:
// Write a function named averageOfEdges() which takes three number arguments 
// and will return average of min and max numbers​.
const averageOfEdges = (n1, n2, n3) => console.log((Math.min(n1, n2, n3) + Math.max(n1, n2, n3)) / 2);
averageOfEdges(0, 0, 0);
averageOfEdges(0, 0, 6);
averageOfEdges(-2, -2, 10);
averageOfEdges(-3, 15, -3);
averageOfEdges(10, 13, 20);

//Task 6
// Write a function named noA() which takes an array of strings as argument and 
// will return a new array with all elements starting with "A" or "a" replaced with "###".
const noA = (arr) => arr.map(char => char.toLowerCase().startsWith("a") ? "###" : char)
console.log(noA(["javascript", "hello", "123", "xyz"]));
console.log(noA(["apple", "123", "ABC", "javascript"]));
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]));

//Task 7
// Write a function named no3and5() which takes an array of integer numbers as 
// argument and will return a new array with elements replaced by conditions below.
// If element can be divided by 5, replace it with 99​
// If element can be divided by 3, replace it with 100​
// If element can be divided by both 3 and 5, replace it with 101
const no3and5 = (arr) => {
    return arr.map (num => {
    if(num % 15 === 0) return 101;
    else if(num % 3 === 0) return 100;
    else if (num % 5 === 0) return 99;
    else return num;
})}
console.log(no3and5([7, 4, 11, 23, 17]));
console.log(no3and5([3, 4, 5, 6]));
console.log(no3and5([10, 11, 12, 13, 14, 15]));

// Task 8
// Requirement:
// Write a function named countPrimes() which takes an array of integer numbers as
//  argument and will return the number of the prime numbers in the given array.
// NOTE: Prime number is a number that can be divided only by 1 and itself​.
// NOTE: Negative numbers cannot be prime​.
// Examples: 2,3,5,7,11,13,17,19,23,29,31,37 etc.​
// NOTE: Smallest prime number is 2.

const countPrimes = (arr) => {
    count = 0;
    for(let num of arr) {
        if(num < 2) count;
        else if (num % Math.sqrt(num) === 0) count;
        else count ++;
    }
    return count;
}
console.log(countPrimes([-10, -3, 0, 1]))
console.log(countPrimes([7, 4, 11, 23, 17]))
console.log(countPrimes([41, 53, 19, 47, 67]))

//Task 9
// Write a function named removeDuplicates() which takes an array argument and
//  returns a new array with all the duplicates removed.

const removeDuplicates = arr =>  arr.filter((value, index) => arr.indexOf(value) === index);
console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60, 60]))
console.log(removeDuplicates([1, 2, 5, 2, 3, 5]))
console.log(removeDuplicates([0, -1, -2, -2, -1]))
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]))
console.log(removeDuplicates(["1", "2", "3", "2", "3"]))

//Task 10
// Write a method named isDateFormatValid() that takes a string as an argument and returns
//  true if the given date is valid or returns false otherwise.
// Expected Format: nn/nn/nnnn
// So, it must be presented as <2digits>/<2digits>/<4digits>

const isDateFormatValid = (str) => {
    const arr = str.trim().split("/")
    if(arr.length !== 3) return false;
    else if(arr[0].length !== 2 || parseInt(arr[0]) > 12) return false
    else if(arr[1].length !== 2 || parseInt(arr[1]) > 31) return false
    else if(arr[2].length !== 4 ) return false
    else return true;
}
console.log(isDateFormatValid(""));
console.log(isDateFormatValid("15/30/2020"));
console.log(isDateFormatValid("10.30.2020"));
console.log(isDateFormatValid("5/30/2020"));
console.log(isDateFormatValid("05/30/2020 "));
console.log(isDateFormatValid("10/2/2020"));
console.log(isDateFormatValid("10/02/2020 "));

//Task 11
// Write a method named secondMax() takes an array argument and returns the second 
// max number from the array.
// NOTE: Assume that you will not be given empty array and if the array has only 
// 1 element, it will be returned as second max number.
// NOTE: Be careful when there is multiple max numbers.

const secondMax = array => {
    if (array.length < 2 ){
        return array[0]
    }
    const numbersSort = array.sort((x,y) => y - x);
    const sortedArray = numbersSort.filter((value, index) => numbersSort.indexOf(value) === index);
    return sortedArray[1]
}
console.log(secondMax([7, 4, 4, 4, 23, 23, 23]));
console.log(secondMax([3, 4, 5, 6]));
console.log(secondMax([10]));

//Task 12
// Requirement: 
// Write a method named secondMin() takes an array argument and returns the second 
// min number from the array.
// NOTE: Assume that you will not be given empty array and if the array has only 1 
// element, it will be returned as second min number.
// NOTE: Be careful when there is multiple min numbers.

const secondMin = array => {
    if (array.length < 2 ){
        return array[0]
    }
    const numbersSort = array.sort((x,y) => x - y);
    const sortedArray = numbersSort.filter((value, index) => numbersSort.indexOf(value) === index);
    return sortedArray[1]
}
console.log(secondMin([7, 4, 2, 4, 4, 23, 23, 23]));
console.log(secondMin([3, 4, 5, 6, 7, 2]));
console.log(secondMin([10]));

//Task 13
// Write a method named mostRepeated() takes an array argument and returns 
// the most counted element from the array.
// NOTE: Assume that you will not be given empty array and the count of one 
// element will always be more than the others.

const mostRepeated = (array) => {
    if (array.length < 2) 
    return array[0];
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++){
            if(array[i] === array[j] && !arr1.includes(arr2)) arr1.push(array[i])
        }
        if(arr1.length > arr2.length) arr2 = arr1;
        arr1 = []
    }
    return arr2[0];
}
console.log(mostRepeated([23, 23, 23, 4, 4, 4]))
console.log(mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]))
console.log(mostRepeated(["TechGlobal"]))
console.log(mostRepeated([10]))
//Task1
// Write a function named hasUpperCase() which takes a string argument and return true 
// if there is an uppercase letter and false otherwise.
// Examples:
// hasUpperCase("javascript") 	-> false
// hasUpperCase("John") 		-> true
// hasUpperCase("$125.0") 	-> false
// hasUpperCase("") 		-> false
const hasUpperCase = (string) => string.split("").some(char => char >= 'A' && char<= 'Z');
console.log(hasUpperCase("javascript"));
console.log(hasUpperCase("John"));
console.log(hasUpperCase("$125.0"));
console.log(hasUpperCase(""));
//Task 2
// Write a function named noDigit() which takes a string argument and returns a 
// new string with all digits removed from the original string​.
// Examples:
// noDigit("") 			-> ""
// noDigit("Javascript") 		-> "Javascript"
// noDigit("123Hello") 		-> "Hello"
// noDigit("123Hello World149") 	-> "Hello World”
// noDigit("123Tech456Global149") 	-> "TechGlobal"
const noDigit = (str) => str.split("").filter(x => !(("0123456789").includes(x))).join("")
console.log(noDigit(""));
console.log(noDigit("Javascript"));
console.log(noDigit("123Hello"));
console.log(noDigit("123Hello World149"));
console.log(noDigit("123Tech456Global149"));
//Task 3
// Requirement:
// Write a function named noVowel() which takes a string argument and returns a new 
// string with all vowels removed from the original string​.
// Examples:
// noVowel("TechGlobal") 	-> "TchGlbl"
// noVowel("AEOxyz") 	-> "xyz"
// noVowel("Javascript") 	-> "Jvscrpt"
// noVowel("") 	-> ""
// noVowel("125$") 	-> "125$"
const noVowel = (str) => str.split("").filter(x => !(("aouei").includes(x.toLowerCase()))).join("");
console.log((noVowel("TechGlobal")));
console.log((noVowel("AEOxyz")));
console.log((noVowel("Javascript")));
console.log((noVowel("")));
console.log((noVowel("125$")));
//Task 4
// Requirement:
// Write a function named no13() which takes an array of numbers as argument and return a 
// new array with all 13s replaced with 0s. ​
// Examples:
// no13([1, 2, 3 ,4]) 		-> [1, 2, 3 ,4] 
// no13([13, 2, 3]) 		-> [0, 2, 3]
// no13([13, 13, 13 , 13, 13]) 	-> [0, 0, 0, 0, 0]
// no13([]) 			-> []

const no13 = array => array.map(x => x === 13 ? x = 0 : x = x)
console.log(no13([1, 2, 3, 4]));
console.log(no13([13, 2, 3]));
console.log(no13([13, 13, 13, 13, 13]));

//Task 5
// Requirement:
// Write a function named middleInt() which takes three number arguments and 
// return the middle number.  
// Examples:
// middleInt(1, 2, 2)  -> 2
// middleInt(5, 5, 8)  -> 5
// middleInt(5, 3, 5)  -> 5
// middleInt(1, 1, 1)  -> 1
// middleInt(-1, 25, 10)  -> 10

function middleInt(n1, n2, n3) {
    const numbers = [n1, n2, n3];
    numbers.sort((x, y) => x - y);
    return numbers[1]
}
console.log(middleInt(1, 2, 2));
console.log(middleInt(5, 5, 8));
console.log(middleInt(5, 3, 5));
console.log(middleInt(1, 1, 1));
console.log(middleInt(-1, 25, 10));

// Task 6
// Requirement:
// Write a function named sumOfDigits() which takes a string argument and returns sum 
// of all digits from the original string. ​
// Examples:
// sumOfDigits("Javascript") 	-> 0
// sumOfDigits("John’s age is 29") 	-> 11
// sumOfDigits("$125.0") 		-> 8
// sumOfDigits("") 		-> 0

function sumOfDigits(string) {
    let sum = 0;
    for (const char of string) {
        if (Number(char)) sum += Number(char)
    }
    return sum;
}

console.log(sumOfDigits("John's age is 29"));
console.log(sumOfDigits("$125.0"));
console.log(sumOfDigits(""));
//Task 7
// Write a function named arrFactorial() which takes an array of numbers as argument and 
// return the array with every number replaced with their factorials.
// Examples:
// arrFactorial([1, 2, 3 ,4]) 		->  [1, 2, 6, 24]
// arrFactorial([0, 5]) 		-> [1,120]
// arrFactorial([5 , 0, 6]) 		-> [120, 1, 720]
// arrFactorial([]) 		-> []
const arrFactorial = (arr) => arr.map( x => {
    let factorial = 1;
    for (let i = 1; i <= x; i++) {
    factorial *= i;
    }
    return factorial;
})
console.log(arrFactorial([1, 2, 3 ,4]));
console.log(arrFactorial([0, 5]));
console.log(arrFactorial([5 , 0, 6]));
console.log(arrFactorial([]));

function c (array) {
    let factor = 1;
    for(let i = 0; i <= array[i]; i++){
        for(let j = 1;j <= array[i]; j++){
            factor *= j
        }
        array[i] = factor;
        factor = 1;
    }
    return array
}
console.log(c([4, 5]))
// Task 8
// Write a function named categorizeCharacters() which takes a string word as argument and 
// return an array as letters at index of 0, digits at index of 1 and specials at index of 2. 
// Examples:
// categorizeCharacters("1234") 	-> [ '' , '1234', '' ] 
// categorizeCharacters("abc123$#%") 	-> [ 'abc', '123', '$#%' ]
// categorizeCharacters("12ab$%3c%") 	-> [ 'abc', '123', '$%%' ]

function categorizeCharacters(string) {
    let arrSym = [];
    let arrLet = [];
    let arrNum = [];
    for (const word of string) {
        if(word.toLowerCase() >= "a" && word.toLowerCase() <= "z") arrLet.push(word);
        else if(("1234567890").includes(word)) arrNum.push(word);
        else if ("!@#$%^&*()_+{}[]:;<>,.?~\\/-".includes(word)) arrSym.push(word);
    }
     let arrResult = [arrLet.join(""), arrNum.join(""), arrSym.join("")]
     return arrResult;
        
}
console.log(categorizeCharacters('12ab$%3c%'));
//Task 1
// Requirement:
// Write a function named hasLowerCase() which takes a string argument and returns true if there is a lowercase letter and false if it there isn’t. 
// Examples:
// hasLowerCase("") 		-> false
// hasLowerCase("JAVASCRIPT") 	-> false
// hasLowerCase("hello") 		-> true
// hasLowerCase("125$") 		-> false
// hasLowerCase("   a   ") 		-> true
const hasLowerCase = (string) => string.split("").some(char => char >= 'a' && char<= 'z');
console.log(hasLowerCase(""));
console.log(hasLowerCase("JAVASCRIPT"));
console.log(hasLowerCase("hello"));
console.log(hasLowerCase("125$"));
console.log(hasLowerCase("   a   "));

//Task 2
// Requirement:
// Write a function named noZero() which takes an array of numbers as 
//argument and returns the array back with all zeros removed.
// Examples:
//noZero([1]) 		-> [1]
// noZero( [1, 1, 10]​) 	-> [1, 1, 10]​
// noZero([0, 1, 10]) 	-> [1, 10]
// noZero([0, 0, 0]) 	-> []
// noZero([10, 100 0]) 	-> [10, 100]
const noZero = (array) => array.filter(x => x !== 0 ? x : "");
console.log(noZero([1, 1, 10]));
console.log(noZero([0, 1, 10]));
console.log(noZero([0, 0, 0]));
console.log(noZero([1]));
console.log(noZero([10, 100, 0]));
// Task 3
// Requirement:
// Write a function named numberAndSquare() which takes an array of numbers as argument and returns a multidimensional array with all numbers squared. 
// Examples:
// numberAndSquare([1, 2, 3]) 	-> [[1, 1], [2, 4], [3, 9]]
// numberAndSquare([0, 3, -6]) 	-> [[0, 0], [3, 9], [-6, 36]]
// numberAndSquare([1, 4]) 	-> [[1,1], [4, 16]]
// numberAndSquare([0, 0, 0]) 	-> [[0, 0], [0, 0], [0, 0]]
// numberAndSquare([0, 1, -10]) 	-> [[0, 0], [1, 1], [-10, 100]]
const numberAndSquare = (array) => array.map(x => [x, x * x]);
console.log(numberAndSquare([1, 2, 3]))
console.log(numberAndSquare([0, 3, -6]))
console.log(numberAndSquare([1, 4]))
console.log(numberAndSquare([0, 1, -10]))
console.log(numberAndSquare([0, 0, 0]))
// Task 4
// Requirement:
// Write a function named containsValue() which takes a string array and a string as arguments
//  and returns a boolean value. Search the string variable inside of the array and return true if 
// it exists in the array. If it doesn’t exist, return false. ​
// NOTE: Assume that array size is at least 1.​
// NOTE: The method is case-sensitive.
// Examples:
// containsValue(["abc", "foo", "javascript"], "hello") 			-> false
// containsValue(["abc", "def", "123"], "Abc") 			-> false
// containsValue(["abc", "def", "123", "Javascript", "Hello"], "123") 	-> true
function containsValue(array, string) {
    return array.includes(string);
}
console.log(containsValue(["abc", "foo", "javascript"], "hello"));
console.log(containsValue(["abc", "def", "123"], "Abc"));
console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123"));
// Task 5
// Requirement:
// Write a function named reverseSentence() which takes a string as argument and returns
//  the words in reverse order.​ If there is no enough words reverse, return "There is not 
//  enough words!".
// Examples:
// reverseSentence("Hello") 		-> "There is not enough words!"
// reverseSentence("Javascript is fun") 		-> "Fun is javascript"
// reverseSentence("This is a sentence") 	-> "Sentence a is this"

function reverseSentence(str) {
    const words = str.split(" ");
    if (words.length <= 1) return console.log("There is not enough words!")
    let reversWord = words.reverse().join(" ");
    return console.log(reversWord[0].toUpperCase()+ reversWord.slice(1).toLowerCase());
}
reverseSentence("Hello");
reverseSentence("Javascript is fun");
reverseSentence("This is a sentence");

//Task 6
// Requirement:
// Write a function named removeStringSpecialsDigits() which takes a string as argument
//  and return a string without the special characters or digits.
// Examples:
// removeStringSpecialsDigits("123Javascript #$%is fun") 	-> "Javascript is fun" 
// removeStringSpecialsDigits("Cypress") 		-> "Cypress"
// removeStringSpecialsDigits("Automation123#$%") 	-> "Automation"

function removeStringSpecialsDigits (str) {
    let word = "";
    for( const char of str) {
        if(char.toLowerCase() >= "a" && char.toLowerCase() || char === " ") word += char
    }
    return console.log(word);
}
removeStringSpecialsDigits("123Javascript #$%is fun");
removeStringSpecialsDigits("Cypress");
removeStringSpecialsDigits("Automation123#$%");
//Task 7
// Requirement:
// Write a function named removeArraySpecialsDigits() which takes a string array as
//  argument and return back without the special characters or digits.
// Examples:
// removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"]) 	-> ["Javascript", "is", "fun"]
// removeArraySpecialsDigits(["Cypress", "123$%", "###"]) 	-> ["Cypress", "", ""]
// removeArraySpecialsDigits(["Automation", "123#$%tool"]) 	-> ["Automation", "tool"]

const removeArraySpecialsDigits = (array) => array.map(str => {
    let word = "";
    for( const char of str) {
        if(char.toLowerCase() >= "a" && char.toLowerCase() || char === " ") word += char
    }
    return word;
});
console.log(removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"]));
console.log(removeArraySpecialsDigits(["Cypress", "123$%", "###"]));
console.log(removeArraySpecialsDigits(["Automation", "123#$%tool"]));
//Task 8
// Requirement:
// Write a function named getCommons() which takes two string arrays as arguments and 
// returns all the common words.
// Examples:
// getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"] ) 		-> []
// getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] ) 	-> ["Javascript"]
// getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] ) 	-> ["C#"]

const getCommons = (array1, array2) => {
    let common = [];
    for(const el of array1){
        if(array2.includes(el) && !(common.includes(el))) common.push(el);
    }
    return console.log(common);
}
getCommons(["Javascript", "is", "fun"], ["abc", "xyz", "123"]);
getCommons(["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] );
getCommons( ["Javascript", "C#", "C#", "Python"], ["Python", "C#", "C++", "Python", 4, 6] );
//Task 9 
// Requirement:
// Write a function named noXInVariables() which takes an array as argument and return an 
// array that all the x or X removed from the elements. 
// NOTE: If the element is existing of x or X letters only, then completely remove the element.
// Examples:
// noXInVariables(["abc", 123, "#$%"]) 		-> ["abc", 123, "#$%"]
// noXInVariables(["xyz", 123, "#$%"]) 		-> ["yz", 123, "#$%"]
// noXInVariables(["x", 123, "#$%"]) 		-> [123, "#$%"]
// noXInVariables(["xyXyxy", "Xx", "ABC"]) 	-> ["yyy", "ABC"]

const noXInVariables = (array) => {
    noXArray = array.map(char =>{
    return (char.toString().split("").filter(letter =>(letter.toLowerCase() !== "x"))).join("")
    })
    return noXArray.filter(word => (word.length > 0))
}

console.log(noXInVariables(["abc", 123, "#$%"]))
console.log(noXInVariables(["xyz", 123, "#$%"]))
console.log(noXInVariables(["x", 123, "#$%"]))
console.log(noXInVariables(["xyXyxy", "Xx", "ABC"]))
//Task 1
// Requirement:
// Write a function named fizzBuzz1() which takes a number argument and returns 
// "Fizz" if the given number is divisible by 3, "Buzz" if the number is divisible 
// by 5, and "FizzBuzz" if the number is divisible by both 3 and 5. Otherwise, 
// it will return the number itself.​

// Examples:
// fizzBuzz1(0) 		-> "FizzBuzz"
// fizzBuzz1(1) 		-> 1
// fizzBuzz1(3) 		-> "Fizz"
// fizzBuzz1(5) 		-> "Buzz"
// fizzBuzz1(30) 	-> "FizzBuzz"
// fizzBuzz1(10) 	-> "Buzz"
// fizzBuzz1(15) 	-> "FizzBuzz"
// fizzBuzz1(-15) 	-> "FizzBuzz"

const fizzBuzz1 = (num) => {
    if(num % 15 === 0) console.log("FizzBuzz")
    else if (num % 3 === 0) console.log("Fizz")
    else if (num % 5 === 0) console.log("Buzz")
    else return console.log(num)
}
fizzBuzz1(0);
fizzBuzz1(2);
fizzBuzz1(3);
fizzBuzz1(5);
fizzBuzz1(30);

//Task 2
// Requirement:
// Write a function named fizzBuzz2() which takes a number argument and returns
//  and array consist of numbers starting from 1 to given number. However, it
//   will return "Fizz" for the numbers divided by 3, "Buzz" for the numbers 
//   divided by 5, and "FizzBuzz" for the numbers divided both by 3 and 5.
// Examples:
// fizzBuzz2(3) 		-> [ 1, 2, 'Fizz' ]
// fizzBuzz2(5) 		-> [ 1, 2, 'Fizz', 4, 'Buzz' ]
// fizzBuzz2(10) 	-> [ 1​, 2​, 'Fizz'​, 4​, 'Buzz'​, 'Fizz'​, 7, 8​, 'Fizz'​, 'Buzz' ]​
// fizzBuzz2(15) 	-> [ 1​, 2​, 'Fizz'​, 4​, 'Buzz'​, 'Fizz'​, 7, 8​, 'Fizz'​, 'Buzz', 11, 'Fizz'. 13, 14,  'FizzBuzz' ]​
// fizzBuzz2(2) 		-> [ 1, 2 ]
const fizzBuzz2 = (num) => {
    let fizz = [];
    for(let i = 1; i <= num; i++) {
    if(i % 15 === 0) fizz.push("FizzBuzz")
    else if (i % 3 === 0) fizz.push("Fizz")
    else if (i % 5 === 0) fizz.push("Buzz")
    else  fizz.push(i)
}
return console.log(fizz)
}
fizzBuzz2(3);
fizzBuzz2(5);
fizzBuzz2(10);
fizzBuzz2(15);
fizzBuzz2(2);

//Task 3
// Requirement:
// Write a function named findSumNumbers() which takes a string argument and 
// returns sum of the all numbers appears in the string.
// Examples:
// findSumNumbers("abc$") -> 0
// findSumNumbers("a1b4c  6#") -> 11
// findSumNumbers("ab110c045d") -> 155
// findSumNumbers("525") -> 525
// findSumNumbers("3 for 10 dollars") -> 13

function findSumNumbers (string){
    let sum = []
    for (let word of string){
        if ('0123456789'.includes(word)) sum.push(word)
        else sum.push(' ')
    }
    const sum1 = sum.join('').split(' ')
    let num3 = 0
    for ( const num of sum1){
        num3 += Number(num)

    }
    return num3
}


console.log(findSumNumbers("abc$"));
console.log(findSumNumbers("a1b4c  6#"));
console.log(findSumNumbers("ab110c045d"));
console.log(findSumNumbers("525"));
console.log(findSumNumbers("3 for 10 dollars"));

// Task 4
// Requirement:
// Write a function named findBiggestNumber() which takes a string argument and 
// returns the biggest number appears in the string.
// Examples:
// findBiggestNumber("abc$") 		-> 0
// findBiggestNumber("a1b4c  6#") 		-> 6
// findBiggestNumber("ab110c045d") 		-> 110
// findBiggestNumber("525") 		-> 525
// findBiggestNumber("3 for 10 dollars") 	-> 10
function findBiggestNumber (string){
    let sum = []
    for (let word of string){
        if ('0123456789'.includes(word)) sum.push(word)
        else sum.push(' ')
    }
    const sum1 = sum.join('').split(' ')
    let num3 = 0;
    for ( const num of sum1){
        if(Number(num) > num3) num3 = num

    }
    return num3
}


console.log(findBiggestNumber("abc$"));
console.log(findBiggestNumber("a1b4c  6#"));
console.log(findBiggestNumber("ab110c045d"));
console.log(findBiggestNumber("525"));
console.log(findBiggestNumber("3 for 10 dollars"));

//Task 5
// Requirement:
// Write a function named countOccurrencesOfCharacters() which takes a string
//  argument and returns the count of repeated characters in the String.​
// NOTE: If given String is empty, then return empty String.​
// NOTE: It is case sensitive.
// Examples:
// countOccurrencesOfCharacters("") 		-> ""
// countOccurrencesOfCharacters("abc") 	-> "1a1b1c"
// countOccurrencesOfCharacters("abbcca") 	-> "1a2b2c1a"
// countOccurrencesOfCharacters("aaAAa") 	-> "2a2A1a”
// countOccurrencesOfCharacters("www" ) 	-> "3w"
const countOccurrencesOfCharacters = (str) => {
    let value = "";
    let count = 0;
    let a = "";
    for ( let i = 0; i <= str.length -1; i++) {
        count = 0
        if(!value.includes(str[i])) {
            for(let j = i; j <= str.length - 1; j++){
            if(str[i] === str[j]) count++ , value = str[j]
            else break;
            }
            a += count + value
        }
    }
    return a
}

console.log(countOccurrencesOfCharacters(""))
console.log(countOccurrencesOfCharacters("abc"))
console.log(countOccurrencesOfCharacters("abbcca"))
console.log(countOccurrencesOfCharacters("aaAAa"))
console.log(countOccurrencesOfCharacters("www"))

//Task 6
// Requirement:
// Write a function named fibonacciSeries1() which takes a number n argument and returns 
// the n series of Fibonacci numbers as an array. ​
// REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
// Examples:
// fibonacciSeries1(3) 	-> [0, 1, 1]
// fibonacciSeries1(5) 	-> [0, 1, 1, 2, 3]
// fibonacciSeries1(7) 	-> [0, 1, 1, 2, 3, 5, 8]
// fibonacciSeries1(8) 	-> [0, 1, 1, 2, 3, 5, 8, 13]
// fibonacciSeries1(1) 	-> [0]
// fibonacciSeries1(2) 	-> [0, 1]
const fibonacciSeries1 = (num) => {
    let fibonacci = [0, 1];
    if(num <= 1) return [0]
    for(let i = 0; i < num - 2; i++){
        fibonacci.push(fibonacci[i] + fibonacci[i + 1])
    }
    return fibonacci;
}
console.log(fibonacciSeries1(3));
console.log(fibonacciSeries1(5));
console.log(fibonacciSeries1(7));
console.log(fibonacciSeries1(8));
console.log(fibonacciSeries1(1));
console.log(fibonacciSeries1(2));

//Task 7
// Requirement:
// Write a function named fibonacciSeries2() which takes a number n argument and 
// returns the nth series of Fibonacci number as a number.
// REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
// Examples:
// fibonacciSeries2(2) 	-> 1
// fibonacciSeries2(4) 	-> 2
// fibonacciSeries2(8) 	-> 13
// fibonacciSeries2(9) 	-> 21
// fibonacciSeries2(1) 	-> 0

const fibonacciSeries2 = (num) => {
    let fibonacci = [0, 1];
    for(let i = 0; i < num - 2; i++){
        fibonacci.push(fibonacci[i] + fibonacci[i + 1])
    }
    return fibonacci[num - 1];
}
console.log(fibonacciSeries2(2));
console.log(fibonacciSeries2(4));
console.log(fibonacciSeries2(8));
console.log(fibonacciSeries2(9));
console.log(fibonacciSeries2(1));
//Task 8
// Requirement:
// Write a function named findUniques() which takes two array of number arguments 
// and returns the array which has only the unique values from both given arrays.
// NOTE: If both arrays are empty, then return an empty array.​
// NOTE: If one of the array is empty, then return unique values from the other array.
// Examples:
// findUniques([], []) 		-> []
// findUniques([], [1, 2, 3, 2]) 	-> [1, 2, 3]
// findUniques([1, 2, 3, 4], [3, 4, 5, 5]) 	-> [1, 2, 5]
// findUniques([8, 9], [9, 8, 9]) 	-> []
// findUniques([-1, -2], [1, 2]) 	-> [-1, -2, 1, 2]
const findUniques = (arr1, arr2) => {
    const a = arr1.filter((value, index) => arr1.indexOf(value) === index)
    const b = arr2.filter((value, index) => arr2.indexOf(value) === index)
    const unic = a.concat(b);
    const unicLast = []
    for(const el of unic){
        if(!a.includes(el) || !b.includes(el)) unicLast.push(el)
    }
    return console.log(unicLast);

}
findUniques([], []);
findUniques([], [1, 2, 3, 2]);
findUniques([1, 2, 3, 4], [3, 4, 5, 5]);
findUniques([8, 9], [9, 8, 9]);
findUniques([-1, -2], [1, 2]);

//Task 9
// Requirement:
// Write a function named isPowerOf3() which takes a number argument and returns true 
// if given number is equal to 3 power of the X. Otherwise, return false.​
// NOTE: Numbers that are power of 3 = 1, 3, 9, 27, 81, 243….
// NOTE: Ignore negative scenarios.
// Examples:
// isPowerOf3(1) 	-> true
// isPowerOf3(2) 	-> false
// isPowerOf3(3) 	-> true
// isPowerOf3(27) 	-> true
// isPowerOf3(100) 	-> false
// isPowerOf3(81) 	-> true
// isPowerOf3(9) 	-> true
const isPowerOf3 = (num) => {
    if(num === 3 || num === 1) return true
    for(let i = 0; i <= num; i++){
        num = num / 3;
        if(num === 3) return true
        else if(num < 3) return false;
    }
    return false
}
console.log(isPowerOf3(1));
console.log(isPowerOf3(2));
console.log(isPowerOf3(3));
console.log(isPowerOf3(27));
console.log(isPowerOf3(100));
console.log(isPowerOf3(81));
console.log(isPowerOf3(9));
//Task 1
// Write a function named calculateTotalPrice1() which takes an object of some shopping items 
// with their quantities as key-value pairs and returns the total price of the given items 
// based on the price list below.
// 1 Apple is $2.00​
// 1 Orange is 3.29
// 1 Mango is $4.99
// 1 Pineapple $5.25

const calculateTotalPrice1 = (obj) => {
    const product = {
        apple: 2,
        orange: 3.29,
        mango: 4.99,
        pineapple: 5.25,
    };
    let sum = 0;
    for (const prod in obj) {
         sum += obj[prod] * product[prod];
    }
    return console.log(sum);

};
calculateTotalPrice1({ apple: 3, mango: 1 });
calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 });
calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 });
calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango:1 });

//Task 2
// Requirement:
// Write a function named calculateTotalPrice2() which takes an object of some shopping items with
//  their quantities as key-value pairs and returns the total price of the given items based on 
//  the price list below.
// 1 Apple is $2.00​
// 1 Orange is 3.29
// 1 Mango is $4.99
// 1 Pineapple $5.25
// Note: There will be some discounts as below​.
// There will be %50 discount for every second Apple​
// There will be 1 free Mango if customer gets 3. So, fourth one is free.

const calculateTotalPrice2 = (obj) => {
    const product = {
        Apple: 2,
        Orange: 3.29,
        Mango: 4.99,
        Pineapple: 5.25,
    };
    let sum = 0;
    for (const prod in obj) {
        for (const price in product) {
            if (prod === "Apple" && obj[prod] >= 2 && prod === price && prod) {
                if(obj[prod] % 2 === 0) sum += ((obj[prod] * product[price]) / 2) + ((obj[prod] * product[price])/ 2)/2
                else sum += (((obj[prod]+ 1) * product[price])/ 2) + (((obj[prod]-1)* product[price]) / 2)/2
            }
            else if (prod === "Mango" && obj[prod] >= 4 && prod === price && prod) sum += (obj[prod] * product[price]) - (4.99 * Math.floor(obj[prod] / 4))
            else if (prod === price) sum += obj[prod] * product[price];
            
        }
    }
    return sum === 0 ? console.log(sum) : console.log(sum.toFixed(2));
};
calculateTotalPrice2({ Apple: 3, Mango: 5 });
calculateTotalPrice2({ Apple: 4, Mango: 8, Orange: 3 });
calculateTotalPrice2({ Apple: 0, Pineapple: 0, Orange: 0 });
calculateTotalPrice2({ Apple: 4, Pineapple: 1, Orange: 1, Mango: 3 });


// Task 3
// Write a function named nthWord() which takes a string and a number arguments and returns the nth 
// word in the string. 
// Note: Function should return empty string if the number argument is greater than the count of the 
// words in the given string.

const nthWord = (str, number) => str.split(" ")[number - 1] || " "

console.log(nthWord("I like programming languages", 2));
console.log(nthWord("QA stands for Quality Assurance", 4));
console.log(nthWord("Hello World", 3));
console.log(nthWord("Javascript", 1));
console.log(nthWord("", 1));

// Task 4
// Write a function named isArmstrong() which takes a number argument and returns true if given
//  number is armstrong, return false otherwise.​
// Note: An armstrong number is a number that is equal to the sum of cubes of its digits
// Let's take an example to understand it better. Consider the number 153.​
// To determine if 153 is an armstrong number, we need to check if the sum of its digits, each 
// raised to the power of the number of digits, equals the original number.​
// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153​
// In this case, the sum of the individual digits raised to the power of 3 (the number of digits in 153)
//  is equal to the original number, which means 153 is an armstrong number.

const isArmstrong = (num) => {
    const arNum = num.toString().split("");
    let armNum = 0;
    // let arm = arNum.reduce((total, i) => total + Math.pow(i, arNum.length), 0)
    for(let number of arNum) {
        armNum += number ** arNum.length
    }
return console.log(armNum === num);
}
isArmstrong(153) 
isArmstrong(123) 
isArmstrong(1634) 
isArmstrong(153) 
isArmstrong(1111)

//Task 5 
// Write a function named reverseNumber() which takes a number argument and returns it back 
// reversed without converting it to a String.
// Note: Do not convert number to string to complete the task.

function reverseNumber(number) {
    let revNumber = 0;
    while (number > 0) {
      revNumber = (revNumber * 10) + (number % 10);
      number = Math.floor(number / 10);
    }
    return revNumber;
  }
  console.log(reverseNumber(876));

// task 6 
// Write a function named doubleOrTriple() which takes an array of numbers as argument and a boolean 
// value. It will return the array elements doubled if true or tripled if the boolean value is false.​

const doubleOrTriple = (arr, boolean) => {
    if(boolean) return arr.map(x => x * 2)
    else return arr.map(x => x * 3)
}
console.log(doubleOrTriple([1, 5, 10], true));
console.log(doubleOrTriple([3, 7, 2], false));
console.log(doubleOrTriple([-1, -2], true));
console.log(doubleOrTriple([0], false));
console.log(doubleOrTriple([-1, 0, 1], true));
// Task 7 
// Write a function named splitString() which takes a string and a number arguments and returns
//  the string back split by the given number. 
// Note: Return empty string if the string shorter than splitting number or the string length is 
// not divisible by the given number.

const splitString = (str, num) => {
    if(str.length % num !== 0) return " "
    else return str.slice(0, num) + " " +  str.slice(num)
}
console.log(splitString("JavaScript", 5))
console.log(splitString("Java", 4))
console.log(splitString("Automation", 3))
console.log(splitString("Hello", 6))
console.log(splitString("12", 1))

//Task 1
// Write a function named countPalindrome() which takes a string and returns the number of 
//  palindrome words.
// Note: A palindrome word is a word that reads the same forwards and backwards. Example: 
// level, radar, deed, refer.

const countPalindrome = (str) => {
    let count = 0;
    const rev = str.split(" ")
    for(const el of rev){
        let revEl = el.split("").reverse().join("").toLowerCase()
        if(el !== '' && el.toLowerCase() === revEl) count ++
    }
    return count
}
console.log(countPalindrome('Mom and Dad'))
console.log(countPalindrome('See you at noon'))
console.log(countPalindrome('Kayak races attracts racecar drivers'))
console.log(countPalindrome(''))
console.log(countPalindrome('No palindrome here'))

//Task 2
// Write a function named sum() which takes an array of numbers and a boolean value as 
// arguments. It will return the sum of the numbers positioned at even indexes if true.
//  And, return sum of numbers positioned at odd indexes if false.

const sum = (arr, bool) => {
    let sum = 0
    for(let i = 0; i < arr.length ; i++) {
        if(bool === true && i % 2 === 0) sum +=arr[i]

        else if (bool === false && i % 2 !== 0)  sum +=arr[i]
    }
    return console.log(sum)
}
sum([1, 5, 10], true)
sum([3, 7, 2, 5, 10], false)
sum([-1, 1, -2, 2], true)
sum([0, -1, 15, 1], false)
sum([1, 2, 3, 4, -4], true)

//Task 3
// Write a function named nthChars() which takes a string and a number as arguments and 
// returns the string back with every nth characters.
const nthChars = (str, num) => {
    const strChar = str.split('')
    let ntnStr = ""
    for ( let i = 0 ; i < str.length; i ++ ) {
        if( (i + 1) % num === 0) ntnStr += strChar[i]
    }
    return console.log(ntnStr)
}
nthChars("Java", 2)
nthChars("JavaScript", 5)
nthChars("Java", 3)
nthChars("Hi", 4)
nthChars("0123456789", 2)
//Task 4
// Write a function named canFormString() which takes two string arguments and returns true 
// if the second string can be formed by rearranging the characters of first string. Return 
// false otherwise.
// NOTE: This method is case-insensitive and ignore the white spaces.

const canFormString = (str, str1) => {
    let duplicated = ""
    let strF = str.split("").join(" ")
    for (let i = 0; i <= str1.length; i++) {
        if(strF.toLowerCase().includes(str1[i])) {
        strF = strF.replace(str1[i], " ")
        duplicated +=str1[i] 
        }
    }
    return console.log(duplicated === str1)
}
canFormString("Hello", "Hi")
canFormString("programming", "gaming")
canFormString("halogen", "hello")
canFormString("CONVERSATION", "voices rant on")
canFormString("12", "123")

//Task 5
// Write a function named isAnagram() which takes two string arguments and returns true if the given
//  strings are anagram. Return false otherwise.
// NOTE: An anagram is a word or phrase formed by rearranging the letters of another word or phrase.
//  In the context of strings, checking if two strings are anagrams of each other means verifying if
//   they contain the same characters in the same quantities, regardless of the order of those characters.
// NOTE: This method is case-insensitive and ignore the white spaces.

const isAnagram = (str, str1) => {
    let duplicated = ""
    let strF = str.split("").join(" ")
    for (let i = 0; i <= str1.length; i++) {
        if(strF.toLowerCase().includes(str1[i])) {
        strF = strF.replace(str1[i], " ")
        duplicated +=str1[i] 
        }
    }
    return console.log(duplicated === str1)
}
isAnagram("Apple", "Peach")
isAnagram("listen", "silent")
isAnagram("astronomer", "moon starer")
isAnagram("CINEMA", "iceman")
isAnagram("123", "1234")

//Task 6 
// Write a function named count() which takes an array of numbers and a boolean value as 
// arguments. It will return the total count of the even numbers if the boolean value is 
// true. And return the total count of the odd numbers if the boolean value is false.
const cosnt = (arr, bool) => {
    let count = 0
    for(let i = 0; i < arr.length ; i++) {
        if(bool === true && arr[i] % 2 === 0) count ++ 

        else if (bool === false && arr[i] % 2 !== 0)  count ++
    }
    return console.log(count)
}
count([1, 5, 10], true)
count([3, 7, 2, 5, 10], false)
count([-1, 1, -2, 2], true)
count([0, -1, 15, 1], false)
count([1, 2, 3, 4, -4], true)

//Task 7
// Write a function named sumDigitsDouble() which takes a string and returns the sum of the 
// digits in the given String multiplied by 2. Return -1 if the given string does not have any 
// digits. Ignore negative numbers.

function sumDigitsDouble (string){
    let num3 = 0
    for (let word of string){
        if ('0123456789'.includes(word)) num3 += Number(word)
    }
    if(num3 === 0) return -1
    return num3 * 2
}
console.log(sumDigitsDouble("Javascript"));
console.log(sumDigitsDouble("23abc45"));
console.log(sumDigitsDouble("Hi-23"));
console.log(sumDigitsDouble("ab12"));
console.log(sumDigitsDouble("n0numh3r3"));
//Task 8
// Write a function named countOccurrence() which takes two string arguments and returns
//  how many times that the first string can form the second string.
const countOccurrence = (str, str1) => {
    let duplicated = ""
    for (let i = 0; i < str.length; i++) {
        if(str1.toLowerCase().includes(str[i].toLowerCase())) {
        duplicated +=str[i]
        }
    }
    if(duplicated.length >= str1.length) return Math.floor(duplicated.length / str1.length)
    else return 0
}
console.log(countOccurrence("Javascript", "Java"))
console.log(countOccurrence("Hello", "World"))
console.log(countOccurrence("Can I can a can", "anc"))
console.log(countOccurrence("Hello", "l"))
console.log(countOccurrence("IT conversations", "IT"))
//Task 1
// Write a function named makeNegative() that takes a number and returns its negative value.
// NOTE: The number can be negative already, in which case no change is required.
// NOTE: Zero (0) is not checked for any specific sign. Negative zeros make no mathematical 
// sense. So, zero will stay as zero.

const makeNegative = (num) => {
    if(num < 0) return num
    else if(num > 0) return - num
    else return 0
}
console.log(makeNegative(10));
console.log(makeNegative(-7));
console.log(makeNegative(0));
console.log(makeNegative(0.45));

//Task2
// Write a function isSumEvenOrOdd() which takes three numbers as arguments and determines 
// if the sum of these numbers is odd or even.

const isSumEvenOrOdd = (num, num1, num2) => (num + num1 + num2) % 2 === 0 ? "even" : "odd"

console.log(isSumEvenOrOdd(0, 1, 4))

//Task3
// Write a function named decimal2() which takes an array of numbers as an argument and 
// returns the array with the same numbers rounded up or down and represented with only two decimals.

const decimal2 = (arr) => arr.map(num => Number(num.toFixed(2)))

console.log(decimal2([94.356, 8.9752]))
console.log(decimal2([76.62, 128.4, 84] ))
console.log(decimal2([20987, 3.53245, 12.345, 32.9]))
console.log(decimal2([]))
console.log(decimal2([4.35623, 8.9742]))

//Task 4
// Write a function named myPow() which takes two numbers, x and n, as its arguments and returns 
// x to the power of n without using Math.pow(). 3 to the power of 3 is 3*3*3 = 27. 
// NOTE: Any number to the power of 0 equals 1. Any number to the power of 1 equals the number itself.

const myPow = (x, n) =>  n > 0 ? x ** n : 1

console.log(myPow(3,3))
console.log(myPow(10,1))
console.log(myPow(100, 0))
console.log(myPow(1, 1))
console.log(myPow(4, 2))
console.log(myPow(0, 0))
console.log(myPow(5, 3))
// Task 5
// Write a function named findLongestWord() which takes a string as input and returns the longest 
// word in the string.
// NOTE: If the string is empty or consists of spaces only, then return empty string.NOTE:
//  If the string consists of multiple words having the longest word, then return the first occurrence.

const findLongestWord = (str) => str.split(" ").sort((a, b) => b.length - a.length)[0]
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'))
console.log(findLongestWord('This is a sample string for testing'))
console.log(findLongestWord('One two ten'))
console.log(findLongestWord(''))
console.log(findLongestWord('   '))

// Task 1
// Write a function named countVC() which takes a string argument and returns an object with the 
// count of vowels and consonants.

const countVC = (str) => {
    let vowels = 0
    let consonants = 0
    let word = str.split('').filter(char => ((char.toLowerCase() >= 'a' && char.toLowerCase()<= 'z')))
    word.forEach(char => ('aouei').includes(char.toLowerCase()) ? vowels ++ : consonants ++)
    return {vowels, consonants}
}
console.log(countVC('Hello'))
console.log(countVC('Programming'))
console.log(countVC('123AbC'))
console.log(countVC('123!@#xyz'))
console.log(countVC(''))

//Task 2
// Write a function named countChars() which takes a string argument and returns an object with 
// the count of letters, numbers, and specials.
// NOTE: If the count of a category is 0 then it should not be in the object. Also spaces do 
// not count towards any category

const countChars = (str) => {
    let obj = { 
        letters: 0,
        specials: 0, 
        numbers: 0
    }

    for(let char of str) {
        if((char.toLowerCase() >= 'a' && char.toLowerCase()<= 'z')) obj.letters ++
        else if (('0987654321').includes(char)) obj.numbers ++
        else if(char !== ' ') obj.specials++
    }
    Object.keys(obj).forEach(key => {
        if(obj[key] === 0) delete obj[key]
    })
    return console.log(obj)
}
countChars("Hello")
countChars("Programming 123")
countChars("123AbC!@#")
countChars("0987654321")
countChars("   ")
countChars("")

//Task 3
// Write a function named maxOccurrences() which takes a string argument and returns the 
// character that appears the most number of times in the string.
// NOTE: If there is a tie, return the first one that appears in the string. This 
// task is case sensitive. Ignore spaces. If the string is empty or consist of spaces
//  only, then return an empty string.

const maxOccurrences = (str) => {
    let duplicate = ""
    let final = ""
    for (let i = 0; i <= str.length - 1; i++) {
        for(let j = 0;j <= str.length -1; j++){
            if(str[i] === str[j] && str[i] !== " " && str[i] !== "") duplicate += str[j]
        }
        if(duplicate.length > final.length) final = duplicate
        duplicate = ""
    }
    return final.length >= 1 ?  console.log(final[0]) : console.log("")
}
maxOccurrences("Hello")
maxOccurrences("Occurrences")
maxOccurrences("    ab   ")
maxOccurrences("12   3  21")
maxOccurrences("    ")
maxOccurrences("")
//Task 4
// Write a function named starOut() which takes a string argument and returns it back with
//  every star removed as well as the right and left of the star.
// NOTE: If there are 2 stars next to each other than remove the next non star
// So "ab*cd" yields "ad" and "ab**cd" also yields "ad".

const starOut = (string)=> {
    for (const char of string.split(' ')) {
        if (char.includes('*')) 
            return char.replaceAll('*', '').slice(0, 1) + char.replaceAll('*', '').slice(-1)
    }
    return string
}
console.log(starOut("ab*cd"))
console.log(starOut("ab**cd"))
console.log(starOut("xm*sm*sy"))
console.log(starOut("abc"))
console.log(starOut("***"))
console.log(starOut("   "))
console.log(starOut(""))
//Task 5
// Write a function named romanToInt() which takes a string roman numeral as its arguments 
// and return the roman numeral converted to the number. A roman numeral is a set of symbols 
// that add up to a number. CXII -> 100+10+1+1 -> 112

const romanToInt = (str) => {
    const romanValue = {I: 1, V: 5, X: 10, L:50, C: 100, D: 500, M: 1000}
    let count = 0
    romanString = Object.keys(romanValue).join("")
    for(const [key, value] of Object.entries(romanValue)) {
        for (let i = 0; i < str.length ; i++) {
            if(str[i] === key) {
                if(romanString.includes(str[i + 1]) && str[i] === "I" && str[i + 1] !== "I") count += value - 2
                else count += value
            }
        }
    }
    return console.log(count)
}
romanToInt('I')
romanToInt('IV')
romanToInt('CXII')
romanToInt('MMM')
romanToInt('MMMDCCCLXXXVIII')
romanToInt('MDCLXVI')

//Task1
// Write a function named repeatingX() which takes a string argument and returns true if the 
// letter x is followed by another x. Otherwise, return false.
// NOTE: This method should be case-insensitive.

const repeatingX = str =>{
    str1 =str.toLowerCase()
    for(let i = 0; i < str.length; i++) {
        if(str1[i] === str1[i + 1] && 'xX'.includes(str1[i]))
        return true
    }
    return false
}
console.log(repeatingX("xTechxGlobalx"))
console.log(repeatingX("Hello Xx World"))
console.log(repeatingX("x x"))
console.log(repeatingX(""))
console.log(repeatingX("xxxxx"))

//Task2
// Write a function named isPerfectSquare() which takes a number as an argument and checks 
// if it is a perfect square. It returns true if the number is a perfect square and false otherwise.
// NOTE: A perfect square is a number that can be expressed as the product of an integer 
// by itself or as the second exponent of an integer. For example, 25 is a perfect square because 
// it is the product of integer 5 by itself, 5 × 5 = 25. However, 21 is not a perfect square number 
// because it cannot be expressed as the product of two same integers.

const isPerfectSquare = (num) => {
    const num1 = Math.floor(Math.sqrt(num))
    return console.log(num1 * num1 === num )
}
console.log(isPerfectSquare(25))
console.log(isPerfectSquare(24))
console.log(isPerfectSquare(0))
console.log(isPerfectSquare(1))
console.log(isPerfectSquare(-1))
console.log(isPerfectSquare(144))
//Task3
// Write a function named convertTemperature() which takes a number and a string arguments to be
//  considered as a temperature value and a unit (either Celsius or Fahrenheit) as arguments and 
//  converts the temperature to the other unit.
// NOTE: Use below formulas to convert temperature:
// Celsius to Fahrenheit: temp * 9/5) + 32
// Fahrenheit to Celsius: temp - 32) * 5/9

const convertTemperature = (num, str) => str === 'Celsius' ? (num * (9/5)) + 32 : (num - 32) * (5/9)
console.log(convertTemperature(100, 'Celsius'))
console.log(convertTemperature(32, 'Fahrenheit'))
console.log(convertTemperature(0, 'Celsius'))
console.log(convertTemperature(212, 'Fahrenheit'))
console.log(convertTemperature(-40, 'Celsius'))
console.log(convertTemperature(-40, 'Fahrenheit'))

//Task4 
// Write a function named sumOfEvenNumbers() which takes an array as an argument and returns
//  the sum of all the even numbers in an array.

const sumOfEvenNumbers = (arr) => arr.reduce((sum, num) => num % 2 === 0 ? sum + num : sum,  0)

console.log(sumOfEvenNumbers([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]))
console.log(sumOfEvenNumbers([ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ] ))
console.log(sumOfEvenNumbers([ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ] ))
console.log(sumOfEvenNumbers([]))
console.log(sumOfEvenNumbers( [ 1, 2, 3, 4, 5 ] ))
console.log(sumOfEvenNumbers( [ 10, 20, 30, 40, 50 ]))

// Task5
// Write a function named capsOdds() which takes an array argument and returns the array 
// with all the odd index elements capitalized (converted to uppercase).

const capsOdds = arr => arr.map(x => arr.indexOf(x) % 2 !== 0 ? x.toUpperCase() : x)
console.log(capsOdds(["Hello", "World"]))
console.log(capsOdds(["Jan", "Feb", "Mar", "Apr"]))
console.log(capsOdds(["Apple", "Banana", "123", "456", "Peach", "Kiwi"]))
console.log(capsOdds([]))
console.log(capsOdds(["John !@#$%", "^&*() Doe"]))
//Task 1
// Write a function named toCamelCase() which takes a string as its argument and returns a
//  new string in camelCase. Assume the string only contains letters and spaces

const toCamelCase =  str => {
    const strCamel = str.trim().split(" ")
    let result = ""
    for(let el of strCamel) {
        if(strCamel.length === 1) return console.log(strCamel.join())
        else if(strCamel.indexOf(el) === 0) result += el.toLowerCase()
        else result += el.slice(0, 1).toUpperCase() + el.slice(1).toLowerCase()
    }
    return console.log(result)
    }
    toCamelCase('first name')
    toCamelCase('last   name')
    toCamelCase('   ZIP CODE')
    toCamelCase('I Learn Java Script')
    toCamelCase('helloWorld')
    
    //Task 2
    // Write a function named toSnakeCase() which takes a string as its argument and returns a new 
    // string in snake_case. Assume the string only contains letters and spaces
    // NOTE: In snake case words are separated by underscores (_) and are all lowercase.
    
    const toSnakeCase = str => {
        const strSnake = str.split(' ')
        let arr = []
    
        for(const el of strSnake) if(el.length >= 1) arr.push(el)
        return arr.join("_").toLowerCase()
    }
    console.log(toSnakeCase('first name'))
    console.log(toSnakeCase('last  name'))
    console.log(toSnakeCase('    I love Java Script'))
    console.log(toSnakeCase('already_snake_case'))
    console.log(toSnakeCase('hello'))
    
    //Task 3
    // Write a function named alternatingCases() which takes a string argument and returns the string 
    // with alternating capitalization.
    // NOTE: The first letter should always be uppercase and non-letter characters are ignored.
    
    const alternatingCases = str =>  str.split(" ").map(value => {
        return value.split('').map((value1, index) => index % 2 === 0 ? value1.toUpperCase(): value1.toLowerCase()).join("")}).join(" ")
     
    
    console.log(alternatingCases("Hello"))
    console.log(alternatingCases("basketball"))
    console.log(alternatingCases("Tech Global"))
    console.log(alternatingCases(""))
    console.log(alternatingCases("123!@#aB"))
    //Task 4
    // Write a function named isNeutral() that takes two strings comprised of + and -, and return a
    //  new string which shows how the two strings interact in the following way:
    // When positives and positives interact, they remain positive.
    // When negatives and negatives interact, they remain negative.
    // But when negatives and positives interact, they become neutral, and are shown as the number 0.
    // Note: The two strings will be the same length.
    
    const isNeutral = (str, str1) => {
        let result = ""
        for(let i = 0; i < str.length; i++){
            if(str[i] !== str1[i]) result += 0
            else result += str[i]
        }
        return console.log(result)
    }
    isNeutral('-', '+')
    isNeutral('-+', '-+')
    isNeutral('-++-', '-+-+')
    isNeutral('--++--', '++--++')
    isNeutral('+++', '+++')
    //Task 5
    // Write a function named isTrueOrFalse() which takes a string with sets of character/words 
    // separated by space. Looking at the first letter of each word (case insensitive-"A" and "a" 
    // should be treated the same), you need to determine whether it falls into the positive/first
    //  half of the alphabet ("a"-"m") or the negative/second half ("n"-"z"). Return true if there 
    //  are more (or equal) positive words than negative words, false otherwise.
    // NOTE: alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // NOTE: Ignore all the digits, spaces and special characters.
    
    const isTrueOrFalse = str => {
        some = str.toUpperCase().split(' ')
        let positive = 0, negative = 0
        for(const el of some) {
            if("ABCDEFGHIJKLM".includes(el[0])) positive ++
            else negative ++
        }
        return console.log(positive >= negative)
    }
    isTrueOrFalse('A big brown fox caught a bad rabbit')
    isTrueOrFalse('Xylophones can obtain Xenon.')
    isTrueOrFalse('CHOCOLATE MAKES A GREAT SNACK')
    isTrueOrFalse('All FOoD tAsTEs NIcE for someONe')
    isTrueOrFalse('Got stuck in the Traffic')
    //Task 1
// Write a function named toInitials() which takes a string argument considered to be full name
//  and returns initials of the given full name.

// NOTE: Initials should be separated with a space and followed with a period.
// Assume you will always be given first name and last name only. 

const toInitials = str => str.split(' ').map(x => `${x[0]}.`).join(" ")
console.log(toInitials('Joe Doe'))
console.log(toInitials('Alex Reyes'))
console.log(toInitials('Tom Cruise"'))
console.log(toInitials('Bruce Willis'))
console.log(toInitials('Ja Le'))

//Task2
// Write a function named hasNumbers() which takes a string argument and returns true if 
// there is a number and false if there isn’t. 

const hasNumbers = str =>  str.split('').some(x => '01234567890'.includes(x))
console.log(hasNumbers(''))
console.log(hasNumbers('John is 34 years old'))
console.log(hasNumbers('Hello 3'))
console.log(hasNumbers('125$'))
console.log(hasNumbers('    a     '))
console.log(hasNumbers('       '))
console.log(hasNumbers('!@#$%^&*()_+'))
//Task 3
// Write a function named elementLength() which takes an array argument and returns the
//  length of each element as a separate array.

const elementLength = arr => arr.map(x => x.length)
console.log(elementLength([ "Hello", "World" ] ))
console.log(elementLength([ "Apple", "Banana", "Orange", "Pear" ] ))
console.log(elementLength(["BMW", "Mercedes", "Audi" ] ))
console.log(elementLength([] ))
console.log(elementLength([ "Trampoline", "", "Tennis", "Basketball" ] ))
//Task4 
// Write a function named isArraySumEvenOrOdd() which takes an array of numbers and calculates
//  if the sum of its elements is even or odd.
// Note: If the array is empty return even.

const isArraySumEvenOrOdd = arr => {
    let sum = 0
    for(const x of arr) {
        sum += x
    }
    return sum % 2 === 0 ? 'even' : 'odd'
}
console.log(isArraySumEvenOrOdd([]))
console.log(isArraySumEvenOrOdd([ 0, -1, -5 ] ))
console.log(isArraySumEvenOrOdd([ 7,1, 8,1 ] ))
console.log(isArraySumEvenOrOdd([  0,0 ] ))
console.log(isArraySumEvenOrOdd([ 1,1,1,1,1] ))
//Task5 
// Write a function named reverse() which takes a string argument and returns the given string reversed. 

const reverse = str => str.split('').reverse().join('')
console.log(reverse('Hello World'))
console.log(reverse('TechGlobal'))
console.log(reverse('Basketball is fun'))
console.log(reverse(''))
console.log(reverse('Apples 456'))
//Task6
// Write a function named reverseWords() which takes a string argument and returns a string
//  with each word within that string reversed but still in the same order as the initial string. 

const reverseWords = str => str.split(' ').map(x => x.split('').reverse().join('')).join(' ')
console.log(reverseWords('Hello World'))
console.log(reverseWords('TechGlobal'))
console.log(reverseWords('Basketball is fun'))
console.log(reverseWords(''))
console.log(reverseWords('Apples 456'))

//Task1
// Write a function named findMedian() which takes two arrays of numbers as its arguments and return 
// the median of the two sorted arrays. 

// NOTE: The median is the middle number of a sorted array. So the median of [1,3], [2] would be 2.
//  If the array has an even length, you are to find the average of the 2 middle numbers

const findMedian = (arr1, arr2) => {
    const arr = [...arr1,...arr2].sort((a,b) => a - b)
    return arr.length % 2 === 0 ? (arr[arr.length / 2] + arr[(arr.length / 2) - 1]) / 2: arr[Math.floor(arr.length / 2)]
}
console.log(findMedian([1, 3], [2]))
console.log(findMedian([1, 2], [3, 4]))
console.log(findMedian([4], [3]))
console.log(findMedian([4], []))
console.log(findMedian([0], [0, 1]))
//Task2
// Write a function named calculateFactorial() which takes a number as an argument and returns 
// the factorial of that number.
// Note: Factorial is the product of all positive integers less than or equal to a given positive 
// integer and denoted by that integer and an exclamation point. Thus, factorial seven is written 7!, 
// meaning 1 × 2 × 3 × 4 × 5 × 6 × 7. Factorial zero is defined as equal to 1.

const calculateFactorial = (num) => {
    factor = 1;
    for (let i = 1; i <= num; i++ ){
        factor *= i
    } 
    return factor
}
console.log(calculateFactorial(0))
console.log(calculateFactorial(1))
console.log(calculateFactorial(5))
console.log(calculateFactorial(6))
console.log(calculateFactorial(10))
console.log(calculateFactorial(4))
//Task3 
// Write a function named calculateGCD() which takes two numbers as arguments and returns the
//  greatest common divisor of the two numbers.
// NOTE: GCD is a mathematical concept used to describe the largest number that divides two or
//  more integers without leaving a remainder. In other words, it is the largest number that 
//  is a common factor of two or more numbers.

const calculateGCD = (num1, num2) => {
    for(let i = Math.max(num1, num2); i >= 1 ; i--)
        if (num1 % i === 0 && num2 % i === 0) return console.log(i)
}
calculateGCD(8, 12)
calculateGCD(17, 5)
calculateGCD(48, 18)
calculateGCD(0, 5)
calculateGCD(21, 14)
calculateGCD(60, 48)

// //Task4
// Write a function named calculateLCM() which takes two numbers as arguments and returns the 
// least common multiple of the two numbers.
// NOTE: GCD is a mathematical concept used to describe the largest number that divides two 
// or more integers without leaving a remainder. In other words, it is the largest number that 
// is a common factor of two or more numbers.

const calculateLCM = (num1, num2) => {
    for(let i = Math.max(num1, num2); i >= 1 ; i--)
    if (num1 % i === 0 && num2 % i === 0) return console.log((num1 * num2) / i)
}
calculateLCM(8, 12)
calculateLCM(17, 5)
calculateLCM(48, 18)
calculateLCM(0, 5)
calculateLCM(21, 14)
calculateLCM(60, 48)