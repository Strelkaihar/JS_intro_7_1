//Simple function examples
//Argument is type any and return type void. Implicit
function greet(name) {
    console.log(`Hello ${name}`)
}
//Argument is type any and return type void. Explicit
greet('John')
function greet1(name: any): void {
    console.log(`Hello ${name}`)
}
//Argument is type string and return type void. Explicit
function greet2(name: string): void {
    console.log(`Hello ${name}`)
}
//Argument is type string and return type string. Explicit
function greet3(name: string): string {
    return `Hello ${name}`;
}
//Ideal
function greet4(name: string) {
    console.log(`Hello ${name}`);
}
//Rest and spread operators
function maxNumber(...nums) {
    return Math.max(...nums);
}
maxNumber(1, 2, 3);
maxNumber("1", 2, 3);
//Fix by providing type

function maxNumber2(...nums: number[]): number {
    return Math.max(...nums);
}

maxNumber2(1, 2, 3);
maxNumber2("1", 2, 3);

//Our own example using interface
interface User {
    id:number;
    name: string
}

function clone(source: User) : User {
    return Object.apply({}, source)
}
const a: User = {id: 1, name: 'John'};
const b = clone(a)
