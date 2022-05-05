import { strictEquals } from "./helpers.js";

console.log("1,1 --->", strictEquals(1, 1));
console.log("Nan, nan --->", strictEquals(NaN, NaN));
console.log("0,-0 --->", strictEquals(0, -0));
console.log("-0,0 --->", strictEquals(-0, 0));
console.log("1,'1' --->", strictEquals(1, "1"));
console.log("true,false --->", strictEquals(true, false));
console.log("false,false --->", strictEquals(false, false));
console.log("'Water','Oil' --->", strictEquals("Water", "Oil"));
