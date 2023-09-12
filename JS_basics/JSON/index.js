//regular object

let person = {
    name : 'Alex',
    age : 28
};
console.log(person); //Object
console.log(typeof person); // Object
console.log(person.name); // Alex
console.log(person.age); // 28

//JSON stringify -> convert to to JSON format
let formattedPerson = JSON.stringify(person);
console.log(formattedPerson); // {"name":"Alex","age":28}
console.log(typeof formattedPerson); // string
console.log(formattedPerson.name); // undefined
console.log(formattedPerson.age); // undefined

//JSON.parse() -> convert JSON format to object

const data = {"name":"Alex","age":28} ;
const convertData = JSON.parse(data);

console.log(convertData);
console.log(typeof convertData);
console.log(convertData.name);
console.log(convertData.age);

// JSON.stringify(object, fun)

let person2 = {
    name : 'Yrii',
    age : 28
};
const onlyNameJson = JSON.stringify(person2, (key, value) => {
    console.log("Key", key);

    if(key === "age" && value < 30) {
        return undefined;
    }
    return value;
});
console.log(onlyNameJson)

