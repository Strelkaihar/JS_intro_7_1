// Write a program that generates a random number between 1 and 10 (both inclusive).
// If the random number is even, print true.
// Otherwise, print false.
let num1 = Math.floor(Math.random() * 10 + 1);
console.log(num1);
console.log(num1 % 2 === 0);

// Write a program that generates a random number between 1 and 10 (both inclusive).
// If the random number is odd, print true.
// Otherwise, print false.
let num2 = Math.floor(Math.random() * 10 + 1);
console.log(num2);
console.log(num2 % 2 !== 0);

// Write a program that generates a random number between -5 and 5 (both inclusive).
// If the random number is positive, print true.
// Otherwise, print false.
let num3 = Math.floor(Math.random() * 11 - 5);
console.log(num3);
console.log(num3 >= 0);
// Write a program that generates a random number between -5 and 5 (both inclusive).
// If the random number is negative, print true.
// Otherwise, print false.
let num4 = Math.floor(Math.random() * 11 - 5);
console.log(num4);
console.log(num4 < 0);
// Write a program that generates a random number between 1 and 50 (both inclusive).
// If the random number is divisible by 5, print true.
// Otherwise, print false.
let num5 = Math.floor(Math.random() * 50 + 1);
console.log(num5);
console.log(num5 % 5 ===0);
// Write a program that generates a random number between 1 and 50 (both inclusive).
// If the random number is divisible by 7, print true.
// Otherwise, print false.
let num6 = Math.floor(Math.random() * 50 + 1);
console.log(num6);
console.log(num6 % 7 === 0);
// Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
// Calculate the sum of the numbers and print it.
let num7 = Math.floor(Math.random() * 10 + 1);
let num8 = Math.floor(Math.random() * 10 + 1);
console.log(num7 + num8);
// Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
// Calculate the absolute difference of the numbers and print it.
let num9 = Math.floor(Math.random() * 10 + 1);
let num10 = Math.floor(Math.random() * 10 + 1);
console.log (num9 ,num10)
console.log(Math.abs(num9 - num10));
// Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
// Calculate the product of the numbers and print it.
let rnum1 = Math.floor(Math.random() * 10 + 1);
let rnum2 = Math.floor(Math.random() * 10 + 1);
console.log(rnum1, rnum2);
console.log(rnum1 * rnum2);
// Write a program that generates a random number between 1 and 10 (both inclusive).
// Calculate the square of the number and print it.
let rnum3 = Math.floor(Math.random() * 10 + 1);
console.log(rnum3);
console.log(rnum3 * rnum3);
// Write a program that generates a random number between 1 and 10 (both inclusive).
// Calculate the cube of the number and print it.
let rnum4 = Math.floor(Math.random() * 10 +1);
console.log(rnum4);
console.log(rnum4 * rnum4 * rnum4);
// Write a program that generates a random number between 1 and 10 (both inclusive) to be considered 
// as a mile unit.
// Convert miles unit to kilometers and print it.
// Please assume that 1 mile equals 1.6 kilometers.
let rnum5 = Math.floor(Math.random() * 10 + 1);
console.log(rnum5);
console.log((rnum5 * 1.6).toPrecision(5));
// Write a program that generates a random number between 1 and 100 
//(both inclusive) to be considered as a kilogram unit.
// Convert kilogram unit to pounds and print it.
// Please assume that 1 kilogram equals 2.2 pounds.
let rnum6 = Math.floor(Math.random() * 100 + 1);
console.log(rnum6);
console.log(rnum6 * 2.2);
// Write a program that generates 2 random numbers between 1 and 3 (both inclusive).
// If the numbers are equal, print true.
// Otherwise, print false.
let rnum7 = Math.floor(Math.random() * 3 + 1);
let rnum71 = Math.floor(Math.random() * 3 + 1);
if (rnum7 === rnum71) console.log(true);
else console.log(false);
// Write a program that generates a random number between 1 and 100 (both inclusive)
//  to be considered as an age.
// If the age is more than or equal to 16, print true.
// Otherwise, print false.
let rnum8 = Math.floor(Math.random() * 100 + 1);
console.log(rnum8);
if (rnum8 >= 16) console.log(true);
else console.log(false);
// Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
// Find the greatest of the numbers and print it.
let rnum9 = Math.floor(Math.random() * 10 +1);
let rnum91 = Math.floor(Math.random() * 10 +1);
console.log(rnum9, rnum91);
console.log(Math.max(rnum9, rnum91));
// Write a program that generates 3 random numbers between 1 and 10 (both inclusive).
// Find the greatest of the numbers and print it.
let rnum10 = Math.floor(Math.random() * 10 +1);
let rnum11 = Math.floor(Math.random() * 10 +1);
let rnum12 = Math.floor(Math.random() * 10 +1);
console.log(rnum10, rnum11, rnum12);
console.log(Math.max(rnum10, rnum11, rnum12));
// Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
// Find the smallest of the numbers and print it.
let rnum13 = Math.floor(Math.random() * 10 +1);
let rnum14 = Math.floor(Math.random() * 10 +1);
console.log(rnum13, rnum14);
console.log(Math.min(rnum13, rnum14));
// Write a program that generates 3 random numbers between 1 and 10 (both inclusive).
// Find the smallest of the numbers and print it.
let rnum15 = Math.floor(Math.random() * 10 +1);
let rnum16 = Math.floor(Math.random() * 10 +1);
let rnum17 = Math.floor(Math.random() * 10 +1);
console.log(rnum15, rnum16, rnum17);
console.log(Math.min(rnum15, rnum16, rnum17));
// Write a program that generates 3 random numbers between 1 and 10 (both inclusive).
// Calculate the average of the numbers and print it.
let rnum18 = Math.floor(Math.random() * 10 +1);
let rnum19 = Math.floor(Math.random() * 10 +1);
let rnum20 = Math.floor(Math.random() * 10 +1);
console.log(rnum18, rnum19, rnum20);
console.log((rnum18 + rnum19 + rnum20) / 3);
// Write a program that generates 3 random numbers between 1 and 10 (both inclusive).
// Calculate the greatest and the smallest numbers and print their absolute difference.
let rnum21 = Math.floor(Math.random() * 10 +1);
let rnum22 = Math.floor(Math.random() * 10 +1);
let rnum23 = Math.floor(Math.random() * 10 +1);
console.log(rnum21, rnum22, rnum23);
console.log(Math.abs(Math.max(rnum21, rnum22, rnum23) - Math.min(rnum21, rnum22, rnum23)));
// Write a program that generates a random number between 1 and 100 (both inclusive).
// Find which quarter of the range the number falls into and print it.
// 1st quarter is 1-25
// 2nd quarter is 26-50
// 3rd quarter is 51-75
// 4th quarter is 76-100
let rnum24 =Math.floor(Math.random() * 100 + 1);
console.log(rnum24);
if (rnum24 <= 25) console.log("1st quarter is 1-25");
else if (rnum24 <= 50) console.log("2nd quarter is 26-50");
else if (rnum24 <= 75) console.log("3rd quarter is 51-75");
else if (rnum24 <= 100) console.log("4th quarter is 76-100");
// Write a program that generates a random number between 1 and 100 (both inclusive).
// Find which half of the range the number falls into and print it.
// 1st half is 1-50
// 2nd half is 51-100
let rnum25 = Math.floor(Math.random() * 100 + 1);
console.log(rnum25);
if (rnum25 <= 50) console.log("1st half is 1-50");
else console.log("2nd half is 51-100");
// Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
// If the sum of the random numbers is even, print true.
// Otherwise, print false.
let rnum26 = Math.floor(Math.random() * 10 + 1);
let rnum27 = Math.floor(Math.random() * 10 + 1);
console.log(rnum26, rnum27);
if ((rnum26 + rnum27) % 2 === 0) console.log(true);
else console.log(false);
// Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
// If the product of the random numbers is odd, print true.
// Otherwise, print false.
let rnum28 = Math.floor(Math.random() * 10 + 1);
let rnum29 = Math.floor(Math.random() * 10 + 1);
console.log(rnum28, rnum29);
if ((rnum28 * rnum29) % 2 !== 0) console.log(true);
else console.log(false);
// Write a function named as rectangleArea()which calculates the area of a rectangle when invoked.
// NOTE: Assume the sides of the rectangle are x and y.
// Conversion Formula: Area = x * y
function rectangleArea(x, y){
    return x * y;
}
console.log(rectangleArea(3,7));
// Write a function named as rectanglePerimeter() which calculates the perimeter of a rectangle when 
// invoked.
// NOTE: Assume the sides of the rectangle are x and y.
// Conversion Formula: Perimeter = 2 * (x + y)
function rectanglePerimeter(x, y) {
    return (x + y) * 2;
}
console.log(rectanglePerimeter(5,4));
// Write a function named as squareArea() which calculates the area of a square when invoked.
// NOTE: Assume the side of the square is x.
// Conversion Formula:Area = x * x
function squareArea(x) {
    return x * x;
}
console.log(squareArea(5));
// Write a function named as squarePerimeter() which calculates the perimeter of a square when invoked.
// NOTE: Assume the side of the square is x.
// Conversion Formula: Perimeter = 4 * x
function squarePerimeter(x) {
    return 4 * x;
}
console.log(squarePerimeter(5));
// Write a function named as doubleWord() which takes a string word as an argument and returns the 
// given word back doubled when invoked.
// NOTE: Assume you will not be given an empty word.
function doubleWord(str) {
    return str + str;
}
console.log(doubleWord("Hello"));
// Write a function named as firstCharacter() which takes a string word as an argument and returns the 
// first character of the given word when invoked.
// NOTE: Assume you will not be given an empty word.
function firstCharacter(str) {
    return str[0];
}
console.log(firstCharacter("Hello"));
// Write a function named as firstTwoCharacters() which takes a string word as an argument and returns 
// the first two characters of the given word when invoked.
// NOTE: If the given word does not have 2 or more characters, then return the given string back.
function firstTwoCharacters(str) {
    return str.slice(0, 2);
}
console.log(firstTwoCharacters("Hello"));
// Write a function named as lastCharacter() which takes a string word as an argument and returns the last 
// character of the given word when invoked.
// NOTE: Assume you will not be given an empty word.
function lastCharacter(str) {
    return str[str.length - 1];
}
console.log(lastCharacter("GeN"));
// Write a function named as lastTwoCharacters() which takes a string word as an argument and returns 
// the last two characters of the given word when invoked.
// NOTE: If the given word does not have 2 or more characters, then return the string back.
function lastTwoCharacters(str) {
    return str.slice(str.length -2);
}
console.log(lastTwoCharacters("Hello"));
// Write a function named as firstLast() which takes a string word as an argument and returns the first and 
// the last characters of the given word when invoked.
// NOTE: If the given word does not have 2 or more characters, then return the string back.
function firstLast(str) {
    if (str.length > 2) return str[0] + str[str.length - 1];
    else return str;
}
console.log(firstLast("ed"));
// Write a function named as hasFive() which takes a string word as an argument and returns true if given 
// string has at least 5 characters, and false otherwise when invoked.
function hasFive(str){
    if (str.length >5) return true;
    else return false;
}
console.log(hasFive("Global"));
// Write a function named as middle() which takes a string word as an argument and returns the middle 
// character if the string has odd length, and returns the middle two characters if the string has even 
// length when invoked.
// NOTE: If the given word is empty, then return the empty string back
function middle(str) {
    if (str.length % 2 === 0) return str.slice(str.length / 2 - 1, str.length / 2 + 1);
    else return str[Math.floor(str.length / 2)]; //str[(str.length -2) / 2];
}
console.log(middle("Glbal"));
// Write a function named as longer() which takes two string words as arguments and returns the string 
// that has more characters when invoked.
// NOTE: If both of the words have the same length, then return the first string.
function longer(str, str1) {
    if (str.length >= str1.length) return str;
    else return str1
}
console.log(longer("Global", "Tech"));
console.log(longer("Hello", "Hi"));
console.log(longer("Hello", "World"));
// Write a function named as shorter() which takes two String words as arguments and returns the String 
// has less characters when invoked.
// NOTE: if both of the words have the same length, then return the second String.
function shorter(str,str1) {
    if (str.length < str1.length) return str;
    else return str1;
}
console.log(shorter("Tech", "Global"));
console.log(shorter("Hello", "Hi"));
console.log(shorter("Hello", "World"));
// Write a function named as concat() which takes two string words as arguments and returns the words 
// concatenated when invoked.
// NOTE: Concatenation should always be as first string + second string .
function concat(str, str1) {
    return str + str1;
}
console.log(concat("Global", "Tech"));
// Write a function named as startsVowel() which takes a string word as an argument and returns true if 
// given string starts with a vowel letter, and false otherwise when invoked.
// NOTE: Vowel letters are A, E, O, U, I, a, e, o, u, i.
function startsVowel(str) {
    return ("AEOUIaeoui").includes(str[0]);
}
console.log(startsVowel("Apple"));
