// Trimming string

let city = "   Chicago   ";

console.log(city.length);
console.log(city);
console.log(city.trim().length);

console.log(city.trimStart());
console.log(city.trimStart().length);

console.log(city.trimEnd());
console.log(city.trimEnd().length);

let sentence = "   I like           Chicago   ";

console.log(sentence.trimStart());// I like           Chicago   
console.log(sentence.trimEnd()); //    I like           Chicago
console.log(sentence.trim());// I like           Chicago



// Padding padStart() VS padEnd ()

let number1 = "123", number2 = "43456782";
console.log(number1.padStart(8, " "));
console.log(number2);

let name2 = "Hello";

console.log(name2.padStart(7, "-").padEnd(9, "-"));

//concatenation
let str1 = "Hello";
let str2 = "World";
console.log(str1 + " " + str2);
console.log(`${str1} ${str2}`);

console.log(str1.concat(" ").concat(str2));
