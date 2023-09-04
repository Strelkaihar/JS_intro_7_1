const numbers = [1, 5, 7, 40, 16, 15, 20];
const numberSorted = numbers.sort();
console.log(numberSorted); // [1, 15, 16, 20, 40,  5, 7]
console.log(numbers);// [1, 15, 16, 20, 40,  5, 7]

const numbersReallySorted = numbers.sort((n1 , n2) => n1 - n2) // [1,  5,  7, 15, 16, 20, 40]
console.log(numbersReallySorted);