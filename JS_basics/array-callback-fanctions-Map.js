//create a new array with all names to Upper case
const names = ["James", "Jane", "Alex"]
const newNames = names.map(name => name.toUpperCase());
console.log(newNames)


const result = names.map((name, i) => ({
    index: Number(i),
    value: name
}));
console.log(result);
console.log(Object.keys(names));
console.log(Object.values(names));
console.log(Object.entries(names));

const result2 = [];
for (const [i, v] of Object.entries(names)) {
    result2.push({
        index: Number(i),
        value: v
    })
}
console.log(result2);

const numbers = [-5, 0, 5, 10, 23, -10];
const positive = numbers.filter(number => number > 0);
console.log(positive);

const posArray = [];
for(const number of numbers) {
    if(number > 0) posArray.push(number);
}
console.log(posArray);

const evenN = [];
for (const number of numbers) {
    if ( number % 2 === 0) evenN.push(number)
}
console.log(evenN);
console.log(numbers.filter(number => number % 2 === 0))
console.log(numbers.filter(number => number % 2 !== 0))
const noNegative = numbers.map(number => {
    if(number < 0) return 0;
    else return number;
})

console.log(noNegative)
console.log(numbers.map(x => x < 0 ? 0 : x));
// const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];
// Find all the fruits that starts with M   -> [ 'Mango', 'Melon' ]
// Find all the fruits that has apple  -> [ 'Apple', 'Pineapple' ]
// Find all the fruits that has length of 5  -> [ 'Apple', 'Mango', 'Melon' ]
// Find all the fruits that has length different than 5  -> [ 'Orange', 'Kiwi', 'Pineapple' ]
// Find all the fruits that has a or e  -> [ 'Apple', 'Orange', 'Pineapple', 'Mango', 'Melon' ]
// Count how many fruits has i  -> 2
// Count how many fruits ends with e  -> 3
// Store the first and last letters of the fruits as shown -> ['Ae', 'Oe', 'Ki', 'Pe', 'Mo', 'Mn']

const fruits = ["Apple", "Orange", "Kiwi", "Pineapple", "Mango", "Melon"];
console.log(fruits.filter(fruit => fruit.startsWith("M"))); // [ 'Mango', 'Melon' ]
console.log(fruits.filter(fruit => fruit.toLowerCase().includes("apple"))); // [ 'Apple', 'Pineapple' ]
console.log(fruits.filter(fruit => fruit.length === 5)); // [ 'Apple', 'Mango', 'Melon' ]
console.log(fruits.filter(fruit => fruit.length !== 5)); // [ 'Orange', 'Kiwi', 'Pineapple' ]
console.log(fruits.filter(fruit => fruit.toLowerCase().includes("a") || 
    fruit.toLowerCase().includes("e") )); // [ 'Apple', 'Orange', 'Pineapple', 'Mango', 'Melon' ]
console.log(fruits.filter(fruit => fruit.toLowerCase().includes("i")).length); // 2
console.log(fruits.filter(fruit => fruit.toLowerCase().endsWith("e")).length); // 3
console.log(fruits.map(fruit => fruit[0] + fruit[fruit.length - 1])); // [ 'Ae', 'Oe', 'Ki', 'Pe', 'Mo', 'Mn' ]