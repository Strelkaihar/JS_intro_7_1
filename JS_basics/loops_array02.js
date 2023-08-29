// const numbers = [3, 4, 7, 3, 2, 2, 7];
// //Find the average of these numbers -> 4
const numbers = [3, 4, 7, 3, 2, 2, 7];
sum = 0;
for (let i = 0; i < numbers.length; i ++) {
    sum += numbers[i];
}
console.log(`The average is ${sum / numbers.length}`);
sum = 0;
for(const number of numbers){
    sum += number;
}
console.log(`The average is ${sum / numbers.length}`);

//
// Requirement:
// -Create 2 arrays that stores numbers below.
// First array->       [ 5, 8, 2, 1, 2 ]
// Second array ->     [ 9, 3, 5, 1, 0 ]
// THEN:
// -Output both arrays
// –Then, create a new array that will multiply the numbers from the first 2 arrays and output the third array as well.
// [ 45, 24, 10, 1, 0 ]

const arrayOne = [5, 8, 2, 1, 2];
const arrayTwo = [9, 3, 5, 1, 8];
const arrayTre = []
for (let i = 0; i < arrayOne.length; i++) {
    arrayTre.push(arrayOne[i] * arrayTwo[i]);
}
console.log(arrayOne);
console.log(arrayTwo);
console.log(arrayTre);

const num = [1, 3, 0, 2, 6, 8];
for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
        console.log(num[i]);
        break;
    } 
}
for (const n of num) {
    if (n % 2 === 0) {
        console.log(n);
        break;
    }
}
let name = "John";
let reverserName = "";
for (let i = name.length - 1; i >= 0; i--) {
    reverserName += i;
}
reverserName = name.split("").reverse().join("");
console.log(reverserName)


// function first(array) {
//     const arr = [];
//     for (let i = 0; i < array.length; i++) {
//         if(array[i] === array[i + 1]) {
//             if(!arr.includes(array[i])) arr.push(array[i]);
//         }
//     }
//     return arr;
// }
// console.log(first([1, 2, 4, 8, 1, 4,]));

// // Find the first city that has the odd length  -> Chicago
// const cities = ['Berlin', 'Rome', 'Chicago', 'Kiev', 'Istanbul', 'Tokyo'];
// Task 
const cities = ['Berlin', 'Rome', 'Chicago', 'Kiev', 'Istanbul', 'Tokyo'];
for (const city of cities) {
    if (city.length % 2 !== 0) {
        console.log(city)
        break;
    }
}
const newCities = [];
for (i = 0; i < cities.length; i++){
    if (cities[i].length > 5) newCities.push(cities[i]);
}
console.log(newCities);
