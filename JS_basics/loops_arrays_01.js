const names = ["John", "Alex", "Max", "Jane"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
for (let name of names) {
    console.log(name);
}
for(let name of names) {
    console.log(name.toUpperCase());
}
for (let i = 0; i < names.length; i++) {
    console.log(names[i].toUpperCase());
}
// Task
console.log(`\n -------------TASK1------------\n`);
const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];
let countPos = 0 ;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) countPos++;
}
// for (let num of numbers) {
//     if (num > 0) countPos++;
// }
console.log(`\n -------------TASK2------------\n`);

let countEven = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) countEven++;
}
console.log(countEven);
countEven = 0;
for (let num of numbers) {
    if (num % 2 === 0) countEven++;
}
console.log(countEven);

console.log(`\n -------------TASK3 print each number multiplied by 5------------\n`);

for (const num of numbers) {
    console.log(num * 5);
}
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] * 5);
}
console.log(`\n -------------TASK4------------\n`);


numbers.forEach(function multiply5(num) {
    console.log(num * 5);
});