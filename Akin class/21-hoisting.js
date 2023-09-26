console.log(name);
var name = "John";

console.log(sum(2, 5))
function sum(a, b) {
    return a+ b;
}
console.log(sum(4, 5))

//Be careful with function expression, just only regular function will work

const function1 = function () {
    console.log("function1")
}
var function2 = () => console.log("function2");
function1();
function2();