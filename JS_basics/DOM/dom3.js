// Import all elements
const parentElements = document.getElementById("parent");
console.log(parentElements);

// Get all childe nodes of parent
const childLS = parentElements.childNodes;
console.log(childLS); // nodes + text

const children = parentElements.children;
console.log(children); // nodes

// Get parent element 
const countiesHeading = document.getElementById("countries")
const grandParent = parentElements.parentElement;
console.log(grandParent);

// Get first and last child
const firstLi = parentElements.firstChild;
const lastLi = parentElements.lastChild;
console.log(firstLi); //text
console.log(lastLi);// text


const firstLiElement = parentElements.firstElementChild;
const lastLiElement = parentElements.lastElementChild;
console.log(firstLiElement); //USA
console.log(lastLiElement);// Germany

//Get Sibling elements

const leftSibling = firstLiElement.previousElementSibling;
console.log(leftSibling) // null

const rigthSibling = firstLiElement.nextElementSibling;
console.log(rigthSibling); // Russia

const leftSiblingOfLast = lastLiElement.previousElementSibling;
console.log(leftSiblingOfLast); // Nigeria

const rigthSiblingOfLast = lastLiElement.nextElementSibling;
console.log(rigthSiblingOfLast); // null
//getting 
const container = document.querySelector(".container")
const images = document.querySelectorAll("img")
// const images = container.children;
console.log(container)
const firstImage = images[0];

//get src of image element
console.log(firstImage.src) // url
console.log(firstImage.alt) // alt text

const newUrl = "https://www.reuters.com/resizer/nKNuP7CUMD-waJzzPrITsw0CMcY=/1920x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/UJULRTTCDFNBTEJAC4Y3SXIKW4.jpg";
firstImage.src = newUrl;
console.log(firstImage)

//get atribute

const imgUrl = firstImage.getAttribute("src");
console.log(imgUrl === newUrl);

//SetAttribute
firstImage.setAttribute("alt", "Super car")
const altText = firstImage.getAttribute("alt");
console.log(altText === "Super car");

//Styling

const bodyEl = document.querySelector("body");
console.log(bodyEl)

//change color of body
bodyEl.style.backgroundColor = "lightgray";

//align elements inside body to center
bodyEl.style.textAlign = "center";
for(let i = 0; i < images.length; i++){
    let imageEl = images[i];
    imageEl.style.width = "250px"
    imageEl.style.height = "150px"
    imageEl.style.border = "2px solid green"
}
parentElements.style.backgroundColor = "yellow"


// className vs classList

const boxEl = document.querySelector(".box");
console.log(boxEl.className);
console.log(boxEl.classList);

// boxEl.className = "box2"; // this will wipe out everything from box class and added box2
boxEl.className += " box2" // append extra class name

boxEl.classList.add("box3"); // this will add box3 to existing class names
boxEl.classList.remove("box"); // removed class from list of classes

// innerHTML
// bodyEl.innerHTML = "";
//add HTML into DOM
parentElements.innerHTML += `<li>France</li>`;

// create an element

const p2 = document.createElement("p")
console.log(p2); 
// add a content to element 1st way
p2.innerHTML = "Box 2";
// console.log(p2)
//2nd way
// const textNode = document.createTextNode("Box 3")
// p2.appendChild(textNode);
console.log(p2)

// append p2 to box element
boxEl.append(p2)

parentElements.append(p2)