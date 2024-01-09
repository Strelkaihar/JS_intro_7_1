// Task 1
// Write a function named countVC() which takes a string argument and returns an object with the 
// count of vowels and consonants.

const countVC = (str) => {
    let vowels = 0
    let consonants = 0
    let word = str.split('').filter(char => ((char.toLowerCase() >= 'a' && char.toLowerCase()<= 'z')))
    word.forEach(char => ('aouei').includes(char.toLowerCase()) ? vowels ++ : consonants ++)
    return {vowels, consonants}
}
console.log(countVC('Hello'))
console.log(countVC('Programming'))
console.log(countVC('123AbC'))
console.log(countVC('123!@#xyz'))
console.log(countVC(''))

//Task 2
// Write a function named countChars() which takes a string argument and returns an object with 
// the count of letters, numbers, and specials.
// NOTE: If the count of a category is 0 then it should not be in the object. Also spaces do 
// not count towards any category

const countChars = (str) => {
    let obj = { 
        letters: 0,
        specials: 0, 
        numbers: 0
    }

    for(let char of str) {
        if((char.toLowerCase() >= 'a' && char.toLowerCase()<= 'z')) obj.letters ++
        else if (('0987654321').includes(char)) obj.numbers ++
        else if(char !== ' ') obj.specials++
    }
    Object.keys(obj).forEach(key => {
        if(obj[key] === 0) delete obj[key]
    })
    return console.log(obj)
}
countChars("Hello")
countChars("Programming 123")
countChars("123AbC!@#")
countChars("0987654321")
countChars("   ")
countChars("")

//Task 3
// Write a function named maxOccurrences() which takes a string argument and returns the 
// character that appears the most number of times in the string.
// NOTE: If there is a tie, return the first one that appears in the string. This 
// task is case sensitive. Ignore spaces. If the string is empty or consist of spaces
//  only, then return an empty string.

const maxOccurrences = (str) => {
    let duplicate = ""
    let final = ""
    for (let i = 0; i <= str.length - 1; i++) {
        for(let j = 0;j <= str.length -1; j++){
            if(str[i] === str[j] && str[i] !== " " && str[i] !== "") duplicate += str[j]
        }
        if(duplicate.length > final.length) final = duplicate
        duplicate = ""
    }
    return final.length >= 1 ?  console.log(final[0]) : console.log("")
}
maxOccurrences("Hello")
maxOccurrences("Occurrences")
maxOccurrences("    ab   ")
maxOccurrences("12   3  21")
maxOccurrences("    ")
maxOccurrences("")
//Task 4
// Write a function named starOut() which takes a string argument and returns it back with
//  every star removed as well as the right and left of the star.
// NOTE: If there are 2 stars next to each other than remove the next non star
// So "ab*cd" yields "ad" and "ab**cd" also yields "ad".

const starOut = (string)=> {
    for (const char of string.split(' ')) {
        if (char.includes('*')) 
            return char.replaceAll('*', '').slice(0, 1) + char.replaceAll('*', '').slice(-1)
    }
    return string
}
console.log(starOut("ab*cd"))
console.log(starOut("ab**cd"))
console.log(starOut("xm*sm*sy"))
console.log(starOut("abc"))
console.log(starOut("***"))
console.log(starOut("   "))
console.log(starOut(""))
//Task 5
// Write a function named romanToInt() which takes a string roman numeral as its arguments 
// and return the roman numeral converted to the number. A roman numeral is a set of symbols 
// that add up to a number. CXII -> 100+10+1+1 -> 112

const romanToInt = (str) => {
    const romanValue = {I: 1, V: 5, X: 10, L:50, C: 100, D: 500, M: 1000}
    let count = 0
    romanString = Object.keys(romanValue).join("")
    for(const [key, value] of Object.entries(romanValue)) {
        for (let i = 0; i < str.length ; i++) {
            if(str[i] === key) {
                if(romanString.includes(str[i + 1]) && str[i] === "I" && str[i + 1] !== "I") count += value - 2
                else count += value
            }
        }
    }
    return console.log(count)
}
romanToInt('I')
romanToInt('IV')
romanToInt('CXII')
romanToInt('MMM')
romanToInt('MMMDCCCLXXXVIII')
romanToInt('MDCLXVI')