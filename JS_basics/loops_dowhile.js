let number = Math.floor(Math.random() * 10) + 1;
let randomNumber;
let attempts = 0;
do {
    console.log(randomNumber)
    randomNumber = Math.floor(Math.random() * 10) +1;
    attempts++;
}
while (number !== randomNumber);
console.log(`The random number is ${randomNumber} its take ${attempts}`);




let num = 1;
while (num <= 3) {
    console.log(" while - Hello World");
    num++;
}
num = 1;
do {
    console.log("do while - Hello World");
    num++;
}
while(num <= 3);