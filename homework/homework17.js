//Task1
// Write a function named findMedian() which takes two arrays of numbers as its arguments and return 
// the median of the two sorted arrays. 

// NOTE: The median is the middle number of a sorted array. So the median of [1,3], [2] would be 2.
//  If the array has an even length, you are to find the average of the 2 middle numbers

const findMedian = (arr1, arr2) => {
    const arr = [...arr1,...arr2].sort((a,b) => a - b)
    return arr.length % 2 === 0 ? (arr[arr.length / 2] + arr[(arr.length / 2) - 1]) / 2: arr[Math.floor(arr.length / 2)]
}
console.log(findMedian([1, 3], [2]))
console.log(findMedian([1, 2], [3, 4]))
console.log(findMedian([4], [3]))
console.log(findMedian([4], []))
console.log(findMedian([0], [0, 1]))
//Task2
// Write a function named calculateFactorial() which takes a number as an argument and returns 
// the factorial of that number.
// Note: Factorial is the product of all positive integers less than or equal to a given positive 
// integer and denoted by that integer and an exclamation point. Thus, factorial seven is written 7!, 
// meaning 1 × 2 × 3 × 4 × 5 × 6 × 7. Factorial zero is defined as equal to 1.

const calculateFactorial = (num) => {
    factor = 1;
    for (let i = 1; i <= num; i++ ){
        factor *= i
    } 
    return factor
}
console.log(calculateFactorial(0))
console.log(calculateFactorial(1))
console.log(calculateFactorial(5))
console.log(calculateFactorial(6))
console.log(calculateFactorial(10))
console.log(calculateFactorial(4))
//Task3 
// Write a function named calculateGCD() which takes two numbers as arguments and returns the
//  greatest common divisor of the two numbers.
// NOTE: GCD is a mathematical concept used to describe the largest number that divides two or
//  more integers without leaving a remainder. In other words, it is the largest number that 
//  is a common factor of two or more numbers.

const calculateGCD = (num1, num2) => {
    for(let i = Math.max(num1, num2); i >= 1 ; i--)
        if (num1 % i === 0 && num2 % i === 0) return console.log(i)
}
calculateGCD(8, 12)
calculateGCD(17, 5)
calculateGCD(48, 18)
calculateGCD(0, 5)
calculateGCD(21, 14)
calculateGCD(60, 48)

// //Task4
// Write a function named calculateLCM() which takes two numbers as arguments and returns the 
// least common multiple of the two numbers.
// NOTE: GCD is a mathematical concept used to describe the largest number that divides two 
// or more integers without leaving a remainder. In other words, it is the largest number that 
// is a common factor of two or more numbers.

const calculateLCM = (num1, num2) => {
    for(let i = Math.max(num1, num2); i >= 1 ; i--)
    if (num1 % i === 0 && num2 % i === 0) return console.log((num1 * num2) / i)
}
calculateLCM(8, 12)
calculateLCM(17, 5)
calculateLCM(48, 18)
calculateLCM(0, 5)
calculateLCM(21, 14)
calculateLCM(60, 48)

