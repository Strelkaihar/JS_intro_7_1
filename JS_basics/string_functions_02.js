
// String - Searching
let text = "Can I can a can";

// search()
let result1 = text.search("can");
let result2 = text.search("Can");

console.log(result1, result2);
//Tricky part 
console.log(text.search(""));//0
console.log(text.search(" ")); // 3
console.log(text.search("  ")); // -1
console.log(text.search("Hello")); // -1
console.log(text.search(text)); //0

//includes() function
let quote = "I can do it";
let r1 = quote.includes("can");// True
let r2 = quote.includes("it"); // true
let r3 = quote.includes("IT"); // False
console.log(r1, r2, r3);
//Tricky part
console.log(quote.includes(quote));
console.log(quote.includes("")); //true
console.log(quote.includes(" ")); //true
console.log(quote.includes("  ")); //false

// indexOf() VS lastIndexOf()
let greeting = "GOOD MORNING";
console.log(greeting.indexOf("G"));//0
console.log(greeting.lastIndexOf("G")); // 11

console.log(greeting.indexOf("GOOD")); // 0
console.log(greeting.lastIndexOf("ING")); // 9

let sentence = "I like apple and pineapple";

console.log(sentence.indexOf("apple")); //7
console.log(sentence.lastIndexOf("apple")); // 21

console.log(sentence.indexOf("abc")); // -1
console.log(sentence.lastIndexOf("abc")); // -1

console.log(sentence.indexOf(" "));//1
console.log(sentence.lastIndexOf(" ")); //16
console.log(sentence.indexOf("")); //0
console.log(sentence.lastIndexOf("")); //26

// startsWith() VS endsWith()
let info = "My phone is 312-000-0000";
console.log(info.startsWith("M"));// true
console.log(info.startsWith("My")); // true
console.log(info.endsWith("0000")); //true

console.log(info.startsWith("phone")); //false
console.log(info.endsWith("0")); //true

console.log(info.startsWith(info)); //true
console.log(info.endsWith(info)); //true

console.log(info.startsWith("")); //true
console.log(info.endsWith("")); //true



