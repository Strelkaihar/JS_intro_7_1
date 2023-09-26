// import { add } from "./math.js";
// import { add as dateAdd} from "./date.js";
import * as MATH from "./math.js"
import * as DATE from "./date.js"
//class import
import MathClass from "./math.js"

console.log(MATH.add(12, 3))
console.log(DATE.add(12, 3))

console.log(MATH.substract(12, 5));
console.log(DATE.getCurrentYear());

const mathObj = new MathClass(3, 6);
console.log(mathObj.add())