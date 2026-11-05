// const calculator = require("./calculator")

// console.log(calculator.add(10,5));
// console.log(calculator.subtract(10,5));


// What does require("./calculator") mean?
// - require() imports another module.
// - ./ means the current folder.
// - calculator refers to calculator.js.
// Node.js automatically finds the .js file, so writing the extension isn't necessary.



// Importing with destructuring

// const {add, subtract } = require("./calculator")

// console.log(add(10, 5));
// console.log(subtract(10, 5));

// Why does this work?

// Because module.exports contains an object:.

// We can directly take the functions we need from that object using JavaScript destructuring.

// You already know JavaScript objects, so this is just applying destructuring to imported modules.




// Greet

// const greet = require("./greeting")

// console.log(greet("Praveen"));

// Notice that we called greet() directly instead of greet.greet().

// That's because we exported the function itself, not an object containing the function.


// Project implimentaion
// const {add , subtract } = require("./calculator");

// const {createUser , getUserDetails } = require("./user")

// console.log("Addition:", add(10, 20));

// console.log("Subtraction:", subtract(5, 4));

// const user = createUser("Rahul", 22);

// console.log(getUserDetails(user));





// Exercise
const math = require("./math");
const user = require("./user")
const bank = require("./bank")

// Exercise 1
console.log(math.square(10));
console.log(math.cube(10));
console.log(math.isEven(19));


// Exercise 2
const user1 = user.createUser("Rahul" , 22 , "France");
console.log(user.isAdult(user1.age));
console.log(user.getUserDetails(user1))

// Exercise 3

// const member1 = bank.account("Rahul",2000); wrong
// console.log(bank.deposit(member1.balance,1000)); wrong
// console.log(bank.withdraw(member1.balance,1000)) wrong
// console.log(bank.checkBalance(member1.balance)) wrong

const member1 = bank.account("Rahul", 2000);

member1.balance = bank.deposit(member1.balance, 500);

member1.balance = bank.withdraw(member1.balance, 300);

console.log(bank.checkBalance(member1.balance));
