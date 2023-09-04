const numbers = [0, 10, -4, 5, 2, -3];

console.log(numbers.find(num => num > 0)); // 10
console.log(numbers.find(num => num < 0)); // -4
console.log(numbers.find(num => num % 2=== 0)); // 0
console.log(numbers.find(num => num % 2!== 0)); // 5
console.log(numbers.find(num => num > 100)); // undefined

console.log(numbers.findIndex(num => num > 0)); // 1
console.log(numbers.findIndex(num => num < 0)); // 2
console.log(numbers.findIndex(num => num % 2=== 0)); // 0
console.log(numbers.findIndex(num => num % 2!== 0)); // 3
console.log(numbers.findIndex(num => num > 100)); // -1

const things = ["knife", "spoon", "fork", "pen", "Mug"];

console.log(things.map((v, i) => {
return {
    value: v,
    index : i
    }
}).find(thing => thing.value.length === 3));
