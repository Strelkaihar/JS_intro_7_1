for (let num = 1; num <= 5; num++) {
    console.log(num);
}
// Write a program that outputs numbers from 5 to 25
for (let num = 5; num <=25; num++) {
    console.log(num);
}
// Write program that outputs number between 15 and 1 descending
for (let i = 15; i >= 1; i--){ // (let i = 15; i !== 0; i--)
    console.log(i);
}
// Write a program that outputs only even numbers from 0 to 10 (0 and 10 are included)

for (let i = 0; i <= 10; i +=2){
    console.log(i);
}
for (let i = 0; i <= 5; i++) {
    console.log(i * 2);
}
// Write a program to check numbers from 1 to 50 (both included) and output all the numbers that can be divided by 5
for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0) console.log(i);
}
// Find sum of the numbers from 1 to 5 (both inclusive) -> 15
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log(sum);
// Find sum of the numbers from 10 to 15 (both inclusive) -> 75
let sum1 = 0;
for (let i = 10; i <= 15; i++) {
    sum1 += i;
}
console.log(sum1);
// Output each character from TechGlobal School -> T e c h G l o b a l   S c h o o l
// let str = "TechGlObal School|";
for (let i = 0;i <= str.length - 1; i++) {
    console.log(str[i]);
}

// 
let n1 = Math.floor(Math.random() * 11 + 10);
console.log(n1);
for (let i = 1;i <= n1; i++){
    if (i % 2 !== 0) console.log(i)
}
// Write a program that generates a random number between 10 and 20 (both inclusive)
// And it outputs all the odd numbers starting from 1 to random number (both inclusive)

let n2 = Math.floor(Math.random() * 10 +1);
let n3 = Math.floor(Math.random() * 10 +1);
console.log(n2, n3);
for (let i = Math.min(n2, n3); i <= Math.max(n2, n3); i++) {
    console.log(i);
}
// Count the total occurrences of letter o in TechGlobal School  -> 3
let str = "TechGlObal School|";
let sum2 = 0;
for (let i = 0;i <= str.length -1; i++){
    if(str[i].toLowerCase().includes("o")) sum2++;
}
console.log(sum2);