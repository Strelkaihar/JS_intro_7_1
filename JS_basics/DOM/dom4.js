/*
DOM events
MOuse events
*/
//click
const clickButton = document.getElementById("clickButton");
clickButton.addEventListener("click", (event) => {
    console.log("You clicked", event.target);
});
//doubleclickButton
const dblclickButton = document.getElementById("dblclickButton");
dblclickButton.addEventListener("dblclick", (event) => {
    console.log("You Double click button", event.target);
})
// mousedown
const mouseDown = document.getElementById("mouseDown");

mouseDown.addEventListener("mousedown", (event) => {
    console.log("You pressed down", event.target);
})
const mouseUp = document.getElementById("mouseUp");

mouseUp.addEventListener("mouseup", (event) => {
    console.log("You pressed Up", event.target);
})

const mouseMove = document.getElementById("mouseMove");

mouseMove.addEventListener("mousemove", (event) => {
    console.log("You move your mouse", event.target);
})
const mouseOut = document.getElementById("mouseOut");

mouseOut.addEventListener("mouseout", (event) => {
    console.log("You going out from button", event.target);
})

/*
2.Keyword events
 */
// const body = document.querySelector("body");
// // keydown
// body.addEventListener("keydown", (event) => {
//     console.log("keydown event =>", event.target);
// })
// //keyup
// body.addEventListener("keyup", (event) => {
//     console.log("keyup event =>", event.target);
// })
// //keypress
// body.addEventListener("keypress", (event) => {
//     console.log("keypress event =>", event.target);
// })
// Forms events
//change input
const changeInput = document.getElementById("changeInput");
changeInput.addEventListener("change", (event) =>{
    // event.target.value => whatever user types
    console.log(event.target.value);
});

//input
const inputInput = document.getElementById("inputInput");

inputInput.addEventListener("input", (event) =>{
    console.log(event.target.value);
});
//focus 
const formInput = document.getElementById("formInput");

formInput.addEventListener('focus', (event) =>{
    event.target.style.backgroundColor = "darkred";
    event.target.style.color = "white"
});
formInput.addEventListener("blur", (event) => {
    let element = event.target;
    element.style.backgroundColor = "";
    element.style.color = "";
});

// submit

// const formEl = document.querySelector("form");
// formEl.addEventListener("submit", (event) => {
//     event.preventDefault();
//     console.log("Form successfully submitted");
//     console.log({
//         name: "Joe",
//         email: "joe@gmail.com"
//     });
// });
const formEl = document.querySelector("form");
formEl.addEventListener("keypress", (event) => {
    event.preventDefault();
    console.log("Form successfully submitted");
    console.log({
        name: "Joe",
        email: "joe@gmail.com"
    });
});

// Window event
//Scroll
window.addEventListener("scroll", (event) => {
    console.log("we are scrolling the page");
    console.log(`your coordinate is x: ${window.scrollX} and y: ${window.scrollY}`)
})

//Activity
/*

 */