interface User {
    id:number;
    name: string
}

function clone(source: User) : User {
    return Object.apply({}, source)
}
const a: User = {id: 1, name: 'John'};
const b = clone(a)// User

/*
What if i want to clone different object
 */
interface Book  {
    title: string,
    year: number
}
const book: Book = {title: 'Hobbit', year: 2000 }
const cloneOfBook = clone(book)// Error -> Book !=== user

// Solution - > Generic
function clone2<T> (source: T) :T {
    return Object.apply({}, source)
}
const toyota = {brand: 'Toyota', year: 2006}
const cloneOfCar = clone2(toyota)

const apple = {company: 'Apple', model: '15', price: '1000'}
const cloneOfPhone = clone2(apple)

// Multiple generic parameters types
interface User1 {
    id: number;
    name: string
}
interface User2 {
    id: number;
    name: string;
    status: string
}
interface User3 {
    address: string;
    title: string;
}
function clone3<T1, T2 extends T1> (source: T1) :T2 {
    return Object.apply({}, source)
}
function clone4<User1, User2> (source: User1) : User2 {
    return Object.apply({}, source)
}


const x = clone3<User1, User2>({id: 1, name: 'John'})
const y = clone3<User1, User3>({id: 2, name: 'Jone'}) // Type user3 doesn't satisfy user1
//Example : function maxNumber(arr) { return number}


//Challenge
