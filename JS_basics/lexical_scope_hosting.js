// Scope chaining
const schoolName = "TechGlobal";

function schoolProfile() {
    const schoolName = "Tech Global";
    function saySchoolName(){
        const schoolName = "Tech";
        function writeSchoolName (){
            return schoolName;
        }
        return writeSchoolName();
    }
    return saySchoolName();
}
console.log(schoolProfile());

//Define a function

function getCityName (){
    const cityName ="Des Plaines";
    return cityName.toUpperCase();
}
function showAddress (){
    return "2860 Riverr rd " + getCityName();
}
console.log(showAddress())

//-----------------------Hosting

console.log(nameF); // ReferenceError: Cannot access 'nameF' before initialization
const nameF = "Alex";

// --------Hosting function
hello(); // Hello its work
bye(); // ReferenceError: bye is not defined

function hello() {
    bye()
    console.log("Hello");
    function bye() {
        console.log("bye")
    }
}
