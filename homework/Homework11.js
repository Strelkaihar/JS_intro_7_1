//Task 1
const countPalindrome = (str) => {
    let count = 0;
    const rev = str.split(" ")
    for(const el of rev){
        let revEl = el.split("").reverse().join("").toLowerCase()
        if(el !== '' && el.toLowerCase() === revEl) count ++
    }
    return count
}
console.log(countPalindrome('Mom and Dad'))
console.log(countPalindrome('See you at noon'))
console.log(countPalindrome('Kayak races attracts racecar drivers'))
console.log(countPalindrome(''))
console.log(countPalindrome('No palindrome here'))

//Task 2
const sum = (arr, bool) => {
    let sum = 0
    for(let i = 0; i < arr.length ; i++) {
        if(bool === true && i % 2 === 0) sum +=arr[i]

        else if (bool === false && i % 2 !== 0)  sum +=arr[i]
    }
    return console.log(sum)
}
sum([1, 5, 10], true)
sum([3, 7, 2, 5, 10], false)
sum([-1, 1, -2, 2], true)
sum([0, -1, 15, 1], false)
sum([1, 2, 3, 4, -4], true)

//Task 3
const nthChars = (str, num) => {
    const strChar = str.split('')
    let ntnStr = ""
    for ( let i = 0 ; i < str.length; i ++ ) {
        if( (i + 1) % num === 0) ntnStr += strChar[i]
    }
    return console.log(ntnStr)
}
nthChars("Java", 2)
nthChars("JavaScript", 5)
nthChars("Java", 3)
nthChars("Hi", 4)
nthChars("0123456789", 2)
//Task 4
const canFormString = (str, str1) => {
    let duplicated = ""
    let strF = str.split("").join(" ")
    for (let i = 0; i <= str1.length; i++) {
        if(strF.toLowerCase().includes(str1[i])) {
        strF = strF.replace(str1[i], " ")
        duplicated +=str1[i] 
        }
    }
    console.log(duplicated, str1)
    return console.log(duplicated === str1)
}
canFormString("Hello", "Hi")
canFormString("programming", "gaming")
canFormString("halogen", "hello")
canFormString("CONVERSATION", "voices rant on")
canFormString("12", "123")

//Task 5
const isAnagram = (str, str1) => {
    let duplicated = ""
    let strF = str.split("").join(" ")
    for (let i = 0; i <= str1.length; i++) {
        if(strF.toLowerCase().includes(str1[i])) {
        strF = strF.replace(str1[i], " ")
        duplicated +=str1[i] 
        }
    }
    return console.log(duplicated === str1)
}
isAnagram("Apple", "Peach")
isAnagram("listen", "silent")
isAnagram("astronomer", "moon starer")
isAnagram("CINEMA", "iceman")
isAnagram("123", "1234")

//Task 6 
const count = (arr, bool) => {
    let count = 0
    for(let i = 0; i < arr.length ; i++) {
        if(bool === true && arr[i] % 2 === 0) count ++ 

        else if (bool === false && arr[i] % 2 !== 0)  count ++
    }
    return console.log(count)
}
count([1, 5, 10], true)
count([3, 7, 2, 5, 10], false)
count([-1, 1, -2, 2], true)
count([0, -1, 15, 1], false)
count([1, 2, 3, 4, -4], true)

//Task 7
function sumDigitsDouble (string){
    let num3 = 0
    for (let word of string){
        if ('0123456789'.includes(word)) num3 += Number(word)
    }
    if(num3 === 0) return -1
    return num3 * 2
}
console.log(sumDigitsDouble("Javascript"));
console.log(sumDigitsDouble("23abc45"));
console.log(sumDigitsDouble("Hi-23"));
console.log(sumDigitsDouble("ab12"));
console.log(sumDigitsDouble("n0numh3r3"));
//Task 8
const countOccurrence = (str, str1) => {
    let duplicated = ""
    for (let i = 0; i < str.length; i++) {
        if(str1.toLowerCase().includes(str[i].toLowerCase())) {
        duplicated +=str[i]
        }
    }
    if(duplicated.length >= str1.length) return Math.floor(duplicated.length / str1.length)
    else return 0
}
console.log(countOccurrence("Javascript", "Java"))
console.log(countOccurrence("Hello", "World"))
console.log(countOccurrence("Can I can a can", "anc"))
console.log(countOccurrence("Hello", "l"))
console.log(countOccurrence("IT conversations", "IT"))
