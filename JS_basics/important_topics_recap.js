// Keyword "this:

function printName (name) {
    console.log(name);
}
//implicit binding

const person = {
    name: "Alan",
    age:29,
    printName () {
        console.log(this.name); // Alan
        console.log(this); // Object itself
    },
    mother: {
        hobbies: ["running", "baking"],
        name: "Jane",
        printName () {
            console.log(this.name); //Jane
            console.log(this); //Object itself
        },
    }
};
person.printName();
person.mother.printName();


//function is not inside the object

const person2 = {
    name: "Alan",
    age:29,
};
const person3 = {
    name: "Alex",
    age:31,
};
function printName1() {
    console.log(this.name);
    //this(window) => this(person2)
}
printName1();
//call
printName1.call(person2);

function printHobbies (h1, h2, h3) {
    console.log(`My name is ${this.name} My hobbies are ${h1}, ${h2}, ${h3}`)
}
const hobbies = ["reading", "coding", "fishing"];
printHobbies.call(person2, hobbies[0],hobbies[1],hobbies[2]);
printHobbies.call(person3, hobbies[0],hobbies[1],hobbies[2]);

//Apply
printHobbies.apply(person3,hobbies) // all the time returned whole array

// Bind
const bindPrintHobbies = printHobbies.bind(person2, hobbies[0], hobbies[1], hobbies[2]);
bindPrintHobbies()

//this keyword inside Normal function vs arrow function

function logMessage () {
    console.log(`this inside normal function` , this);
}
const logMessage2= () => {console.log(`this inside arrom function` , this)};
logMessage();
logMessage2();

const person4 = {
    name: "Bali",
    languages: ["English", "Arabic"],
    printLanguages () {
        const modifiedLanguages = this.languages.map(function(lang) {
            console.log(lang)
            // console.log(this)
            return `${this.languages.length} - ${lang}`
        })
        console.log(modifiedLanguages)
    }
}
person4.printLanguages()