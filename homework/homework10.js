//Task 1
const calculateTotalPrice1 = (obj) => {
    const product = {
        apple: 2,
        orange: 3.29,
        mango: 4.99,
        pineapple: 5.25,
    };
    let sum = 0;
    for (const prod in obj) {
         sum += obj[prod] * product[prod];
    }
    return console.log(sum);

};
calculateTotalPrice1({ apple: 3, mango: 1 });
calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 });
calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 });
calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango:1 });

//Task 2
const calculateTotalPrice2 = (obj) => {
    const product = {
        Apple: 2,
        Orange: 3.29,
        Mango: 4.99,
        Pineapple: 5.25,
    };
    let sum = 0;
    for (const prod in obj) {
        for (const price in product) {
            if (prod === "Apple" && obj[prod] >= 2 && prod === price && prod) {
                if(obj[prod] % 2 === 0) sum += ((obj[prod] * product[price]) / 2) + ((obj[prod] * product[price])/ 2)/2
                else sum += (((obj[prod]+ 1) * product[price])/ 2) + (((obj[prod]-1)* product[price]) / 2)/2
            }
            else if (prod === "Mango" && obj[prod] >= 4 && prod === price && prod) sum += (obj[prod] * product[price]) - (4.99 * Math.floor(obj[prod] / 4))
            else if (prod === price) sum += obj[prod] * product[price];
            
        }
    }
    return sum === 0 ? console.log(sum) : console.log(sum.toFixed(2));
};
// const calculateTotalPrice2 = (obj) => {
//     const product = {
//         Apple: 2,
//         Orange: 3.29,
//         Mango: 4.99,
//         Pineapple: 5.25,
//     };
//     let sum = 0;
// for (let item in obj) {
//     const noSale = obj[item] * product[item]
//    if(item === 'Apple') {
//         let sale = (Math.floor(obj[item]/2) * product[item])/2
//     sum += noSale - sale
//    }
//    else if(item === 'Mango') {
//         let sale = Math.floor(obj[item]/4) * product[item]
//         sum += noSale - sale
//    }
//    else sum += noSale;
// }
// return console.log(sum.toFixed(2));
// }
calculateTotalPrice2({ Apple: 3, Mango: 5 });
calculateTotalPrice2({ Apple: 4, Mango: 8, Orange: 3 });
calculateTotalPrice2({ Apple: 0, Pineapple: 0, Orange: 0 });
calculateTotalPrice2({ Apple: 4, Pineapple: 1, Orange: 1, Mango: 3 });


// Task 3
const nthWord = (str, number) => str.split(" ")[number - 1] || " "
    // if(str.split(" ").length < number) return console.log(" ")
    // else return console.log(str.split(" ")[number - 1])

console.log(nthWord("I like programming languages", 2));
console.log(nthWord("QA stands for Quality Assurance", 4));
console.log(nthWord("Hello World", 3));
console.log(nthWord("Javascript", 1));
console.log(nthWord("", 1));

// Task 4
const isArmstrong = (num) => {
    const arNum = num.toString().split("");
    let armNum = 0;
    let arm = arNum.reduce((total, i) => total + Math.pow(i, arNum.length), 0)
    // for(let number of arNum) {
    //     armNum += number ** arNum.length
    // }
return console.log(arm === num);
}
isArmstrong(153) 
isArmstrong(123) 
isArmstrong(1634) 
isArmstrong(153) 
isArmstrong(1111)

//Task 5 
function reverseNumber(number) {
    let revNumber = 0;
    while (number > 0) {
      revNumber = (revNumber * 10) + (number % 10);
      number = Math.floor(number / 10);
    }
    return revNumber;
  }
  console.log(reverseNumber(876));

// task 6 
const doubleOrTriple = (arr, boolean) => {
    if(boolean === true) return arr.map(x => x * 2)
    else return arr.map(x => x * 3)
}
console.log(doubleOrTriple([1, 5, 10], true));
console.log(doubleOrTriple([3, 7, 2], false));
console.log(doubleOrTriple([-1, -2], true));
console.log(doubleOrTriple([0], false));
console.log(doubleOrTriple([-1, 0, 1], true));
// Task 7 

const splitString = (str, num) => {
    if(str.length % num !== 0) return " "
    else return str.slice(0, num) + " " +  str.slice(num)
}
console.log(splitString("JavaScript", 5))
console.log(splitString("Java", 4))
console.log(splitString("Automation", 3))
console.log(splitString("Hello", 6))
console.log(splitString("12", 1))

