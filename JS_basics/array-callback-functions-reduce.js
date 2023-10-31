const numbers = [5, 10, 100];
// let sum = 0;
// for (const number of numbers) {
//     sum +=number
// }
// console.log(sum);

const sumWithReduce = numbers.reduce((sum, number) => sum + number, 0);
console.log(sumWithReduce);

const sumEven = numbers.reduce((sum, num) => (num % 2 === 0) ? sum + num : sum, 0);
console.log(sumEven);
