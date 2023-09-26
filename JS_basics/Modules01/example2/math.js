//named export
export const add = (num1, num2) => {
    return num1 + num2;
}
 export const substract = (num1, num2) => {
    return num1 - num2;
}

// //Different exporting named function
// export {
//     add,
//     substract
// }

function multiply(num1, num2){
    return num1 * num2;
}
export default multiply;

