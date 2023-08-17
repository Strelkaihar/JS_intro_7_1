
let name = "John";
let name2 = "Alex";

// console.log(`Hello ${name}`);
// console.log(`Hello ${name2}`);
sayHello(name);
sayHello(name2);
sayHello("Bali");
sayHello("Yunus");
// Write a function that take an argument and print "Hello ${argument}
function sayHello(a) {
    console.log(`Hello ${a}`);
}
function printGoodMorning(){
    console.log("Good morning");
}

printGoodMorning();
printGoodMorning();
// That functions take two arguments
function sayHello2(arg0, arg1){
    console.log(`Hello ${arg0} ${arg1}`);
}
sayHello2(0, "hi");

//write a function that takes 2 argument
function sum(arg0, arg1){
    return arg0 + arg1;
}
console.log(sum(2, 4));
