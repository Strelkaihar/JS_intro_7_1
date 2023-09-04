//Output each name to the console
const names = ["John", "Jane", "Alex", "Max"];

names.forEach(name => console.log(name));
names.forEach(name => console.log(name[0]));
names.forEach(name => console.log(name.toUpperCase()));

// count how many words has 4 latter 
let count = 0;
names.forEach(name => name.length === 4 ? count++ : count);
console.log(count)

const numbers = [5, 10, 3, 0, -3];
const newNumbers = [];
numbers.forEach(number => console.log(number));
numbers.forEach(number => console.log(number * 5));
numbers.forEach(number => console.log(number % 2 === 0));
numbers.forEach(number => newNumbers.push(number * 3));
console.log(newNumbers);

const newArray = numbers.map(num => num * 3);
console.log(newArray);


