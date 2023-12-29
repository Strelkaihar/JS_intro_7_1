//Union type examples
// const statusCode = 200;
let statusCode: number | string

statusCode = 200;
statusCode = '200'

//Example use case
type StatusCode = 'active' | 'inactive' | 'new'

interface User {
    id: number;
    name: string;
    status: StatusCode;
}
enum Status {
    Active = 'active',
    Inactive = 'inactive',
    New = 'new'
}
const primaryUser: User = {
    id: 1,
    name: 'John',
    status: 'inactive'
}
const inactiveUser: User = {
    id: 2,
    name: 'Joh',
    status: 'active'
}
const activeUser: User = {
    id: 1,
    name: 'Joe',
    status: 'deactive'
}