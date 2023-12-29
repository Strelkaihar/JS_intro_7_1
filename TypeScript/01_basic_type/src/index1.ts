//Primitive types
//let x = 5;
//let x; Variable 'x' implicitly has an 'any' type, but a better type may be inferred from usage.
//let x: number; it works
let y: string;
let z: boolean;

y = 'Hello';
z = true;
//z = 'true' Type 'string' is not assignable to type 'boolean'.

let a: Date; // Date type
let b: string[];// arr string
//let b: any; // can assign any value
let c: number[]; // arr number
let d: {id: number, name: string} //object
let f: {author: string, book: {title: string, year: number}} // nested object

c = [1,2,3]
//c = [1, '2', 3] Type 'string' is not assignable to type 'number'
d = {id: 1, name: 'John'};
//d = {id: 1, name: true};  The expected type comes from property 'name' which is declared here on type '{ id: number; name: string; }'
//b = 'Hello';
b = 'Hello' as any;
