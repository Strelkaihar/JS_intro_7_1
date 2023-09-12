
// Spread syntax is (...) just three dots converting into string
function printNum (nums) {
    console.log(nums);
}
printNum([1, 2, 3]);

const arr1 = [1, 2, 3], arr2 = [4, 5, 6], arr3 = [7, 8, 9];
const resultArr = arr1.concat(arr2, arr3);
console.log(resultArr);

const resultArr2 = [...arr1, ...arr2, ...arr3];
console.log(resultArr2)

const obj1 = {a: "a", b: "b"};
const obj2 = {c: "c", d: "d"};

const obj3 = Object.assign(obj1, obj2);
console.log(obj3);

const obj4 = {...obj1, ...obj2};
console.log(obj4)

// Rest syntax is (...) just three dots -- add brackets (converting into array)

const arr4 = ["a", "b", "c", "d"];
const obj5 = {a: "a", b: "b", c:"c", d:"d"};
const [first, second, ...rest] = arr4;
console.log(first, second, rest);
