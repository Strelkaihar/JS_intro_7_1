for (let i = 1; i <= 3; i++) {
    console.log("OUTER", i)
    for ( let j = 1; j <= 5; j++) {
        console.log("\tINNER", j)
    }
}

const students = [
    ["Alex", "Max", "Jane"],
    ["John", "James"],
    ["Rayn", "Tom"]
];
for(const group of students){
    console.log(group);
    for(const name of group){
        console.log(name)
    }
}
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
    for (let j = 0; j < students[i].length; j++){
        console.log(students[i][j]);
    }
}