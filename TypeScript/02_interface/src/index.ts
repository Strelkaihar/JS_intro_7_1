interface Person {
    id: number,
    name: string
    birthday?: Date
}


const person1: Person= {
    id: 1,
    name: 'John'
}
const person2: Person= {
    id: 1,
    name: 'John'
}
// Optional properties with interface
const person3: Person = {
    id: 3,
    name: 'Joe',
    birthday: new Date('01/01/1980') //Object literal may only specify known properties, and 'bOD' does not exist in type 'Person'.
}
const person4: Person = {
    id: 4,
    name: 'Joe',
    // birthday: ('01/01/1980') //Even bOD is optional TS still infers the type
}
//Extending interface

interface Address {
    line1: string,
    line2: string,
    city: string,
    state: string,
    zipCode: number
}
interface Person1 extends Address {
    id: number,
    name: string
}
const personWithAddress: Person1 = {
    id: 4,
    name: 'Yurii',
    line1: '1111 street',
    line2: 'apt 1',
    city: 'NY',
    state: 'NY',
    zipCode: 11111
}
