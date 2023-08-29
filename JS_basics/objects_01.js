const person = {
    fName : "John", 
    age : 25, 
    city : "Chicago"
};
console.log(person); // { fName: 'John', age: 25, city: 'Chicago' }
// adding more properties
person.lName = "Doe"
person["gender"] = "Male";

console.log(person) // { fName: 'John', age: 25, city: 'Chicago', lName: 'Doe' }
let personAge = person.age;
console.log(personAge); // 25
console.log(person.age); // 25
console.log(person['city']); // Chicago
person.fName = "Jane";
person["lName"] = "Smith";

console.log(person.fName); // John
console.log(person.lName); // Smith

// deleting object properties
delete person.gender;
delete person.lName;
delete person.city
console.log (person); // { fName: 'Jane', age: 25 }
console.log(person.gender);

const car = {
    color : "red",
    year : 2023,
    make : "BMW",
    model : "X7"
};
car.color = "black";

console.log(car.color);
console.log(car.year);
console.log(car.make);
console.log(car.model);


