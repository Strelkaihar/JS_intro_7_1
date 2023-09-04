const number = [-5, 0, 5, 10, 23, -10];

console.log(number.some(num => num % 5 === 0));

const data = [true, 24, "str"];
// check if each element is boolean
console.log(data.every( element => element === true ||element === false));

const cities = ["Rome", "Kyiv", "Paris", "Milan"];
// check if every city has 4 or 5 letters
console.log(cities.every(city => city.length === 4 || city.length === 5));

