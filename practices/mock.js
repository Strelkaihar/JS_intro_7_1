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