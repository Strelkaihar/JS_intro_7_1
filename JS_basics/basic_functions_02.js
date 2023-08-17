
// write a function called as product3 that take 3 argument and return multiplication

function product3(arg0, arg1, arg2) {
    return arg0 * arg1 * arg2;
}
console.log(product3(2, 4, 5));// 40
console.log(product3(5, 6, 10));// 300
console.log(product3(-3, 10, 5));// -150
//Tricky part 
console.log(product3("3", "5","3"));// 45
console.log(product3(null, "", false)); //0
console.log(product3("  ", true, "10abc")); //NaN

// write a function called as isOdd which take odd and return true if the arg is odd, false if even
function isOdd(arg1) {
   return  arg1 % 2 !== 0;
}
console.log(isOdd(-3));

// write a function called as isOdd which take odd and return true if the arg is odd, false if even

function isEven(arg1){
    return  arg1 % 2 === 0;
}
console.log(isEven(-4));
console.log(isEven(3));
console.log(isEven(8));

console.log(isOdd("")); // false
console.log(isEven("")); // true
console.log(isOdd("" * 5 + true)); // true
console.log(isEven("" / 1 + 8)); // true