// Task 1
// Requirement:
// Assume you are given a number between 1 and 100 (both 1 and 100 are included)
// Find which quarter and half is number in
// 1st quarter is 1-25
// 2nd quarter is 26-50
// 3rd quarter is 51-75
// 4th quarter is 76-100
// 1st half is 1-50
// 2nd half is 51-100

// if(num1 <= 25) {
//     console.log(`${num1} is in the 1st half\n${num1} is in the 1st quarter`);
// }
// else if(num1 <= 50) {
//     console.log(`${num1} is in the 1st half\n${num1} is in the 2nd quarter`);
// }
// else if(num1 <= 75) {
//     console.log(`${num1} is in the 2nd half\n${num1} is in the 3rd quarter`);
// }
// else {
//     console.log(`${num1} is in the 2nd half\n${num1} is in the 4th quarter`);
// }


let num = 51;

if (num <= 50) { 
    console.log(`${num} 1st half is 1-50`); 
    if(num <= 25) console.log(`${num} 1st quarter is 1-25`);
    else console.log(`${num} 2nd quarter is 26-50`);
}
else { 
    console.log(`${num} 2nd half is 51-100`);
    if (num <= 75) console.log(`${num} 3rd quarter is 51-75`);
    else console.log(`${num} 4th quarter is 76-100`);
}
// Task 2
// Requirement:
// Assume you are given 2 numbers to be 0 or 1.
// Print true if they are same number.
// Otherwise, print false

let num1 = 1;
let num2 = 2;
console.log(num1 === num2 ? true : false);
console.log(num1 === num2);
if (num1 === num2) console.log(true);
else console.log(false);
console.log(num1 !== num2 ? false : true);

// Task 3
// Requirement:
// Assume you are given 3 numbers between 1 and 100 (both 1 and 100 are included).
// Print true if they are all even numbers.
// Otherwise, print false
let num31 = 2, num32 = 2, num33 = 6;

console.log(num31 % 2 === 0 && num32 % 2 === 0 && num33 % 2 === 0);
// if (num31 % 2 === 0 && num32 % 2 === 0 && num33 % 2 === 0) console.log(true);
// else console.log(false);

// Task 4
// Requirement:
// Assume you are given a single character.
// Find if the given character is a letter or digit.
let str4 = "5";
if (str4.charCodeAt(0) >= 65 && str4.charCodeAt(0) <= 90 || str4.charCodeAt(0) >= 97 && str4.charCodeAt(0) <= 122) console.log(`${str4} is a letter`);
else console.log(`"${str4}" is a digit`);
if(48 <= str4.charCodeAt(0) && str4.charCodeAt(0) <= 57) console.log(`"${str4}" is a digit`);
else console.log(`"${str4}" is a letter`);
if("0123456789".includes(str4)) console.log(`"${str4}" is a digit`);
else console.log(`"${str4}" is a letter`);

// Task 5
// Requirement:
// Assume you are given a single character.
// Find if the given character is a lowercase or an uppercase letter.
// NOTE: if the character is not a letter, print "INVALID INPUT"
let str5 = "D";
if (str5.charCodeAt(0) >= 65 && str5.charCodeAt(0) <= 90) console.log(`"${str5}" is a uppercase letter`);
else if (str5.charCodeAt(0) >= 97 && str5.charCodeAt(0) <= 122) console.log(`"${str5}" is a lowercase letter`);
else console.log("INVALID INPUT");

//Task 6
// Requirement:
// Assume you are given a single character.
// Find if the given character is a special character or not.
let str6 = "{";
let str61 = str6.charCodeAt(0);
if ((str61 >= 65 && str61 <= 90) || (str61 >= 97 && str61 <= 122) ||
(str61 >= 48 && str61 <= 57) || str61 === 32) console.log(`"${str6}" is not a special`);
else console.log(`"${str6}" is a special`);

//Task 7
// Requirement:
// Assume you are given a single character.
// Find if the given character is a vowel or not.
// NOTE: if the character is not a letter, print "INVALID INPUT"
// NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U
let var7 = "a";
let var71 = var7.charCodeAt(0);
if ((var71 >= 65 && var71 <= 90) || (var71 >= 97 && var71 <= 122)) {
    if ("ariouAEIOU".includes(var7))
    console.log(`"${var7}" is a vowel`);
    else console.log(`"${var7}" is not a vowel`);
}
else console.log("INVALID INPUT");

// Task 8
// Requirement:
// Assume you are given a single character.
// Find if the given character is a letter, digit, whitespace or special.
let var8 = " ";
let var81 = var8.charCodeAt(0);
if ((var81 >= 65 && var81 <= 90) || (var81 >= 97 && var81 <= 122)) console.log(`"${var8}" is a letter`);
else if (var81 >= 48 && var81 <= 57) console.log(`"${var8}" is a letter`);
else if (var81 === 32) console.log(`"${var8}" is a whitespace`);
else console.log(`"${var8}" is a special character`);

