const fs = require("fs");
const os = require("os");

// create file
// fs.writeFileSync("message.txt","I LOVE YOU 💖");

// console.log("File created successfully.")


// add data
// fs.appendFileSync("message.txt","\nNOICEEE");

// read file
// const data = fs.readFileSync("message.txt","utf-8");

// console.log(data);

// delete file
// fs.unlinkSync("message.txt")


// Day 1 practice — Final exercise set
// Exercise 1
fs.writeFileSync("student.txt","Name: Malik \nCourse: Backend Development \nTechnology: Node.js")

// Exercise 3
fs.appendFileSync("student.txt","\nStatus: Learning")

// Exercise 2
fs.readFileSync("student.txt","utf-8")

// Exercise 4
console.log(os)
console.log(os.arch())
console.log(os.freemem())
console.log(os.totalmem())