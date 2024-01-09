//Task 1
// Write a function named countPalindrome() which takes a string and returns the number of 
//  palindrome words.
// Note: A palindrome word is a word that reads the same forwards and backwards. Example: 
// level, radar, deed, refer.

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
// Write a function named sum() which takes an array of numbers and a boolean value as 
// arguments. It will return the sum of the numbers positioned at even indexes if true.
//  And, return sum of numbers positioned at odd indexes if false.

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
// Write a function named nthChars() which takes a string and a number as arguments and 
// returns the string back with every nth characters.
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
// Write a function named canFormString() which takes two string arguments and returns true 
// if the second string can be formed by rearranging the characters of first string. Return 
// false otherwise.
// NOTE: This method is case-insensitive and ignore the white spaces.

const canFormString = (str, str1) => {
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
canFormString("Hello", "Hi")
canFormString("programming", "gaming")
canFormString("halogen", "hello")
canFormString("CONVERSATION", "voices rant on")
canFormString("12", "123")

//Task 5
// Write a function named isAnagram() which takes two string arguments and returns true if the given
//  strings are anagram. Return false otherwise.
// NOTE: An anagram is a word or phrase formed by rearranging the letters of another word or phrase.
//  In the context of strings, checking if two strings are anagrams of each other means verifying if
//   they contain the same characters in the same quantities, regardless of the order of those characters.
// NOTE: This method is case-insensitive and ignore the white spaces.

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
// Write a function named count() which takes an array of numbers and a boolean value as 
// arguments. It will return the total count of the even numbers if the boolean value is 
// true. And return the total count of the odd numbers if the boolean value is false.
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
// Write a function named sumDigitsDouble() which takes a string and returns the sum of the 
// digits in the given String multiplied by 2. Return -1 if the given string does not have any 
// digits. Ignore negative numbers.

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
// Write a function named countOccurrence() which takes two string arguments and returns
//  how many times that the first string can form the second string.

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
