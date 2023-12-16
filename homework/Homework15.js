//Task 1
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
const alternatingCases = str =>  str.split(" ").map(value => {
    return value.split('').map((value1, index) => index % 2 === 0 ? value1.toUpperCase(): value1.toLowerCase()).join("")}).join(" ")
 

console.log(alternatingCases("Hello"))
console.log(alternatingCases("basketball"))
console.log(alternatingCases("Tech Global"))
console.log(alternatingCases(""))
console.log(alternatingCases("123!@#aB"))
//Task 4
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