
let name = "Bali";

if (name[0] === "j" || name[0] === "J") { // name.toLowerCase()[0] === "j" ot toUpperCase()[0]
    console.log("Party");
} 
else {
    console.log("Sorry");
}
// Write a program that generates a random number between -3 and 3 (both inclusive).
// Print them being and EVEN and ODD
// Print them being POS, NEG and ZERO

function getRandomNumber (min, max) {
    return random = Math.floor(Math.random() * (max - min + 1)) + min;
}
let num = getRandomNumber(-3, 3);
console.log(num);
if(num % 2 === 0) {
    console.log("EVEN");
    if (num > 0) {
        console.log("POS");
    }
    else if (num === 0) {
        console.log("ZERO");
    }
    else {
        console.log("NEG");
    }
} 
else if (num % 2 !== 0) {
    console.log("ODD");
    if (num > 0) {
        console.log("POS");
    }
    else if (num === 0) {
        console.log("ZERO");
    }
    else {
        console.log("NEG");
    }
}
if (name % 2 === 0) {
    console.log("EVEN")
}
else {
    console.log("ODD")
}
if (num > 0) {
    console.log("POS");
}
else if (num < 0) {
    console.log("NEG");
}
else {
    console.log("ZERO");
}

// Write a function named as checkDLAge it takes an argument as an age
// And returns true if the age is more than 15
// returns false if the age is less than 16


// function checkDlAge(arg) {
// if (arg >= 16){
//     return true;
// } 
// return false;
// }
function checkDlAge (arg){
    return arg > 15;
}
console.log(checkDlAge(10));
console.log(checkDlAge(15));
console.log(checkDlAge(16));
console.log(checkDlAge(25));

// if the age is more than or equals 65 -> You can be retired!
// if the age is less than 65;
//     64 -> You have 1 year left to get retired!
//     55 -> You have 10 years left to get retired!
//     43 -> You have 22 years left to get retired!

let age = 64;
if (age > 64) {
    console.log("You can be retired!");
} else {
    if (65 - age === 1){
        console.log(`You have 1 year left to get retired!`);
    } else{
        console.log(`You have ${65 - age}  years left to get retired!`);
    }

}

