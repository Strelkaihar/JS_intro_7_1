//Enums
enum UserResponse {
    No,
    Yes
}
//Numeric enum
enum UserResponse1 {
    No = 0,
    Yes = 1
}
//String Enum
enum UserResponse2 {
    No = 'NO',
    Yes = 'Yes'
}
//Heterogeneous enums
enum UserResponse3 {
    No = 1,
    Yes = 'Yes'
}
//Example use case
interface User {
    id: number;
    name: string;
    status: Status;
}
enum Status {
    Active = 'active',
    Inactive = 'inactive',
    New = 'new'
}
const primaryUser: User = {
    id: 1,
    name: 'John',
    status: Status.Active
}
const inactiveUser: User = {
    id: 2,
    name: 'Joh',
    status: Status.Inactive
}
const activeUser: User = {
    id: 1,
    name: 'Joe',
    status: 'active'
}