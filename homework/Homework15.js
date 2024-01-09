//Task 1
// Write a function named toCamelCase() which takes a string as its argument and returns a
//  new string in camelCase. Assume the string only contains letters and spaces

const toCamelCase =  str => {
const strCamel = str.trim().split(" ")
let result = ""
for(let el of strCamel) {
    if(strCamel.length === 1) return console.log(strCamel.join())
    else if(strCamel.indexOf(el) === 0) result += el.toLowerCase()
    else result += el.slice(0, 1).toUpperCase() + el.slice(1).toLowerCase()
}
return console.log(result)
}
toCamelCase('first name')
toCamelCase('last   name')
toCamelCase('   ZIP CODE')
toCamelCase('I Learn Java Script')
toCamelCase('helloWorld')

//Task 2
// Write a function named toSnakeCase() which takes a string as its argument and returns a new 
// string in snake_case. Assume the string only contains letters and spaces
// NOTE: In snake case words are separated by underscores (_) and are all lowercase.

const toSnakeCase = str => {
    const strSnake = str.split(' ')
    let arr = []

    for(const el of strSnake) if(el.length >= 1) arr.push(el)
    return arr.join("_").toLowerCase()
}
console.log(toSnakeCase('first name'))
console.log(toSnakeCase('last  name'))
console.log(toSnakeCase('    I love Java Script'))
console.log(toSnakeCase('already_snake_case'))
console.log(toSnakeCase('hello'))

//Task 3
// Write a function named alternatingCases() which takes a string argument and returns the string 
// with alternating capitalization.
// NOTE: The first letter should always be uppercase and non-letter characters are ignored.

const alternatingCases = str =>  str.split(" ").map(value => {
    return value.split('').map((value1, index) => index % 2 === 0 ? value1.toUpperCase(): value1.toLowerCase()).join("")}).join(" ")
 

console.log(alternatingCases("Hello"))
console.log(alternatingCases("basketball"))
console.log(alternatingCases("Tech Global"))
console.log(alternatingCases(""))
console.log(alternatingCases("123!@#aB"))
//Task 4
// Write a function named isNeutral() that takes two strings comprised of + and -, and return a
//  new string which shows how the two strings interact in the following way:
// When positives and positives interact, they remain positive.
// When negatives and negatives interact, they remain negative.
// But when negatives and positives interact, they become neutral, and are shown as the number 0.
// Note: The two strings will be the same length.

const isNeutral = (str, str1) => {
    let result = ""
    for(let i = 0; i < str.length; i++){
        if(str[i] !== str1[i]) result += 0
        else result += str[i]
    }
    return console.log(result)
}
isNeutral('-', '+')
isNeutral('-+', '-+')
isNeutral('-++-', '-+-+')
isNeutral('--++--', '++--++')
isNeutral('+++', '+++')
//Task 5
// Write a function named isTrueOrFalse() which takes a string with sets of character/words 
// separated by space. Looking at the first letter of each word (case insensitive-"A" and "a" 
// should be treated the same), you need to determine whether it falls into the positive/first
//  half of the alphabet ("a"-"m") or the negative/second half ("n"-"z"). Return true if there 
//  are more (or equal) positive words than negative words, false otherwise.
// NOTE: alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// NOTE: Ignore all the digits, spaces and special characters.

const isTrueOrFalse = str => {
    some = str.toUpperCase().split(' ')
    let positive = 0, negative = 0
    for(const el of some) {
        if("ABCDEFGHIJKLM".includes(el[0])) positive ++
        else negative ++
    }
    return console.log(positive >= negative)
}
isTrueOrFalse('A big brown fox caught a bad rabbit')
isTrueOrFalse('Xylophones can obtain Xenon.')
isTrueOrFalse('CHOCOLATE MAKES A GREAT SNACK')
isTrueOrFalse('All FOoD tAsTEs NIcE for someONe')
isTrueOrFalse('Got stuck in the Traffic')