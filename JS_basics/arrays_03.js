const students = [];

students.push("Alex");

console.log(students);

students.push("John", "John", "Jane");

console.log(students)

students.push(["Mark", "Max", "Maria"]);

console.log(students); // [ 'Alex', 'John', 'John', 'Jane', [ 'Mark', 'Max', 'Maria' ] ]
console.log(students.length); //5

students.pop("Alex");
students.pop("Alex");
console.log(students); // [ 'Alex', 'John', 'John' ]

const newArr = [];
let result = newArr.shift();
console.log(result);
console.log(newArr);