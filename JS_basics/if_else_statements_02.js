// Write a code that generates a random number between 0 and 6 (both inclusive)
// 0 represents Sunday
// 1 represents Monday
// .
// .
// .
// .
// 6 represents Saturday
// Print "WEEKEND" if the number is 0 or 6
// Print "WEEKDAY" if the numbers is either 1, 2, 3, 4 or 5

function getRandomNumber (min, max) {
    return random = Math.floor(Math.random() * (max - min + 1)) + min;
}

let day = getRandomNumber(0,6);

if (day === 6 || day === 0  ) {
    console.log("WEEKEND");
}
else {
    console.log("WEEKDAY");
}
// even -> 2 * points
// divided 10 -> 3 * points
// 7 -> points * 7


let point = 1;

let randomNumber = getRandomNumber(0, 100);

console.log(randomNumber);

if (randomNumber % 10 === 0 ) {
    console.log(`You won ${point * 6}`);
} 
else if (randomNumber % 2 === 0 ){
    console.log(`You won ${ point * 2}`);
} 
else if (randomNumber === 7){
    console.log(`You won ${ point * 7}`);
} 
else {
    console.log(`You won ${point}`);
}
// Write a code that generates a random number between 0 and 6 (both inclusive)
// 0 represents Sunday
// 1 represents Monday
// .
// .
// .
// .
// 6 represents Saturday
// 0 -> print RED
// 6 -> print GREEN
// 1,2,3,4,5 -> print BLACK
// If it is weekend -> "VACATION"
// if it is weekday -> "WORK"
// 0 -> RED\nVACATION
// 6 -> GREEN\nVACATION
// 1,2,3,4,5 -> BLACK\nWORK
let day1 = getRandomNumber(0,6);

if (day1 === 6) {
    console.log("GREEN\nVACATION");
}
else if (day1 === 0) {
    console.log("GREEN\nVACATION");
} 
else {
    console.log("BLACK\nWORK")
}

if (day1 > 0 && day1 < 6) {
    console.log("BLACK\nWORK");
}
else {
    if (day1 ===6) {
        console.log("GREEN\nVACATION");
    }
    else {
        console.log("GREEN\nVACATION");
    }
}
