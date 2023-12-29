//Task1
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

//Task4
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

