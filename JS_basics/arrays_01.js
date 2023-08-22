
let city = "Chicago";
let city1 = "Miami";
let city2 = "San Francisco";

console.log(city);
console.log(city1);
console.log(city2);

// better way
const cities = ["Chicago", "Miami", "SanFrancisco"];

console.log(cities); // [ 'Chicago', 'Miami', 'SanFrancisco' ]
console.log(cities[1]);
console.log(cities[1][0]);
console.log(cities[1][cities[1].length -1]);
console.log(cities[2])
cities[1] = 123;
console.log(cities);
const number = [23, 15, 6, 5];
console.log(number[-1]);
console.log(number[-4]);
console.log(number[100]);
console.log(number[4]);

console.log(typeof number);
console.log(typeof cities);
number[4] = 25;
console.log(number);

number[20] = 100;
console.log(number);

console.log(number[10]);
number[-1] = 100;
console.log(number);
console.log(number[-1]);