const arr1 = [3, 4, 5];
const arr2 = ["Mouse", "Computer", "Desk"];
let arr1_Str = arr1.toString();
let arr2_Str = arr2.toString();

console.log(arr1); // [ 3, 4, 5 ]
console.log(arr1_Str); // 3,4,5

console.log(arr2); // [ 'Mouse', 'Computer', 'Desk' ]
console.log(arr2_Str); // Mouse,Computer,Desk

let arr2_Str_pipe = arr2.join(" | ");
console.log(arr2_Str_pipe); // Mouse | Computer | Desk

const newArr = arr2_Str_pipe.split(" | ");
console.log(newArr); // [ 'Mouse', 'Computer', 'Desk' ]

let str = "Tech";
const str_splitted = str.split("");
console.log(str_splitted);

let str1 = "1-2-3-4-5-6-7-8";
const str_array = str1.split("-");
console.log(str_array);
let data_array_string = str_array.join(" 000 ");
console.log(data_array_string);

console.log(("1-2-3-4-5-6-7-8").split("-").join(" 000 "));