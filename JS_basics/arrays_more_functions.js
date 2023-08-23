const arr1 = [2, 3, 5];
const arr2 = arr1.reverse();

console.log(arr1); // [ 5, 3, 2 ]
console.log(arr2); // [ 5, 3, 2 ]

const arr3 = arr2.reverse();

console.log(arr1); // [ 2, 3, 5 ]
console.log(arr2); // [ 2, 3, 5 ]
console.log(arr3); // [ 2, 3, 5 ]

// slice() and splice()
// slice() is used to get sub array from an array
//
const arr = ["Grapes", "Kiwi", "Apple", "Orange"];
const sub_array = arr.slice();
const sub_array1 = arr.slice(0);
const sub_array2 = arr.slice(1);

console.log(sub_array); // [ 'Grapes', 'Kiwi', 'Apple', 'Orange' ]
console.log(sub_array1); // [ 'Grapes', 'Kiwi', 'Apple', 'Orange' ]
console.log(sub_array2); // [ 'Kiwi', 'Apple', 'Orange' ]

const sub_array3 = arr.slice(0, 1);
const sub_array4 = arr.slice(1, 3);
const sub_array5 = arr.slice(2, 8);

console.log(sub_array3); // [ 'Grapes' ]
console.log(sub_array4); // [ 'Kiwi', 'Apple' ]
console.log(sub_array5); // [ 'Apple', 'Orange' ]

arr.splice(1, 0, "Pineapple");
console.log(arr); // [ 'Grapes', 'Pineapple', 'Kiwi', 'Apple', 'Orange' ]

arr.splice(1, 3);
console.log(arr); // [ 'Grapes', 'Orange' ]

arr.splice(5 , 0, "Peach", "Berry"); // [ 'Grapes', 'Orange', 'Peach', 'Berry' ]
console.log(arr);

arr.sort();
console.log(arr); // [ 'Berry', 'Grapes', 'Orange', 'Peach' ]

arr.push("apple");
console.log(arr); // [ 'Berry', 'Grapes', 'Orange', 'Peach', 'apple' ]

arr.push("Banana")
arr.sort();
console.log(arr); // [ 'Banana', 'Berry', 'Grapes', 'Orange', 'Peach', 'apple' ]

const chars = [["a", 'b'], ['1' , '2'], ['$', '#', '@'], ' '];
const chars_flat = chars.flat();
console.log(chars);
console.log(chars_flat);
