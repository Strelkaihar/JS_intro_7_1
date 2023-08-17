// String - Extracting Partial Strings

let sentence = "JavaScript is the most used programming language";
let word = "JavaScript";

// slice()
console.log(word.slice(0, 4)); 
console.log(word.slice(4, 10)); 
console.log(word.slice(4)); 

console.log(word.slice(2, 5));
console.log(word.slice(4, 7));
console.log(word.slice(7));
console.log(word.slice(3, 8));

//substring() function

console.log(word.substring(2, 5));
console.log(word.substring(4, 7));
console.log(word.substring(7));
console.log(word.substring(3, 8));
// Tricky part
let car = "Tesla";

console.log(car.slice(2, 15)); //sla
console.log(car.substring(2, 15)); //sla

console.log(car.slice(-3, 0)); //empty
console.log(car.substring(-3, 0)); //empty

console.log(car.slice(-3, -1)); //sl
console.log(car.substring(-3, -1)); //empty

//split() function

let sentence1 = "JavaScript is the most used programming language";
console.log(sentence1.split(" "));
console.log(sentence1.split(""));
console.log(sentence1.split("most"));

