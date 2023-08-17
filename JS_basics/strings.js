let fname = "John"; // double quotes
let lname = 'Doe'; // single quotes 
let fd = `backtick`; // backtick ``

// Concatenation - combining string together
let fullName = fname + " " + lname;
console.log(fullName);

// String Templates - string literals

// let quote = "I\ncan\ndo\nit";
let quote = `I
can
do
this`;
console.log(quote);

//Interpolation

let firstName = "Jane", lastName = "Doe";

console.log("The full name is = " + firstName + " " + lastName);
console.log(`The full name is = ${firstName} ${lastName}`);

let quantity = 5, price = 1.5; // total price 
console.log(`The total price is = $${quantity * price}`);

//Primitive string VS Object string

let city = "Chicago";
let city2 = new String("Chicago");

console.log(city);
console.log(city2);
console.log(typeof city);
console.log(typeof city2);

console.log(city == city2);
console.log(city === city2);