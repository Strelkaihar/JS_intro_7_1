// Accsesing a DOM ELEMENTS

//getElementById()

const pageHeading = document.getElementById("page-heading");
console.log(pageHeading);

const subheading = document.getElementById("subheading");
console.log(subheading);

//getElementByClassName()
const container = document.getElementsByClassName("container")
console.log(container)
for(let i = 0; i < container.length; i++){
    console.log(`Node ${i}: ${container[i]}`)
}

//getElementByTagName()
const images = document.getElementsByTagName("img");
console.log(images);

for(let i = 0; i < images.length; i++){
    console.log(container[i])
}
// querySelector()
const par1 = document.querySelector("#par1");
const par2 = document.querySelector(".par2");
const section = document.querySelector("section");
console.log(par1);
console.log(par2);
console.log(section);

// querySelectorAll()
const allImages = document.querySelectorAll("img");
console.log(allImages);

