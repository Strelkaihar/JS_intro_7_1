// Generate a random number between 0 and 1 (both inclusive)
// Print "The number is ZERO" if the generated number is zero
// Print "The number is ONE" if the generated number is one

randomNumber = Math.floor((Math.random() * (1 - 0 + 1)));

if (randomNumber === 0) {
    console.log("The number is ZERO");
}
else {
    console.log("The number is ONE");
}

// Generate a random number between 0 and 1 (both inclusive)
// Print "The number is EVEN" if the generated number is even
// Print "The number is ODD" if the generated number is odd

randomNumber1 = Math.floor((Math.random() * (10 - 1 + 1) + 1));
console.log("The number is = " + randomNumber1);

if (randomNumber1 % 2 === 0) {
    console.log("The number is EVEN");
}
else {
    console.log("The number is ODD");
}

randomNumber2 = Math.floor((Math.random() * (2 + 2 + 1) - 2));
console.log("The number is = " + randomNumber2);

if (randomNumber2 > 0) {
    console.log("The number is POSITIVE");
} 
else if (randomNumber2 < 0) {
    console.log("The number is NEGATIVE");
} 
else {
    console.log("The number is ZERO");
}
