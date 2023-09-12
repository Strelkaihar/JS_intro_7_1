//immutable

//Object
const city = {
    name: "Chicago"
};
// city.name = "New York"

let city2 = city;
city2.name = "New York";
console.log(city);
console.log(city2);

//Array
const cities = ["Chicago","New York", "LA"];

cities[0] = "Seattle";
console.log(cities); // [ 'Seattle', 'New York', 'LA' ]

const cities2 = cities;
cities2[2] = "Houston";

console.log(cities);// [ 'Seattle', 'New York', 'Houston' ]
console.log(cities2);// [ 'Seattle', 'New York', 'Houston' ]

// Example on how to freeze an object

const employee = {
    name: "Jane",
    lName: "Doe",
    title: "HR"
};
Object.freeze(employee);
employee.name = "Joe";
console.log(employee)

const employee2 = employee;
employee2.title = "Instructor";

// How toi check if object is frozen
console.log(Object.isFrozen(employee));
console.log(Object.isFrozen(employee2));

//How to check if property belong to original object
const obj1 = { id: 1};
const obj2 = { ...obj1, title: "Something happens"};

console.log(obj2);
console.log(obj2.hasOwnProperty("title"));
console.log(obj2.hasOwnProperty("id"));


