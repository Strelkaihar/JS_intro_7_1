// bind
// Define a simple function
function greet(name) {
    console.log(`Hello, ${name}! My job is ${this.job}`);
}

// Create an object with a 'job' property
const person = {
    job: 'Software Developer'
};

// Using bind to create a new function with 'this' set to 'person'
const greetPerson = greet.bind(person);

// Now, when we invoke greetPerson, it will have 'person' as 'this'
greetPerson('Alice'); // Output: Hello, Alice! My job is Software Developer

//  -----call() -----call -----call -----call -----call -----call -----call 
function greet(name) {
    console.log(`Hello, ${name}! My job is ${this.job}`);
}

const person1 = {
    job: 'Software Developer'
};

// Using call to invoke 'greet' with 'person' as 'this' and passing 'name' as an argument
greet.call(person1, 'Bob'); // Output: Hello, Bob! My job is Software Developer

// -----apply() -----apply() -----apply() -----apply() -----apply() -----apply() -----apply()
function greet(name) {
    console.log(`Hello, ${name}! My job is ${this.job}`);
}

const person2 = {
    job: 'Software Developer'
};

// Using apply to invoke 'greet' with 'person' as 'this' and passing 'name' as an argument using an array

greet.apply(person2, ['Charlie']); 
// Output: Hello, Charlie! My job is Software Developer


// -- this -- this -- this -- this -- this -- this 
const person3 = {
    name: 'David',
    greet: function () {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

// 'this' in the 'greet' method refers to the 'person' object

person.greet(); // Output: Hello, my name is David

// In a different context, 'this' would refer to something else

const otherPerson = {
    name: 'Emma'
};

// Assigning the 'greet' method from 'person' to 'otherPerson'

otherPerson.greet = person3.greet;

// Now, 'this' in 'greet' method called on 'otherPerson' refers to 'otherPerson'

otherPerson.greet(); // Output: Hello, my name is Emma