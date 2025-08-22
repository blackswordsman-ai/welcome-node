// const obj = require("./sum.js");
// const {x, calulateSum } = require("./calculate/sum.js"); // destructuring assignment to import specific exports
// const {calculateMultiply} = require("./calculate/multiply.js");
require("./xyz.js"); //one module into another
// episode 4 18/08/2023
const data = require("./data.json");
console.log(data); // { name: 'lanson', age: 24, city:

const {calculateMultiply,calulateSum,x} = require("./calculate/index.js"); // using CommonJS require syntax

// import { calulateSum } from "./sum.js"; // using ES6 import syntax

var name = "namste node js";

var a = 10;

var b = 20;

// var x =100;

calulateSum(a, b); // calling the function from sum.js
calculateMultiply(a, b); // calling the function from multiply.js
// console.log(x); // accessing the variable from sum.js

// console.log(name);
// console.log(a + b);
// console.log(global);
// console.log(this);
console.log(x); // true

// episode 3 18/08/2023