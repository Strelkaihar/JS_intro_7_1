// Replacing substrings

let str = "Can I can a can";

console.log(str.replace("can", "AAA")); //Can I AAA a can
console.log(str.replace(str, "***")); //*** 
console.log(str.replaceAll("can", "BBB"));// Can I BBB a BBB

//Tricky part
console.log(str.replace("CanI", "AAA"));// Can I can a can

// Replace VS replaceAll()
console.log(str.replace("a", "#")); //*** 
console.log(str.replaceAll("a", "#"));// Can I BBB a BBB

