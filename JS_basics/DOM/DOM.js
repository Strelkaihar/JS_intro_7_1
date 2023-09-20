

// // Window object
// console.log("window", window); // ReferenceError: window is not defined

// //alert
// // window.alert("im ok) how are you");

// //prompt
// // const promptResult = window.prompt();
// // console.log(promptResult) // null or string

// // let confirmResult = window.confirm("Are you ready");
// // console.log(confirmResult); // True or false

// //innerHeight or innerWidth give you size of the window
// console.log(window.innerWidth)
// console.log(window.innerHeight)

// //ScrollTo(x, y) x and y cordinate
// window.scrollTo(0, 0); // scroll page to the top

// //location - object
// // window.location.reload()

// //localStorage
// // window.localStorage();
// console.log(window.localStorage.length)

// //set item to local storage
// window.localStorage.setItem("name", "john");
// window.localStorage.setItem("isLoggedIn", false);
// window.localStorage.setItem("userID", 1234);
// window.localStorage.setItem("array", JSON.stringify([1, 2, 3, 5]));
// window.localStorage.setItem("object", JSON.stringify({name: "John", lastName: "Rex"}));


// //get item from local storage
// console.log(window.localStorage.getItem("name"));// john
// console.log(window.localStorage.getItem("isLoggedIn"));// false
// console.log(window.localStorage.getItem("userID"));//1234
// console.log(JSON.parse(window.localStorage.getItem("object")));// {name: 'John', lastName: 'Rex'}
// console.log(JSON.parse(window.localStorage.getItem("array")));// [1, 2, 3, 5]

// //remove item from localStorage
// window.localStorage.removeItem("name");
// window.localStorage.removeItem("ilLoggedIn");
// window.localStorage.removeItem("userID");

// window.localStorage.clear() // clear everything from localStorage

const userName = window.prompt("What is you name");

if(userName === null || userName === "") {
    window.alert("You didn't provide your name, bye bye");
}
else {
    window.alert(`Hello ${userName}`)
    const doesUserWantToContinue = window.confirm("Do you want to continue");
    if(doesUserWantToContinue) {
        window.alert("You have chosen to continue")
        // log user device dimensions
        
    const innerHeight = window.innerHeight;
    const innerWidth = window.innerWidth;
    console.log(`Your device dimension if ${innerHeight} width ${innerWidth}`);
    //warn user this page ig going to be reloaded
    const redirect = window.confirm("Do you want go to google.com")
    if(redirect){
        console.log("Webpage will be redirected in 10 second")
        setTimeout(() => {
            window.open("https://google.com")
        }, 10000);
    }
    else {
        console.log("Webpage will be reloaded in 10 second");
        setTimeout(() => {
            window.location.reload();
        }, 10000)
    }
    }
    else {
        window.alert("You canceled the action")
    }
    
}