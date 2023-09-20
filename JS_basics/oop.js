const person = {
    name: "Yuliia",
    greet() {
        console.log(`Hello, my name is ${this.name}`)
    }
};
console.log(person);

function createPerson(name) {
    let obj ={};
    obj.name = name;
    obj.greet = function() {
        console.log(`Hello, my name is ${obj.name}`)
    }
    return obj;
}
const yuliia = createPerson("Yuliia");
const alex = createPerson("Alex");
const joe = createPerson("Joe");

yuliia.greet()

//Prototypical chain
const date = new Date("December 17, 1995 03:24:00");
console.log(date); // 1995-12-17T09:24:00.000Z
console.log(typeof date); // object

//this method coming from Date
const fullYear = date.getFullYear();
console.log(fullYear); // 1995
console.log(typeof fullYear); // number

//this date coming from Object
console.log(date.toString()); // Sun Dec 17 1995 03:24:00 GMT-0600 (Central Standard Time)
console.log(typeof date.toString()); // string
console.log(date.toLocaleDateString()); // 12/17/1995


// Constructor functions

const Cat = function (name, breed) {
    this.name = name;
    this.breed = breed;
}
Cat.prototype.getDetails = function() {
    console.log(`${this.name} is a ${this.breed}`);
};
const cat1 = new Cat("leo" , "Bengal");
console.log(cat1);

// Class

class Animal2 {
    constructor (name, breed) {
        this.name = name;
        this.breed = breed;
    }
    getDetails = function() {
        console.log(`${this.name} is a ${this.breed}`);
    }
}
const animal = new Animal2("Jack", "Bulldog");
animal.getDetails();

class Cat2 extends Animal2{
    constructor (name, breed) {
        super(name, breed); // it call parent class constructor
    }
    meow () {
        console.log("Meow")
    }
}
const cat2 = new Cat2("GGG", "safas");
cat2.getDetails();
cat2.meow();

class Dog2 extends Animal2{
    constructor (name, breed) {
        super(name,breed)
    }
}
const dog2 = new Dog2("sasd", "DDDD");
dog2.getDetails()

//Getter and setter
class Person {
    #name = "Joe"
    get name(){
        return this.#name;
    }
    set name(val) {
        this.#name = val;
    }
}
const p = new Person();
console.log(p.name)
console.log(p.name)
p.name = "Igor";
console.log(p.name)

// // 1. Create a "Course" class which has three properties: "title", "length" and "price"
//  (all set up in the constructor). Instantiate the class twice (two dummy courses of your choice).
//   Output the objects to the console.
// // 2. Add two methods to the "Course" class: A method which calculates the length/price value 
// ("how much length do you get for the amount paid") and one method that outputs a nice course 
// summary (including title, length and price). Call these methods thereafter (and output the result
//      to the console).
// // 3. Create two new, more specialized, classes: "PracticalCourse" and "TheoreticalCourse".
//  Both should be based on the "Course" class but "PracticalCourse" should also have a 
//  "numOfExercises" property, "TheoreticalCourse" should have a "publish()" method 
//  (which just prints something to the console). Instantiate both and use the new AND old properties and methods.
// // 4. Use getters and setters to ensure that the "price" property can only be set to a 
// positive value and is returned with a "$" in front of it.

class Course {
    constructor(title, length, price){
        this.title = title;
        this.length = length;
        this._price = price;
    }
    get price(){
        return "$" + this._price;
    }
    set price(val) {
        if(val < 0) {
            "Invalid value "
        } this._price = val;
    }
    calc() {
        return this.length/this._price
    }
    thereafter(){
        return `The course is ${this.title} length of the course ${this.length} days and price ${this.price} $`
}
}
const jsCourse = new Course("JavaScript", 6, 4000)
const cypres = new Course("cypres", 4, 4000)

console.log("JavaScript", jsCourse); // JavaScript Course { title: 'JavaScript', length: 6, price: 4000 }
console.log("cypres", cypres); // cypres Course { title: 'cypres', length: 4, price: 4000 }
console.log(jsCourse.calc()); // 0.0015
console.log(jsCourse.thereafter()); //The course is JavaScript length of the course 6 days and price 4000 $
console.log(cypres.calc()); // 0.001
console.log(cypres.thereafter()); //The course is cypres length of the course 4 days and price 4000 $
console.log(jsCourse.price);
jsCourse.price = 14;
console.log(jsCourse.price);

class PracticalCourse extends Course {
    constructor (title, length, price, numOfExercises){
    super(title, length, price)
    this.numOfExercises = numOfExercises;
    }
}
const pCourse = new PracticalCourse("Practical course", 2, 100, 12)
console.log((pCourse));

class TheoreticalCourse extends Course {
    publish() {
        return "Hello World";
    }
}
const tCourse = new TheoreticalCourse("SDLC", 3, 1500)
console.log(tCourse);
console.log(tCourse);
