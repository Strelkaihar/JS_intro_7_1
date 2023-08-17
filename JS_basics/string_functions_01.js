
let name = "John";
//length property it returns the total counts of the characters in the string
let totalChars = name.length;

console.log(totalChars); //4
console.log(name.length); //4

console.log(typeof totalChars); //number
console.log(typeof name.length); //number
console.log(name); // John

//String - Changing Cases toUpperCase() vs toLowerCase()
let greeting = "Good Morning";
let lowerGreeting = greeting.toLowerCase();
let upperGreeting = greeting.toUpperCase();

console.log(lowerGreeting);
console.log(upperGreeting);
console.log(greeting.toLowerCase());
console.log(greeting.toUpperCase());

console.log("123ABC@#$@*#".toLowerCase());//123abc@#$@*#

//String - Extracting Characters
let city = "CHICAGO";
let firstChar = city[0];

console.log(firstChar);
console.log(typeof firstChar);

console.log(city.charAt(0));
console.log(city[0]);
console.log(city.charCodeAt(0));
console.log(city.charAt(3));
console.log(city[3]);
console.log(city.charCodeAt(3));
console.log(city.charAt(6));
console.log(city[6]);
console.log(city.charCodeAt(6));

console.log(city.charAt(city.length - 1));

console.log(typeof city.charAt(100));
console.log(typeof city[100]);

// charCodeAt()  - return decimal representation of the character in the Unicode ASCII
let country = "USA";
console.log(country.charCodeAt(0));
console.log(country.charCodeAt(1));
console.log(country.charCodeAt(2));
