//Type alias -another way to create custom types
type Product = {
    title: string,
    price: string,
    quantity: number
};

const cake: Product = {
    title: 'Chocolate cake',
    price: '25$',
    quantity: 10
}

const ps5 = {
    title: 'PS5',
    price: '300$',
    quantity: 5
}

//Example with interface
interface User {
    id: number;
    name: UserName;
    hobbies: Hobbies[]
}
type UserName = string;
type Hobbies = {type: string, name: string}

const user: User = {
    id:1,
    name: 'John',
    hobbies: [{type: 'sport', name: 'skiing'},
{type: 'education', name: 'reading'}]
}

type Animal = {
    breed: string
}
type Dog = Animal & {
    name: string
}
const dog: Dog = {
    name: 'Bali',
    breed: 'chihuahua'
}