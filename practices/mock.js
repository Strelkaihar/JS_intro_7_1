// Double or Triple the Word
// Write a function named as doubleOrTripleWord() which takes a string word as an argument 
// and returns the given word back tripled if the string length is even or doubled if the string length 
// is odd when invoked.

const doubleOrTripleWord = (str) => {
    if(str.length % 2 === 0) return console.log(str + str + str)
    return console.log(str + str)
}
doubleOrTripleWord("Tech")
doubleOrTripleWord("Techd")

// Write a function named as firstlastWord() which takes a string word as an argument and 
// returns the first and last words from the given string when invoked.
// NOTE: Return empty string if the given string does not have any word.
const firstlastWord = (str) => {
    return console.log(str.slice(0, str.indexOf(" ")) + str.slice(str.lastIndexOf(" ") + 1))
}
firstlastWord("Hello asdasd  Word")

// Write a function named hasVowel() which takes a string argument and returns true if the 
// string has a vowel, returns false if the string doesn’t contain any vowel letter.
// NOTE: Vowels are = a, e, o, u, i.
// NOTE: Ignore upper/lower cases.
const hasVowel = (str) => str.split("").some(char => ("aeoui").includes(char.toLowerCase()));
console.log(hasVowel("java"))
console.log(hasVowel(""))
console.log(hasVowel("1234"))

// Write a function named as startVowel() which takes a string word as an argument and returns 
// true if given string starts with a vowel, and false otherwise when invoked.
// NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U
const startVowel = (str) => {return ("aeiou").includes(str[0].toLowerCase())}
console.log(startVowel("Hello"))

// Write a function named averageOfEdges() which takes three number arguments and will 
// return average of min and max numbers.
const averageOfEdges = (n1, n2, n3) => {
    return console.log((Math.max(n1, n2, n3) + Math.min(n1, n2, n3)) / 2)
}
averageOfEdges(-2, -2, 10);
// Write a function named replaceFirstLast() which takes a string argument and returns a new 
// string with the first and last characters replaced.
// NOTE: If the length is less than 2, return an empty string.
// NOTE: Ignore extra spaces before and after the string.
const replaceFirstLast = (str) => {
    return str[str.length - 1] + str.slice(1, str.length - 1) + str[0];
}
console.log(replaceFirstLast("Hello"))

// Write a function named as swap4() which takes a string word as an argument and returns the 
// string back with its first and last 4 characters swapped when invoked.
// NOTE: Return empty string if the given string does not have 8 or more characters.  
const swap4 = (str) => {
    if(str.length < 8) return ""
    return str.slice(str.length - 4) + str.slice(4, str.length - 4) + str.slice(0, 4);
}
console.log(swap4("TechGlobal"))
// Write a function named as swapFirstLastWord() which takes a string word as an argument 
// and returns the string back with its first and last words swapped when invoked.
// NOTE: Return empty string if the given string does not have 2 or more words.
const swapFirstLastWord = (str) => {
    if (!(str.trim().includes(" "))) return ""
    return str.slice(str.lastIndexOf(" ") + 1) + str.slice(str.indexOf(" "), str.lastIndexOf(" ") + 1) + str.slice(0, str.indexOf(" "))
}
console.log(swapFirstLastWord("Hello World"))
console.log(swapFirstLastWord("I like JavaScript"))

// Write a function named countPos() which takes an array of numbers as an argument and 
// returns how many elements are positive when invoked.

const countPos = (array) => array.filter(x => x > 0).length;
console.log(countPos([-45, 0, 0, 34, 5, 67]))

// Write a function named as getEvens() which takes 2 number arguments and returns all the 
// even numbers as an array stored from smallest even number to greatest even number when 
// invoked.
// NOTE: Make your code dynamic that works for any numbers and return empty array if there are 
// no even numbers in the range of given 2 numbers.
// Assume you will not be given negative numbers.
const getEvens = (n1, n2) => {
    let arr = [];
    for(let i = Math.min(n1, n2); i <= Math.max(n1, n2); i++){
        if(i % 2 === 0) arr.push(i);
    }
    return arr
}
console.log(getEvens(2, 7))
// Write a function named as getMultipleOf5() which takes 2 number arguments and returns all the 
// numbers divisible by 5 as an array stored from first found match to last found match when 
// invoked.
// NOTE: Make your code dynamic that works for any numbers and return empty array if there are 
// no numbers divisible by 5 in the range of given 2 numbers.
// Assume you will not be given negative numbers.
const getMultipleOf5 = (n1, n2) => {
    let arr = [];
    for(let i = Math.min(n1, n2); i <= Math.max(n1, n2); i++){
        if(i % 5 === 0) arr.push(i);
    }
    return arr
}
console.log(getMultipleOf5(2, 17))

// Count Negative Numbers
// Write a function named countNeg() which takes an array of numbers as an argument and 
// returns how many elements are negative when invoked.
// Examples:
// countNeg([-45, 0, 0, 34, 5, 67]) -> 1
// countNeg([-23, -4, 0, 2, 5, 90, 123]) -> 2
// countNeg([0, -1, -2, -3]) -> 3

let count = 0;
const countNeg = (array) => {array.forEach(x => x < 0 ? count++ : count)
return count
}
console.log(countNeg([-45, 0, 0, 34, 5, 67]))

// Write a function named countA() which takes a string argument and returns how many A or a 
// there are in the given string when invoked.
// NOTE: Ignore case sensitivity.
// Examples:
// countA("TechGlobal is a QA bootcamp") -> 4
// countA("QA stands for Quality Assurance") -> 5
// countA("Cypress")

const countA = (str) => str.split("").filter(x => x.toLowerCase() === "a").length
console.log(countA("TechGlobal is a QA bootcamp"));
console.log(countA("QA stands for Quality Assurance"));
console.log(countA("Cypress"));

// Write a function named countWords() which takes a string argument and returns the total
// count of words in the given string when invoked.
// NOTE: Be careful about the extra whitespaces before and after the string.
// Examples:
// countWords(" Javascript is fun ") -> 3
// countWords("Cypress is an UI automation tool. ") -> 6
// countWords("1 2 3 4")
const countWords = (str) => str.trim().split(" ").length
console.log(countWords(" Javascript is fun "))
console.log(countWords("Cypress is an UI automation tool. "))
console.log(countWords("1 2 3 4"))

// Write a function named as factorial() which takes a number as an argument and returns the 
// factorial of the number when invoked.
// NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
// n! = n × (n-1) × (n-2) × ... × 2 × 1
// Assume you will not be given a negative number.
// Examples:
// factorial(5) -> 120
// factorial(4) -> 24
// factorial(0) -> 1
// factorial(1) -> 1
const factorial = (num) => {
    let factorial = 1
    for(let i = 1; i <= num; i++){
        factorial *= i;
    }
    return factorial;
}
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));

// Write a function named as count3OrLess() which takes a string word as an argument and 
// returns the count of the words that has 3 characters or less when invoked.
// Examples:
// count3OrLess("Hello") -> 0
// count3OrLess("Hi John") -> 1
// count3OrLess("JavaScript is fun") -> 2
// count3OrLess("My name is John Doe") -> 3
// count3OrLess("") -> 0

const count3OrLess = (str) => str.split(" ").filter(x => x.length <= 3 && x.length >= 1 ).length
console.log(count3OrLess("Hello"))
console.log(count3OrLess("Hi John"))
console.log(count3OrLess("JavaScript is fun"))
console.log(count3OrLess("My name is John Doe"))
console.log(count3OrLess(""))

// Write a function named as removeExtraSpaces() which takes a string word as an argument 
// and returns the string back with all extra spaces removed when invoked.
// Examples:
// removeExtraSpaces("Hello") -> "Hello"
// removeExtraSpaces("   Hello    World   ") -> "Hello World"
// removeExtraSpaces("    JavaScript is      fun") -> "JavaScript is fun”
// removeExtraSpaces("")

const removeExtraSpaces = (str) => str.split(" ").filter(x => x.length >=1).join(" ")
console.log(removeExtraSpaces("Hello"))
console.log(removeExtraSpaces("   Hello    World   "))
console.log(removeExtraSpaces("    JavaScript is      fun"))
console.log(removeExtraSpaces(""))

// Write a function named middleInt() which takes three number arguments and return the middle 
// number. 
// Examples:
// middleInt(1, 2, 2) -> 2
// middleInt(5, 5, 8) -> 5
// middleInt(5, 3, 5) -> 5
// middleInt(1, 1, 1) -> 1
// middleInt(-1, 25, 10) -> 10

const middleInt = (num1, num2, num3) => {
    return [num1, num2, num3].sort((a, b) => a -b)[1]
}
console.log(middleInt(1, 2, 2));
console.log(middleInt(5, 5, 8));
console.log(middleInt(5, 3, 5));
console.log(middleInt(1, 1, 1));
console.log(middleInt(-1, 25, 10));

// Write a function named as firstDuplicate() which takes an array argument and returns the first 
// duplicated number in the array when invoked.
// NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates 
// in the array. For two elements to be considered as duplicated, value and data types of the 
// elements must be same.
// Examples:
// firstDuplicate([ 3, 7, 10, 0, 3, 10 ]) -> 3
// firstDuplicate([ 5, 7, 7, 0, 5, 10 ]) -> 5
// firstDuplicate([ 5, '5', 3, 7, 4 ]) -> -1
// firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]) -> 'abc'
// firstDuplicate([ 1, 2, 3]) -> -1
// firstDuplicate([ 'foo', 'abc', '123', 'bar’ ]) -> -1
const firstDuplicate = (arr) => {
    for(let i = 0; i <= arr.length; i++){
    let first = arr[i];
    let rest = arr.slice(i + 1);
    if(rest.includes(first)) return first
    }
    return -1
}
console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ]));
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ]));
console.log(firstDuplicate([ 5, '5', 3, 7, 4 ]));
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]));
console.log(firstDuplicate([ 1, 2, 3]));
console.log(firstDuplicate([ "foo", "abc", "123", "bar" ]));

// Find All Duplicate Elements
// Write a function named as getDuplicates() which takes an array argument and returns all the 
// duplicated elements in the array when invoked.
// NOTE: Make your code dynamic that works for any array and return empty array if there are no 
// duplicates in the array. For two elements to be considered as duplicated, value and data types 
// of the elements must be same.
// Examples:
// getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]) -> [ 0, -7 ]
// getDuplicates([ 1, 2, 5, 0, 7 ]) -> [ ]
// getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ]) -> [ 'foo', 'a’ ]
// getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]) -> [ ]

const getDuplicates = (arr) => {
    const duplicate = [];
    for(let i = 0; i <= arr.length; i++){
    let first = arr[i];
    let rest = arr.slice(i + 1);
    if(rest.includes(first) && !duplicate.includes(first)) duplicate.push(first)
    }
    return duplicate
}
console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]));
console.log(getDuplicates([ 1, 2, 5, 0, 7 ]));
console.log(getDuplicates(["A", "foo", "12" , 12, 'bar', 'a', 'a', 'foo' ]));
console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]));

// Write a function named as countVowels() which takes a string word as an argument and 
// returns the count of the vowel letters when invoked.
// NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
// Examples:
// countVowels("Hello") -> 2
// countVowels("JavaScript is fun") -> 5
// countVowels("") -> 0
const countVowels = (str) => str.split("").filter(x => ("aeoui").includes(x.toLowerCase())).length
console.log(countVowels("Hello"));
console.log(countVowels("JavaScript is fun"));
console.log(countVowels(""));

// Write a function named as reverseStringWords() which takes a string as an argument and 
// returns string back with each word separately reversed when invoked.
// NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces 
// before and after words in the given string.
// Examples:
// reverseStringWords("Hello World") -> "olleH dlroW"
// reverseStringWords("I like JavaScript") -> "I ekil tpircSavaJ"
// reverseStringWords("Hello") -> "olleH"
// reverseStringWords("") -> ""
// reverseStringWords(" ") -> ""
const reverseStringWords = (str) => str.split(" ").map(x => x.split("").reverse().join("")).join(" ")
console.log(reverseStringWords("Hello World"));
console.log(reverseStringWords("I like JavaScript"));
console.log(reverseStringWords("Hello"));
console.log(reverseStringWords(""));
console.log(reverseStringWords(" "));

// Write a function named as countConsonants() which takes a string word as an argument and 
// returns the count of the consonant letters when invoked.
// NOTE: A letter that is not vowel is considered as a consonant letter.
// Examples:
// countConsonants("Hello") -> 3
// countConsonants("Hello World") -> 8
// countConsonants("JavaScript is fun") -> 12
// countConsonants("") -> 0

const countConsonants = (str) => str.split("").filter(x => !("aeoui").includes(x.toLowerCase())).length
console.log(countConsonants("Hello"));
console.log(countConsonants("Hello World"));
console.log(countConsonants("JavaScript is fun"));
console.log(countConsonants(""));

// Write a function named as countMultipleWords() which takes an array as an argument and 
// returns the count of the elements that has multiple words when invoked.
// NOTE: Be careful about the extra whitespaces before and after the array element.
// Examples:
// countMultipleWords([ "foo", "", "       ", "foo bar", " foo" ]) -> 1
// countMultipleWords([ "foo", "bar", "foobar", " foobar " ]) -> 0
// countMultipleWords([ "f o o", "b a r", "foo bar", " foo bar " ]) -> 4
// countMultipleWords([ ])
const countMultipleWords = (arr) => arr.filter(x => x.trim().split(" ").length >= 2).length
console.log(countMultipleWords([ "foo", "", " ", "foo bar", " foo" ]));
console.log(countMultipleWords([ "foo", "bar", "foobar", " foobar " ]));
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", " foo bar " ]));
console.log(countMultipleWords([ ]));

// Write a function named as fizzBuzz() which takes 2 number arguments and returns a string 
// composed with below requirements when invoked.
// • You need to find all the numbers within the range of given 2 numbers (both inclusive) 
// and store them in a string from smallest to greatest number with a ' | ' separator for each 
// number.
// • You will need to convert numbers divisible by 3 to 'Fizz'
// • You will need to convert numbers divisible by 5 to 'Buzz'
// • You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
// • The rest will stay the same.
// NOTE: Make your code dynamic that works for any numbers.
// Assume you will not be given negative numbers.
// Examples:
// fizzBuzz(13, 18) -> "13 | 14 | FizzBuzz | 16 | 17 | Fizz"
// fizzBuzz(12, 5) -> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"
// fizzBuzz(5, 5) -> "Buzz"
// fizzBuzz(9, 6) -> "Fizz | 7 | 8 | Fizz"

const fizzBuzz = (num1, num2) => {
    let fizzBuzz = [];
    for(let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++){
        if(i % 15 === 0) fizzBuzz.push("FizzBuzz’")
        else if(i % 3 === 0) fizzBuzz.push("Fizz")
        else if(i % 5 === 0) fizzBuzz.push("Buzz")
        else fizzBuzz.push(i)
    }
    return fizzBuzz.join(" | ")
}
console.log(fizzBuzz(13, 18));
console.log(fizzBuzz(12, 5));
console.log(fizzBuzz(5, 5));
console.log(fizzBuzz(9, 6));

// Write a function named as isPalindrome() which takes a string word as an argument and 
// returns true if the word is palindrome or returns false otherwise when invoked.
// NOTE: Palindrome: It is a word that is read the same backward as forward
// Examples: kayak, civic, madam
// NOTE: your function should ignore case sensitivity
// Examples:
// isPalindrome("Hello") -> false
// isPalindrome("Kayak") -> true
// isPalindrome("civic") -> true
// isPalindrome("abba") -> true
// isPalindrome("ab a") -> false
// isPalindrome("123454321") -> true
// isPalindrome("A") -> true
// isPalindrome("") -> true
const isPalindrome = (str) => {
    let reverse = str.toLowerCase().split("").reverse().join("")
    return str.toLowerCase() === reverse
}
console.log(isPalindrome("Hello"));
console.log(isPalindrome("Kayak"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("abba"));
console.log(isPalindrome("ab a"));
console.log(isPalindrome("123454321"));
console.log(isPalindrome("A"));
console.log(isPalindrome(""));

// Prime Number
// Write a function named as isPrime() which takes a number as an argument and returns true if 
// the number is prime or returns false otherwise when invoked.
// NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. It 
// cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even 
// prime number.
// Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31…
// NOTE: The smallest prime number is 2 and there is no negative prime numbers.
// Examples:
// isPrime(5) -> true
// isPrime(2) -> true
// isPrime(29) -> true
// isPrime(-5) -> false
// isPrime(0) -> false
// isPrime(1) -> false
function isPrime(number) {
    if (number < 2) return false
    for (let i = 2; i < Math.sqrt(number); i ++) {
        console.log(Math.sqrt(number))
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


function doubleOtTripleWord(str) {
    if(str.length % 2 === 0) return str + str + str;
    else return str + str
}
console.log(doubleOtTripleWord(" "))

function firstlastWord(str) {
    if(str.includes(" ")) 
    return str.slice(0, str.indexOf(" ")) + str.slice(str.lastIndexOf(" ") + 1)
    else return str + str;
}
console.log(firstlastWord(" "))

const hasVowel = (str) => str.split("").some(char => ("aeoui").includes(char.toLowerCase()));

console.log(hasVowel("Helloo"))

const startVovel = (str) => "aoeui".includes(str[0].toLowerCase())
console.log(startVovel("Aello"))

const averageOfEdges = (num1, num2, num3) => (Math.min(num1,num2,num3) + Math.max(num1, num2, num3) ) / 2
console.log(averageOfEdges(1, 2, 3));
console.log(averageOfEdges(-2, -2, 10));

const replaceFirstLast = (str) => {
    if(str.trim().length < 2) return "";
    else return str[str.length - 1] + str.slice(1, str.length - 1) + str[0];
}
console.log(replaceFirstLast("Hello"))
console.log(replaceFirstLast("   A   "))

const swap4 = (str) => {
    if (str.length < 8) return "";
    else return str.slice(str.length - 4) + str.slice(4, str.length - 4) + str.slice(0,4)
}
console.log(swap4("123"))

const swapFirstLastWord = (str) => {
    if(!str.trim().includes(" ")) return ""
    else return str.slice(str.lastIndexOf(" ") + 1) + str.slice(str.indexOf(" "), str.lastIndexOf(" ") + 1) + str.slice(0, str.indexOf(" "))
}
console.log(swapFirstLastWord("Hello "))

const countPos = (arr) => arr.filter(x => x > 0).length
console.log(countPos([-45, 3, 0, 0, 5, 2]))

function getEven(num1, num2){
    let arr = [];
    for(let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++){
        if(i % 2 === 0) arr.push(i)
    }
    return arr
}
console.log(getEven(4, 4));

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

const countNeg = (arr) => arr.filter(x => x < 0).length
console.log(countNeg([-45, 0, 2, 4]))

const countA = (str) => [...str].filter(x => x.toLowerCase() === "a").length
console.log(countA("TechGlobal"))

const countWords = (str) => str.trim().split(" ").length;
console.log(countWords("1 2 3 4"));

const factorial = (num) => {
    let fac = 1;
    for(let i = 1; i <= num; i++) {
        fac *= i;
    }
    return fac
}
console.log(factorial(5))

const count3OrLess = (str) => str.split(" ").filter(x => x.length <= 3 && x.length !== 0).length
console.log(count3OrLess(""));

const removeExtraSpaces = (str) => str.split(" ").filter(x => x.length >=1).join(" ")
console.log(removeExtraSpaces("Hello"))
console.log(removeExtraSpaces("   Hello    World   "))
console.log(removeExtraSpaces("    JavaScript is      fun"))
console.log(removeExtraSpaces(""))

const middleInt = (num1, num2, num3) => {
    return [num1, num2, num3].sort((a, b) => a-b)[1]
}
console.log(middleInt(-1, 25, 10))

const firstDuplicate = (arr) => {
    for(let i = 0; i <= arr.length; i++){
    let first = arr[i];
    let rest = arr.slice(i + 1);
    if(rest.includes(first)) return first
    }
    return -1
}
console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ]));
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ]));
console.log(firstDuplicate([ 5, '5', 3, 7, 4 ]));
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]));

const getDuplicates = (arr) => {
    const ar = []
    for(let i = 0; i < arr.length; i++){
        let rest = arr.slice(i + 1);
        let num = arr[i];
        if(rest.includes(num) && !ar.includes(num)) ar.push(num)
    }
    return console.log(ar);
}
getDuplicates([ 0, -4, -7, 5, 0, 10, 45, -7, 0 ]);
getDuplicates([1, 2, 3, 0, 7]);
getDuplicates(['A', 'foo', '12', 12, 'bar', 'a', 'a', 'foo' ]);

const countVowels = (str) => str.split("").filter(x => "aeoui".includes(x.toLowerCase())).length
console.log(countVowels("HELLO"))

const  reverseStringWords = (str) => str.split(" ").map(x => x.split("").reverse().join("")).join(" ")
console.log(reverseStringWords("Hello World"))
console.log(reverseStringWords("Hello"))
console.log(reverseStringWords("I like JavaScript"))

const countConsonants = (str) => [...str].filter(x => !"aeoui".includes(x.toLowerCase())).length
console.log(countConsonants("Hello"));
console.log(countConsonants("Hello World"));

const countMultipleWords = (array) => array.filter(x => x.trim().includes(" ")).length
console.log(countMultipleWords([ "foo", "", " ", "foo bar", " foo" ]))
console.log(countMultipleWords([ "foo", "bar", "foobar", " foobar " ]))

const fizzBuzz = (num1, num2) =>{
    let fizz = [];
    for(let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        if(i % 3 === 0 && i % 5 === 0) fizz.push("FizzBuzz")
        else if (i % 3 === 0) fizz.push("Fizz")
        else if (i % 5 === 0) fizz.push("Buzz")
        else fizz.push(i)
    }
    return fizz.join("|");
}
console.log(fizzBuzz(13, 18))

function isPalindrome (str) {
    str1 = str.split("").reverse().join("").toLowerCase()
    return str.toLowerCase() === str1
}
console.log(isPalindrome("Kayak"))

function isPrime (num) {
    if(num < 2) return false;
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false
    }
    return true
}
console.log(isPrime(29))

const add = (arr1, arr2) => {
    let sum = [];
    for(let i = 0; i <= Math.max(arr1.length, arr2.length) - 1; i++){
        sum.push((arr1[i] || 0) + (arr2[i] || 0)) 
    }
    return sum
}
 console.log(add([3, 0, 0, 7, 5, 10],[6, 3, 2]));

 const noA = (arr) => arr.map(x => x.toLowerCase().startsWith("a") ? "###" : x)
 console.log(noA(["apple", "123", "ABC", "javascript"]))
 console.log(noA(["apple", "abc", "ABC", "Alex", "A"]))

 const no3and5 = (arr) => arr.map(x => {
    if (x % 15 ===0) return (101) 
    else if( x % 3 === 0) return 100
    else if(x % 5 === 0) return 99
    else return x
 })
console.log(no3and5([10, 11, 12, 13, 14, 15]))

const no13 = (arr) => arr.map(x => x === 13 ? 0 : x)
console.log(no13([1,2,3,4]));
console.log(no13([13, 4, 1, 13]));

const removeDuplicates = (arr) => {
    let ar = [];
    for(let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let rest = arr.slice(i + 1)
        if(!rest.includes(num)) ar.push(num)
    }
    return ar
}
console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]))

const noDigit = (str) => str.split("").filter(x => !"0123456789".includes(x)).join("")
console.log(noDigit(""));
console.log(noDigit("123Hello"));
console.log(noDigit("123Hello world 112312"));

const noVowel = (str) => str.split("").filter(x => !"aeoui".includes(x.toLowerCase())).join("")
console.log(noVowel("TechGlobal"))

const sumOfDigit = (str) => {
    let num = 0;
    for(const sym of str) {
        if(Number(sym)) num +=Number(sym)
    }
    return num;
}
console.log(sumOfDigit("Age is 29"))

const arrFactorial = (arr) => arr.map( x => {
    let fac = 1; 
    for(let i = 1; i <= x; i++){
        fac *= i
    }
    return fac
})
console.log(arrFactorial([1, 2, 3, 4, 5]));
console.log(arrFactorial([1, 2, 6, 4, 5]));

