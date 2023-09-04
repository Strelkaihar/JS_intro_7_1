// Requirement:
// Write a function named as firstPos() which takes an array as an argument and returns the first positive element when invoked.
// NOTE: Assume you will not be given an empty array, and it contains only number elements.
// NOTE: Assume there is at least one positive element in the given array.
// Examples:
// firstPos([0, 3, -9,  5, 8])         -> 3
// firstPos([-2, 0, -7, 10, -5])       -> 10
// firstPos([1, 2, 3, -2])             -> 1
function firstPos(arg) {
    for(let i = 0; i < arg.length; i++){
        if(arg[i] > 0) return arg[i];
    }
};
console.log(firstPos([0, 3, -9,  5, 8]));
console.log(firstPos([-2, 0, -7, 10, -5]));
console.log(firstPos([1, 2, 3, -2]));

// Requirement:
// Write a function named as lastNeg() which takes an array as an argument and returns the last negative element when invoked.
// NOTE: Assume you will not be given an empty array, and it contains only number elements.
// NOTE: Assume there is at least one negative element in the given array.
// Examples:
// lastNeg([0, 3, -9,  5, 8])         -> -9
// lastNeg([-2, 0, -7, 10, -5])       -> -5
// lastNeg([1, 2, 3, -2])             -> -2

function lastNeg(array) {
    for(let i = array.length -1; i >= 0; i--){
        if(array[i] < 0) return array[i];
    }
};
console.log(lastNeg([0, 3, -9,  5, 8]));
console.log(lastNeg([-2, 0, -7, 10, -5]));
console.log(lastNeg([1, 2, 3, -2]));

/*
Requirement:
Write a function named as firstLongest() which takes an array as an argument and returns the longest element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only string elements.
NOTE: If there are 2 or more element having the longest count of characters, always return the first occurrence.
 
Examples:
firstLongest(["red", "blue", "yellow", "white"])    -> "yellow"
firstLongest(["Apple", "Banana", "Orange"])         -> "Banana"
firstLongest(["purple", "yellow", "orange"])        -> "purple"
*/
function firstLongest(array) {
    let str = "";
    for (let i = 0; i < array.length; i++) {
        if(array[i].length > str.length) str = array[i];
    }
    return str;
}
console.log(firstLongest(["red", "blue", "yellow", "white"]));
console.log(firstLongest(["Apple", "Banana", "Orange", "Pineapple"]));
console.log(firstLongest(["purple", "yellow", "orange"]));
/*
Requirement:
Write a function named as lastShortest() which takes an array as an argument and returns the shortest element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only string elements.
NOTE: If there are 2 element having the shortest count of characters, always return the last occurrence.
 
Examples:
lastShortest(["red", "blue", "yellow", "white"])    -> "red"
lastShortest(["Apple", "Banana", "Mango"])          -> "Mango"
lastShortest(["white", "yellow", "brown"])          -> "brown"
*/
function lastShortest(array) {
    let shortest = "";
    let maxLengths = Infinity
    for (const str of array) {
        if (str.length <= maxLengths) {
            shortest = str;
            maxLengths = str.length;
        } 
    }
    return shortest;
}
console.log(lastShortest(["red", "blue", "yellow", "white"]));
console.log(lastShortest(["Apple", "Banana", "Orange"]));
console.log(lastShortest([ "yellow", "orange", "purple"]));

// Requirement:
// Write a function named as max() which takes an array as an argument and returns the greatest element when invoked.
// NOTE: Assume you will not be given an empty array, and it contains only number elements.
 
// Examples:
// max([0, 3, -9,  5, 8]) 	    -> 8
// max([-2, 0, -7, 10, -5]) 	-> 10
// max([1, 2, 3, -2])          -> 3
// max([-5, -2])               -> -2
function max(array) {
    let maxNum = [];
    for (let i = 0; i < array.length - 1; i ++){
        if(array[i] < array[i + 1]) maxNum = array[i + 1];
    }
    return maxNum;
}
console.log(max([0, 3, -9,  5, 8]))
console.log(max([-2, 0, -7, 10, -5]))
console.log(max([1, 2, 3, -2]))
console.log(max([-5, -2]))

// Requirement:
// Write a function named as min() which takes an array as an argument and returns the greatest element when invoked.
// NOTE: Assume you will not be given an empty array, and it contains only number elements.
 
// Examples:
// min([0, 3,  5, 8])          -> 0
// min([-2, 0, -7, 10, -5])    -> -7
// min([1, 2, 3, 15])          -> 1

function min(array) {
    let min = Infinity;
    for(const num of array) {
        if(num < min) min = num;
    }
    return min;
}
console.log(min([0, 3,  5, 8]));
console.log(min([-2, 0, -7, 10, -5]));
console.log(min([1, 2, 3, 15]));

function commonElements (array1, array2) {
    const common = [];
    for (const number of array1) {
        if(array2.includes(number)) common.push(number);
    }
    return common;
}
console.log(commonElements([ 20, 50, 70 ], [ 10, 20, 30, 50, 70 ]));

