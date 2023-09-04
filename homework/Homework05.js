

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

//Task 7
// Write a function named as isPalindrome() which takes a string word as an argument 
// and returns true if the word is palindrome or returns false otherwise when invoked.
// NOTE: Palindrome: It is a word that is read the same backward as forward
// Examples: kayak, civic, madam
// NOTE: your function should ignore case sensitivity

function isPalindrome (str) {
    // return str.toLowerCase().split("").toString() === str.toLowerCase().split("").reverse().toString();
    
    const word = str.toLowerCase().split("");
    const reverseWord = str.toLowerCase().split("").reverse()
    for (let i = 0; i < str.length; i++){
        if (word[i] !== reverseWord[i]) return false;
        
    }
    return true;
}
console.log(isPalindrome("Hello"));
console.log(isPalindrome("Kayak"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("abba"));
console.log(isPalindrome("123454321"));
console.log(isPalindrome("ab c"));
console.log(isPalindrome("A"));


//Task 8
// Write a function named as countMultipleWords() which takes an array as an 
// argument and returns the count of the elements that has multiple words when invoked.
// NOTE: Be careful about the extra whitespaces before and after the array element.

function countMultipleWords(array) {
    // return array.filter(arr => arr.toLowerCase().trim() === arr).length
    let count = 0;
    for(const word of array) {

    }

}
console.log(countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]))
console.log(countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]))

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
