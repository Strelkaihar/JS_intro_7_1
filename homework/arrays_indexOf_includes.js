const number = [25, 17, 5, 9];
// includes() function
console.log(number.includes(10)); // false
console.log(number.includes(5)); // true
//indexOf() function
console.log(number.indexOf(8)); // -1
console.log(number.indexOf(5)); // 2
console.log(number.indexOf(number[3])); // 3

//lastIndexOf() function
console.log(number.lastIndexOf(25)); //0
console.log(number.lastIndexOf(10)); // -1
console.log(number.lastIndexOf(10 / 2));// 2
