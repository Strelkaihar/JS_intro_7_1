//Global scope 
var city = "Chicago";
const state = "IL";
let country = "US";

console.log(city);
console.log(state);
console.log(country);

if(true) {
    console.log(city, state, country);
}
//function scope 
function sum (arr) {
    let total = 0 // belongs to sum function
    for(const number of arr) {
        total +=number
    }
    return sum
}
//console.log(total); ReferenceError: total is not defined same for let const and var
console.log(sum([1, 2, 3]));

//Block scope 
{
    var num1 = 1;
    let num2 = 2;
    const num3 = 3;
    console.log(num1) // 1
    console.log(num2) // 2
    console.log(num3) // 3
}
console.log(num1) // 1
//console.log(num2) // ReferenceError: num2 is not defined
//console.log(num3) // ReferenceError: num3 is not defined

// Lexical scope nested function
function outer() {
    let outerVariable = "Outer";
    function inner () {
        let innerVariable = "Inner";
        console.log(innerVariable, outerVariable); // Access to both
    }
    console.log(outerVariable); // Outer
    // console.log(innerVariable);// innerVariable is not defined
    inner();
}
outer();

//Closure

function score() {
    let initialScore = 0;// no access out the function
 
    const inner = function () {
        return initialScore += 1;
    } ;
    return inner;
}

const anyFunction = score(); //initialScore = 0 and inner function is return
console.log(anyFunction()); // 1
console.log(anyFunction()); // 2
console.log(anyFunction()); //3

