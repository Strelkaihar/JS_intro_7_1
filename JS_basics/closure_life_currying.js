//----closure----closure----closure----closure----closure----closure----closure----closure
function outerFunction() {
    const outerVar = 'I am from outerFunction';
    
    function innerFunction() {
        console.log(outerVar); // innerFunction has access to outerVar (closure)
    }
    
    return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // Output: I am from outerFunction

// ---iife---iife---iife------iife---iife---iife---iife---iife---iife---iife---iife---iife---iife
(function () {
    const localVar = 'I am local'.split(" ");
    console.log(localVar);
})();
// Output: I am local

// localVar is not accessible here because it's scoped to the IIFE

console.log(localVar); // Error: localVar is not defined

// ------- currying ------- currying ------- currying ------- currying ------- currying ------- currying ------- currying 
function add(a) {
    return function(b) {
        return a + b;
    };
}
const addFive = add(5);
console.log(addFive(3)); // Output: 8 (5 + 3)



let place = 'Planet Earth';

function HQ(){
  return middleFunction('United States');

  function middleFunction(country) {
    return innerFunction('Illinois');

    function innerFunction(state) {
      city = 'Chicago';
      return innermostFunction();

      function innermostFunction() {
        return 'Techglobal is at ' + place + ', ' + country + ', ' + state + ', ' + city;
      }
    }
  }
}
console.log(HQ())


let count = 0;
function increment (num) {
    return count +=num;
}
console.log(increment(2));
console.log(increment(6));
console.log(increment(-1));