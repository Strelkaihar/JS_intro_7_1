//Task 1
// Write a function named toInitials() which takes a string argument considered to be full name
//  and returns initials of the given full name.

// NOTE: Initials should be separated with a space and followed with a period.
// Assume you will always be given first name and last name only. 

const toInitials = str => str.split(' ').map(x => `${x[0]}.`).join(" ")
console.log(toInitials('Joe Doe'))
console.log(toInitials('Alex Reyes'))
console.log(toInitials('Tom Cruise"'))
console.log(toInitials('Bruce Willis'))
console.log(toInitials('Ja Le'))

//Task2
// Write a function named hasNumbers() which takes a string argument and returns true if 
// there is a number and false if there isn’t. 

const hasNumbers = str =>  str.split('').some(x => '01234567890'.includes(x))
console.log(hasNumbers(''))
console.log(hasNumbers('John is 34 years old'))
console.log(hasNumbers('Hello 3'))
console.log(hasNumbers('125$'))
console.log(hasNumbers('    a     '))
console.log(hasNumbers('       '))
console.log(hasNumbers('!@#$%^&*()_+'))
//Task 3
// Write a function named elementLength() which takes an array argument and returns the
//  length of each element as a separate array.

const elementLength = arr => arr.map(x => x.length)
console.log(elementLength([ "Hello", "World" ] ))
console.log(elementLength([ "Apple", "Banana", "Orange", "Pear" ] ))
console.log(elementLength(["BMW", "Mercedes", "Audi" ] ))
console.log(elementLength([] ))
console.log(elementLength([ "Trampoline", "", "Tennis", "Basketball" ] ))
//Task4 
// Write a function named isArraySumEvenOrOdd() which takes an array of numbers and calculates
//  if the sum of its elements is even or odd.
// Note: If the array is empty return even.

const isArraySumEvenOrOdd = arr => {
    let sum = 0
    for(const x of arr) {
        sum += x
    }
    return sum % 2 === 0 ? 'even' : 'odd'
}
console.log(isArraySumEvenOrOdd([]))
console.log(isArraySumEvenOrOdd([ 0, -1, -5 ] ))
console.log(isArraySumEvenOrOdd([ 7,1, 8,1 ] ))
console.log(isArraySumEvenOrOdd([  0,0 ] ))
console.log(isArraySumEvenOrOdd([ 1,1,1,1,1] ))
//Task5 
// Write a function named reverse() which takes a string argument and returns the given string reversed. 

const reverse = str => str.split('').reverse().join('')
console.log(reverse('Hello World'))
console.log(reverse('TechGlobal'))
console.log(reverse('Basketball is fun'))
console.log(reverse(''))
console.log(reverse('Apples 456'))
//Task6
// Write a function named reverseWords() which takes a string argument and returns a string
//  with each word within that string reversed but still in the same order as the initial string. 

const reverseWords = str => str.split(' ').map(x => x.split('').reverse().join('')).join(' ')
console.log(reverseWords('Hello World'))
console.log(reverseWords('TechGlobal'))
console.log(reverseWords('Basketball is fun'))
console.log(reverseWords(''))
console.log(reverseWords('Apples 456'))