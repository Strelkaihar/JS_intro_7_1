class Todo {
    constructor(id, title, description){
        this.id = id;
        this.title = title;
        this.description = description
        this.createAt = new Date();
    }
};
class TodoManager {
    constructor() {
        this.AllTodos = [];
    }
    createAtTodo(newTodo){
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                this.AllTodos.push(newTodo);
                resolve("Succssesfully added");
            }, 2000);
        })
}
}
const todoManager = new TodoManager
todoManager.createAtTodo(new Todo(1,"Watch TV","On weekend and this show"))
.than((message) => {
    console.log(message);
    console.log(todoManager);
})
.catch(err => console.log(err));

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const getRandomNumber = () => {
    let randomNumber = getRandom (10, 20);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(randomNumber);
        }, 5000)
    })
}
let rndNumber = getRandomNumber();
console.log(rndNumber);
console.log(rndNumber === 15);
getRandomNumber()
.then(num => {
    console.log(num);
    if(num > 15) console.log("Number is Valid");
    else(console.log("Number is invalid"));
})
.catch(err => console.log(err));