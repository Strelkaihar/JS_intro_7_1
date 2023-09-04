const users = [
    {
        firstName: 'Tech',
        lastName: 'Global',
        email: 'tech.global@techglobal.com',
        age: 3,
        address: {
            street_line_1: '2800 S River Rd',
            street_line_2: 'Suite 310',
            city: 'Des Plaines',
            state: 'IL',
            zip: '60018'
        }
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        age: 47,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'janedoe@gmail.com',
        age: 30,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Alex',
        lastName: 'Smith',
        email: 'alexsmith@outlook.com',
        age: 32,
        address: {
            street_line_1: '456 Xyz St',
            street_line_2: '',
            city: 'Miami',
            state: 'Florida',
            zip: '67890'
        }
    }
];

// Count how many users are older than 30   -> 2
let countAge30 = 0;
for (let i = 0; i < users.length; i++) {
    if(users[i].age > 30) countAge30++;
}
console.log(countAge30)

countAge30 = 0
for (const user of users) {
    if(user.age > 30) countAge30++;
}
console.log(countAge30)
//
let countCity =0;
for(let i = 0; i < users.length; i++){
    if(users[i].address.city.toLowerCase() === "chicago") countCity++;
}
console.log(countCity)
countCity = 0;
for(const user of users) {
    if(user.address.city.toLowerCase() === "chicago") countCity++
}
console.log(countCity)

const young35 = [];
for(const user of users) {
    if(user.age < 35) young35.push(user.firstName);
}
console.log(young35)


for (let i = 0; i < users.length; i++){
    if(users[i].age < 35) young35.push(users[i].firstName);
}
console.log(young35);

let sum = 0;
for(let i = 0; i < users.length; i++) {
    sum += users[i].age
}
console.log(`The average is ${ sum / users.length}`)

sum = 0;
for (const user of users) {
    sum += user.age;
}
console.log(`The average is ${sum / users.length}`)