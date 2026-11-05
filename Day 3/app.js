// const validator = require("validator")

// const email = "ram321"

// if(validator.isEmail(email)){
//     console.log("Valid Email");
// } else {
//     console.log("Invalid Email");
    
// }










// Exercise 1
const validator = require("validator")

console.log(validator.isEmail("hello@gmail.com"));
console.log(validator.isEmail("hello123"));
console.log(validator.isEmail("https://google.com"));


// Exercise 2
let email = process.argv[2];

(validator.isEmail(email)) ? console.log("Valid Email") : console.log("Invalid Email");


// Exercise 3
// npm start
// npm run check