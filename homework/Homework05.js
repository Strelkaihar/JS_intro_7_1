//Task 1 
// Requirement:
// Write a function named countPos() which takes an array of numbers as an 
// argument and returns how many elements are positive​ when invoked. 

function countPos(array) {
    let count = 0;
    array.forEach(number => number > 0 ? count ++ : count)
    return count;
}
console.log(countPos([-45, 0, 0, 34, 5, 67]));
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));
console.log(countPos([0, -1, -2, -3]));

//Task 2
// Write a function named countA() which takes a string argument and returns how
//  many A or a there are in the given string when invoked.

function countA (str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        str[i].toLowerCase().includes("a") ? count ++ : count;
    }
    return count;
}
console.log(countA("TechGlobal is a QA bootcamp"));
console.log(countA("QA stands for Quality Assurance"));
console.log(countA("Cypress"));

//Task 3
// Requirement: 
// Write a function named as countVowels() which takes a string word as an 
// argument and returns the count of the vowel letters when invoked.
// NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
function countVowel(str) {
    let countVow = 0;
    for(let i = 0; i < str.length; i++) ("AEOUI").includes(str[i].toUpperCase()) ? countVow ++ : countVow;
    return countVow;
}
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

function factorial (number) {
    factor = 1;
    for (let i = 1; i <= number; i++ ){
        factor *= i
    } 
    return factor;
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


