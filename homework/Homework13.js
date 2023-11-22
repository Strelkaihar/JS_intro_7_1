// Task 1
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