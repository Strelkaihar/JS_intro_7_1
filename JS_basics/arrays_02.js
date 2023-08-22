// task create an array to store below data
//retrieve and print Igor
//retrieve and print Aziz as AZIZ

const names = ["Yuliia", "Alex", "Bali", "Igor", "Ramez" , "Aziz"];

console.log(names[3]);
console.log(`${names[names.length - 1]} as ${names[names.length -1].toUpperCase()}`);

// Task
// Generate 5 random numbers bt 1 and 10 (both inclusive)
// Store them in array
// Find first and last element from the array
// Calculate and return their average

let n1 = Math.floor(Math.random() * 10 + 1);
let n2 = Math.floor(Math.random() * 10 + 1);
let n3 = Math.floor(Math.random() * 10 + 1);
let n4 = Math.floor(Math.random() * 10 + 1);
let n5 = Math.floor(Math.random() * 10 + 1);
const rnum = [n1, n2, n3, n4, n5];
// const rnum = [
//     Math.floor(Math.random() * 10 + 1),
//     Math.floor(Math.random() * 10 + 1),
//     Math.floor(Math.random() * 10 + 1),
//     Math.floor(Math.random() * 10 + 1),
//     Math.floor(Math.random() * 10 + 1)
// ];
console.log(rnum);
console.log((rnum[0] + rnum[rnum.length -1]) / 2);

