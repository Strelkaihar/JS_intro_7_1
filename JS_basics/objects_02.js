const students = {
    fName : "Alex",
    lName : "Smith",
    hobbies : ["Soccer", "Watching movies"],
    exam_scores : {
        midterm : 60,
        final : 90
    }
};
console.log(students)
console.log(students.hobbies[0]);
console.log(students.exam_scores)
console.log((students.exam_scores.final + students.exam_scores.midterm) / 2);

// create a book object
const book = {
    name : "Amok",
    Author : { fName : "Stefan", lName : "Zweig"},
    genre : "Novella"
};
console.log(book);

const books = [{
    name : "Amok",
    Author : { fName : "Stefan", lName : "Zweig"},
    genre : "Novella"},

    { name : "May name is Red",
    Author : { fName : "Orhan", lName : "Pamuk"},
    genre : "Historical Novel"},

    { name : "1984",
    Author : { fName : "George", lName : "Orwell"},
    genre : "Dystopian Literature"},
]
console.log(books);
console.log(books[1]);
console.log(books[2].Author.lName);
let count = 0;

for (let i = 0; i < books.length; i++){
    if (books[i].Author.fName.includes("a")) count++;
}
console.log(count)

