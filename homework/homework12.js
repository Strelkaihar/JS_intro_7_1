//Task 1
// Write a function named makeNegative() that takes a number and returns its negative value.
// NOTE: The number can be negative already, in which case no change is required.
// NOTE: Zero (0) is not checked for any specific sign. Negative zeros make no mathematical 
// sense. So, zero will stay as zero.

const makeNegative = (num) => {
    if(num < 0) return num
    else if(num > 0) return - num
    else return 0
}
console.log(makeNegative(10));
console.log(makeNegative(-7));
console.log(makeNegative(0));
console.log(makeNegative(0.45));

//Task2
// Write a function isSumEvenOrOdd() which takes three numbers as arguments and determines 
// if the sum of these numbers is odd or even.

const isSumEvenOrOdd = (num, num1, num2) => (num + num1 + num2) % 2 === 0 ? "even" : "odd"

console.log(isSumEvenOrOdd(0, 1, 4))

//Task3
// Write a function named decimal2() which takes an array of numbers as an argument and 
// returns the array with the same numbers rounded up or down and represented with only two decimals.

const decimal2 = (arr) => arr.map(num => Number(num.toFixed(2)))

console.log(decimal2([94.356, 8.9752]))
console.log(decimal2([76.62, 128.4, 84] ))
console.log(decimal2([20987, 3.53245, 12.345, 32.9]))
console.log(decimal2([]))
console.log(decimal2([4.35623, 8.9742]))

//Task 4
// Write a function named myPow() which takes two numbers, x and n, as its arguments and returns 
// x to the power of n without using Math.pow(). 3 to the power of 3 is 3*3*3 = 27. 
// NOTE: Any number to the power of 0 equals 1. Any number to the power of 1 equals the number itself.

const myPow = (x, n) =>  n > 0 ? x ** n : 1

console.log(myPow(3,3))
console.log(myPow(10,1))
console.log(myPow(100, 0))
console.log(myPow(1, 1))
console.log(myPow(4, 2))
console.log(myPow(0, 0))
console.log(myPow(5, 3))
// Task 5
// Write a function named findLongestWord() which takes a string as input and returns the longest 
// word in the string.
// NOTE: If the string is empty or consists of spaces only, then return empty string.NOTE:
//  If the string consists of multiple words having the longest word, then return the first occurrence.

const findLongestWord = (str) => str.split(" ").sort((a, b) => b.length - a.length)[0]
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'))
console.log(findLongestWord('This is a sample string for testing'))
console.log(findLongestWord('One two ten'))
console.log(findLongestWord(''))
console.log(findLongestWord('   '))
