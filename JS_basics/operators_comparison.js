
let num1 = 3, num2 = 5, num3 = 3, num4 = "3", num5 = "5";

console.log(num1 == num2); // false
console.log(num1 == num3); // true
console.log(num1 == num4); // true

console.log(num1 ===num4); //false
console.log(num1 != num3); // false
console.log(num1 !== num4); // false

console.log(num2 > num5); //false
console.log(num1 <= num3); // true

console.log(nnu1 + num2 < 2 * num3);

console.log("3" + "5" < 20); // false
console.log("3" * "5" + 10 ===25); //true

console.log((10 >= "10") < 20);

console.log(true + 10); //11
console.log(false + 10); //10

console.log(null + 10); //10
console.log("" + 10); //10
console.log(undefined + 10); //Nan
console.log(NaN + 10); // Nan

console.log("Hello" + 10); // Hello10
console.log("5" % "2" === "1"); //false
