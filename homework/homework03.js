//Task 1
// Write a  program that generates 3 random numbers between 1 to 100 (1 and 100 are included)

// Print true if the average of the random numbers is greater or equals 50. 
// Print false if the average of the random numbers is less than 50.

let num1 = Math.floor(Math.random() * 100 + 1);
let num2 = Math.floor(Math.random() * 100 + 1);
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