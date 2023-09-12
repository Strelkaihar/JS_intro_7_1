
// Global Scope
let globalVariable = "this is global variable"
console.log(globalVariable);

function someVariable () {
    console.log(globalVariable);
}
someVariable()

// Local Scope
//Inside function
function printColor() {
    var color = "blue";
    let color2 = "blue";
    const color3 = "blue";
    console.log(color);
}
console.log(color);
console.log(color2);
console.log(color3);
printColor();

//Inside block
if(true) {
    var color4 = "blue";
    let color5 = "blue";
    const color6 = "blue";
}
console.log(color4);// blue
console.log(color5);// color6 is not defined
console.log(color6);// color6 is not defined


