//Prototype
const igor = new Object({
    name: "Igor"
})
const person = new Object({
    name: "Max",
    age: 25,
    greet: function() {
        console.log("Greet")
    }
});
Object.prototype.sayHello = function() {
    console.log("Hello")
}
person.sayHello();
person.greet();
igor.sayHello()
console.log(person.age);
console.log(person.name);
console.log(person.toString())
// Прототип это тот же самый обьект который присутствует у родительской сущности, любой обьект в джаваскрипте
// ябляеться обьектом. По простому прототип это набор функиц от родительского обьекта
//Это является примером наследования
const lena = Object.create(person);
