//Task 1
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
const isSumEvenOrOdd = (num, num1, num2) => {
    if((num + num1 + num2) % 2 === 0) return "even"
    else return "odd"
}
console.log(isSumEvenOrOdd(0, 1, 4))

//Task3
const decimal2 = (arr) => arr.map(num => Number(num.toFixed(2)))

console.log(decimal2([94.356, 8.9752]))
console.log(decimal2([76.62, 128.4, 84] ))
console.log(decimal2([20987, 3.53245, 12.345, 32.9]))
console.log(decimal2([]))
console.log(decimal2([4.35623, 8.9742]))

//Task 4
const myPow = (x, n) =>  n > 0 ? x ** n : 1

console.log(myPow(3,3))
console.log(myPow(10,1))
console.log(myPow(100, 0))
console.log(myPow(1, 1))
console.log(myPow(4, 2))
console.log(myPow(0, 0))
console.log(myPow(5, 3))
// Task 5
const findLongestWord = (str) => str.split(" ").sort((a, b) => b.length - a.length)[0]
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'))
console.log(findLongestWord('This is a sample string for testing'))
console.log(findLongestWord('One two ten'))
console.log(findLongestWord(''))
console.log(findLongestWord('   '))
