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
console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]))
console.log(removeDuplicates([1, 2, 5, 2, 3]))
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