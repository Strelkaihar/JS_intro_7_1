const car = {
    color : "red",
    year : 2023,
    make : "BMW",
    model : "X7"
};
const keys = Object.keys(car); // [ 'color', 'year', 'make', 'model' ]
const value = Object.values(car); // [ 'red', 2023, 'BMW', 'X7' ]
console.log(Array.isArray(keys)); // true
console.log(keys, value); // [ 'color', 'year', 'make', 'model' ] [ 'red', 2023, 'BMW', 'X7' ]

console.log(Object.entries(car));//[[ 'color', 'red' ],[ 'year', 2023 ],[ 'make', 'BMW' ],[ 'model', 'X7' ]]

for (let i = 0; i < Object.keys(car).length; i++){
    console.log(value[i])
}
console.log(`\n ------------------------\n`)
for (let i = 0; i < Object.entries(car).length; i++){
    console.log(value[i], keys[i]);
}

for (const x in car) {
    console.log(car[x]);
}
for (const x in car) {
    console.log(x);
}

for (const [key, value] of Object.entries(car)) {
    console.log(key, value);
}
