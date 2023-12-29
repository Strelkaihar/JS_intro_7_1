interface Book {
    id: number;
    title: BookTitle;
    status: BookStatus;
    completedOn?: Date;
} 
type BookTitle = string;
enum BookStatus {
    Done = 'done',
    Inprogress = 'in-progress',
    Read = 'read'
}

const books: Book[] = [
    { id: 1, title: "Lion King",status: BookStatus.Done , completedOn: new Date("2023-12-26") },
    { id: 2, title: "Hobbit", status: BookStatus.Inprogress },
    { id: 3, title: "Don Quixote", status: BookStatus.Read },
]


function addBookToLibrary(book: string): Book {
    const id = getNextId(books)

    const newBook = {
        id,
        title: book,
        status: BookStatus.Read,
    }
    books.push(newBook)
    return newBook
}

function getNextId<T extends {id: number}>(items: T[] ): number {
    return items.reduce((max, x) => x.id > max ? x.id : max, 0) + 1
}

const newBook = addBookToLibrary("City of Bones")

console.log(JSON.stringify(newBook))