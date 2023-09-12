let numbers = [1, 2, 3];

const sumWithReduce = numbers.reduce((sum, number) => sum + number, 0);
console.log(sumWithReduce)

numbers.forEach((number, index) => console.log(number, index));
numbers.forEach((_, index) => console.log(index));

const student = {
    name : "Alan",
    age : 40,
    email : 'a@gmail.com'
};
let studentKeys = Object.keys(student);
let studentValue = Object.values(student);

// Enhanced Object Literals
const year = 2021;
const type = "action";
// Before ES6
const movie = {
    year : year,
    type : type
};
//After ES6 was implemented
const movie2 = {
    year,
    type
};

