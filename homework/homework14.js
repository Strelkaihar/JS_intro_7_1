//Task1
// Write a function named repeatingX() which takes a string argument and returns true if the 
// letter x is followed by another x. Otherwise, return false.
// NOTE: This method should be case-insensitive.

const repeatingX = str =>{
    str1 =str.toLowerCase()
    for(let i = 0; i < str.length; i++) {
        if(str1[i] === str1[i + 1] && 'xX'.includes(str1[i]))
        return true
    }
    return false
}
console.log(repeatingX("xTechxGlobalx"))
console.log(repeatingX("Hello Xx World"))
console.log(repeatingX("x x"))
console.log(repeatingX(""))
console.log(repeatingX("xxxxx"))

//Task2
// Write a function named isPerfectSquare() which takes a number as an argument and checks 
// if it is a perfect square. It returns true if the number is a perfect square and false otherwise.
// NOTE: A perfect square is a number that can be expressed as the product of an integer 
// by itself or as the second exponent of an integer. For example, 25 is a perfect square because 
// it is the product of integer 5 by itself, 5 × 5 = 25. However, 21 is not a perfect square number 
// because it cannot be expressed as the product of two same integers.

const isPerfectSquare = (num) => {
    const num1 = Math.floor(Math.sqrt(num))
    return console.log(num1 * num1 === num )
}
console.log(isPerfectSquare(25))
console.log(isPerfectSquare(24))
console.log(isPerfectSquare(0))
console.log(isPerfectSquare(1))
console.log(isPerfectSquare(-1))
console.log(isPerfectSquare(144))
//Task3
// Write a function named convertTemperature() which takes a number and a string arguments to be
//  considered as a temperature value and a unit (either Celsius or Fahrenheit) as arguments and 
//  converts the temperature to the other unit.
// NOTE: Use below formulas to convert temperature:
// Celsius to Fahrenheit: temp * 9/5) + 32
// Fahrenheit to Celsius: temp - 32) * 5/9

const convertTemperature = (num, str) => str === 'Celsius' ? (num * (9/5)) + 32 : (num - 32) * (5/9)
console.log(convertTemperature(100, 'Celsius'))
console.log(convertTemperature(32, 'Fahrenheit'))
console.log(convertTemperature(0, 'Celsius'))
console.log(convertTemperature(212, 'Fahrenheit'))
console.log(convertTemperature(-40, 'Celsius'))
console.log(convertTemperature(-40, 'Fahrenheit'))

//Task4 
// Write a function named sumOfEvenNumbers() which takes an array as an argument and returns
//  the sum of all the even numbers in an array.

const sumOfEvenNumbers = (arr) => arr.reduce((sum, num) => num % 2 === 0 ? sum + num : sum,  0)

console.log(sumOfEvenNumbers([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]))
console.log(sumOfEvenNumbers([ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ] ))
console.log(sumOfEvenNumbers([ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ] ))
console.log(sumOfEvenNumbers([]))
console.log(sumOfEvenNumbers( [ 1, 2, 3, 4, 5 ] ))
console.log(sumOfEvenNumbers( [ 10, 20, 30, 40, 50 ]))

// Task5
// Write a function named capsOdds() which takes an array argument and returns the array 
// with all the odd index elements capitalized (converted to uppercase).

const capsOdds = arr => arr.map(x => arr.indexOf(x) % 2 !== 0 ? x.toUpperCase() : x)
console.log(capsOdds(["Hello", "World"]))
console.log(capsOdds(["Jan", "Feb", "Mar", "Apr"]))
console.log(capsOdds(["Apple", "Banana", "123", "456", "Peach", "Kiwi"]))
console.log(capsOdds([]))
console.log(capsOdds(["John !@#$%", "^&*() Doe"]))