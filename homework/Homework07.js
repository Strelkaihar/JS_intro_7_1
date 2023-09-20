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