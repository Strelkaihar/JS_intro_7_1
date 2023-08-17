// Task1
// Requirement:
// Write a program that extracts expected values from a given String using JS String functions.
// "I like apples and oranges"                         -> "APPLE"
// "Java is not a scripting programming language"      -> "JavaScript”
// "I don't like books"                                -> "I like books"
let str1 = "I like apples and oranges";
let str2 = "Java is not a scripting programming language";
let str3 = "I don't like books";
console.log(str1.slice(7, 12).toUpperCase());
console.log(str2.slice(0, 4) + str2.slice(14, 15).toUpperCase() + str2.slice(15, 20));
console.log(str2.slice(0, 4) + str2[14].toUpperCase() + str2.slice(15, 20));
console.log(str3.replace(" don't", ""));
console.log(str3[0] + str3.slice(7));

//Task 2
// Assume that you are given a String of any length.
// Find:
// -The length of the String
// -First char in the String
// -Last char in the String
// -Check if the String contains any vowel letters
//  -if it has any vowel, then print true
//  -Else, print false
//  Vowels = a, e, i, u, o, A, E, I, U, O
let sentence1 = "JavaScript";
console.log(sentence1.length); // 10
console.log(sentence1[0])// J
console.log(sentence1.charAt(sentence1.length - 1));//t
console.log(sentence1[sentence1.length - 1]);//t
console.log(sentence1.toLowerCase().includes("a") || sentence1.toLowerCase().includes("e") || sentence1.toLowerCase().includes("i") || 
sentence1.toLowerCase().includes("u") || 
sentence1.toLowerCase().includes("o"));  // True or false

//Task 3 
// Requirement:
// Assume that you are given a String of any odd length.
// Find the middle character for the given String.

let nam1 = "yaZnbx";
let nam2 = "MaNGGam";
console.log(nam1[(nam1.length - 1) / 2]);
console.log(nam2[(nam2.length - 1) / 2]);
console.log(nam1.charAt(Math.floor(nam1.length / 2)));

//Task 4
// Assume that you are given a String of any even length including empty.
// Find the middle 2 characters for the given String.
let name = "JavaScript";
console.log(name.charAt((name.length / 2 - 1)) + name.charAt((name.length / 2)));
console.log(name.slice((name.length / 2 - 1) ,(name.length / 2 + 1))); 

// Task 5
// Requirement:
// Write a program that divides the given String. Assume the length of the String will at least
// be 4.
// -Find and print the first two characters
// -Find and print the last two characters
// -Find and print all the middle characters other than first and last 2 characters

let name1 = "JavaScript";
console.log(name1.slice(0 , 2));
console.log(name1.slice(name1.length -2));
console.log(name1.slice(2, name1.length - 2));

//Task 6
// Requirement:
// Assume that you are given a String that has at least 2 characters.
// If first 2 and last 2 characters are same, then print true. Otherwise, print false.
let name2 = "abbb";
console.log(name2.slice(0, 2) === name2.slice(name2.length - 2));
console.log(name2.startsWith(name2.slice(0, 2)) && name2.endsWith(name2.slice(0, 2)));
console.log(name2.slice(0, 2).includes(name2.slice(name2.length - 2)));

// Task 7 
// Write a program that gets rid of first and last characters of given two String values. 
// Then, add these two String values to each other and print the result.
let ver1 = "12334";
let ver2 = "pineapple";
let ver3 = ver1.slice(1, ver1.length - 1);
let ver4 = ver2.slice(1, ver2.length - 1);

console.log(`Result is ${ver3}${ver4}`);
console.log((ver1.slice(1, ver1.length - 1)) + (ver2.slice(1, ver2.length - 1)));

 
// Task 8 
// Requirement:
// Write a program that checks if a given String starts and ends with xx.
// -If given String starts and ends with xx, then print true.
// -Otherwise, print false
let name3 = "xxcjksadfkhasxx";

console.log(name3.slice(0, 2) === "xx" && name3.slice(name3.length -2) === "xx");
console.log(name3.startsWith("xx") && name3.endsWith("xx"));

// Task 9
// Write a program that swaps the first and last word of a given sentence as a String.

let name4 = "I love apple";
let name5 = "JavaScript is nice to learn"

console.log(name4.slice(name4.lastIndexOf(" ") + 1), name4.slice(name4.indexOf(" ") + 1, name4.lastIndexOf(" ")),name4.slice(0, name4.indexOf(" ")));
let lastWord = name4.slice(name4.lastIndexOf(" ") + 1);
let middleWord = name4.slice(name4.indexOf(" "), name4.lastIndexOf(" ")+ 1);
let firstWord = name4.slice(0, name4.indexOf(" "));

//Task 10
// Requirement:
// Write a program that counts the number of words in a given sentence as a String.
// Assume you will not be given redundant whitespaces and at least one word.
// Test Data 1:
// let s8 = "Good morning";
// Expected Result 1:
// 2
// Test Data 2:
// let s7 = "Hello";
// Expected Result 2:
// 1
// Test Data 3:
// let s7 = "I like Apple";
// Expected Result 3:
// 3
// Test Data 4:
// let s7 = "JavaScript is nice to learn";
// Expected Result 4:
// 5

let s9 = "Hello is d";
console.log(s9.length - s9.replaceAll(" ", "").length + 1);
