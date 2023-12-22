//Task 1
const toInitials = str => str.split(' ').map(x => `${x[0]}.`)
console.log(toInitials('Joe Doe'))