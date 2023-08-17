let day = 1;

if (day === 0) console.log("Today is Sunday");
else if (day === 1) console.log("Today is Monday");
else if (day === 2) console.log("Today is Tuesday");
else if (day === 3) console.log("Today is Wednesday");
else if (day === 4) console.log("Today is Thursday");
else if (day === 5) console.log("Today is Friday");
else if (day === 6) console.log("Today is Saturday");
else console.error("No, this is a Date ERROR!");

switch (day) {
    case 0:
        console.log("Today is Sunday");
        break;
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    default:
        console.error("No, this is a Date ERROR!");
}

switch (randomNumber) {
    case 0:
    case 6:
        console.log("WEEKEND");
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("WEEKDAY");
        break;
    default:
        console.error("No, this is a Date ERROR!");
}
// Best practices
if (randomNumber === 0 || randomNumber === 6) console.log("WEEKEND");
else if (randomNumber > 0 && randomNumber < 6) console.log("WEEKDAY");
else console.error("No, this is a Date ERROR!");

switch (true) {
    case  randomNumber === 0 || randomNumber === 6:
        console.log("WEEKEND");
        break;
    case  randomNumber > 0 && randomNumber < 6:
        console.log("WEEKDAY");
        break;
    default:
        console.error("No, this is a Date ERROR!");
}

console.log(new Date().getFullYear());
console.log(new Date().getHours());
console.log(new Date().getMinutes());
console.log(new Date().getSeconds());

console.log(new Date().toLocaleDateString());
console.log(new Date().toLocaleTimeString());
