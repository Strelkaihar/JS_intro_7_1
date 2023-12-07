//Task1
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
const convertTemperature = (num, str) => str === 'Celsius' ? (num * (9/5)) + 32 : (num - 32) * (5/9)
console.log(convertTemperature(100, 'Celsius'))
console.log(convertTemperature(32, 'Fahrenheit'))
console.log(convertTemperature(0, 'Celsius'))
console.log(convertTemperature(212, 'Fahrenheit'))
console.log(convertTemperature(-40, 'Celsius'))
console.log(convertTemperature(-40, 'Fahrenheit'))

//Task4 
const sumOfEvenNumbers = (arr) => arr.reduce((sum, num) => num % 2 === 0 ? sum + num : sum,  0)

console.log(sumOfEvenNumbers([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]))
console.log(sumOfEvenNumbers([ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ] ))
console.log(sumOfEvenNumbers([ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ] ))
console.log(sumOfEvenNumbers([]))
console.log(sumOfEvenNumbers( [ 1, 2, 3, 4, 5 ] ))
console.log(sumOfEvenNumbers( [ 10, 20, 30, 40, 50 ]))

// Task5
const capsOdds = arr => arr.map(x => arr.indexOf(x) % 2 !== 0 ? x.toUpperCase() : x)
console.log(capsOdds(["Hello", "World"]))
console.log(capsOdds(["Jan", "Feb", "Mar", "Apr"]))
console.log(capsOdds(["Apple", "Banana", "123", "456", "Peach", "Kiwi"]))
console.log(capsOdds([]))
console.log(capsOdds(["John !@#$%", "^&*() Doe"]))