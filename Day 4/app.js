// Example: Synchronous code

// console.log("1. Start");

// console.log("2. Processing");

// console.log("3. End");

// It executes line by line.

// Example: Asynchronous code

// console.log("1. Start");

// setTimeout(() => {
//     console.log("2. Processing");
// }, 2000);

// console.log("3. End");

// setTimeout() schedules a function to run after at least 2 seconds. Node.js doesn't wait there; it continues executing the next line.

// This is one of the important ideas behind asynchronous programming.


// callback
// function greet(name , callback){
//     console.log("Hello " + name);
    
//     callback();
// }

// function sayBye(){
//     console.log("Good Bye");
    
// }

// greet("Praveen" , sayBye);   // Notice that we passed sayBye, not sayBye().

// console.log("Start");

// setTimeout(() => {
//     console.log("Task completed");
// }, 2000);

// Here, the arrow function is a callback.

// console.log("End");


// creating promise
// const myPromise = new Promise((resolve , reject) => {
//     let sucess = false;

//     if(sucess){
//         resolve("Task completed");
//     }else {
//         reject("Something went wrong!")
//     }
// })

// myPromise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })


// Aysnc // Await
// function getData(){
//     return new Promise((resolve) =>{
//         setTimeout(() => {
//             resolve("Data received")
//         }, 2000);
//     })
// }

// async function showData(){
//     console.log("Waiting");
    
//     const result = await getData();

//     console.log(result);
    
// }

// showData()


// function getData(){
//     return new Promise((resolve,reject) =>{
//         reject("Unable to get data!")
//     })
// }

// async function showData(){
//     try{
//         const result = await getData();
//         console.log(result);
//     } catch(error) {
//         console.log(error);
        
//     }
// }

// showData()


// Readfiles async
// const fs = require("fs/promises")

// async function readMessage() {
//     try {
//         const data = await fs.readFile("message.txt","utf8")

//         console.log(data);
        
//     } catch (error) {
//         console.log("Error:", error.message);
//     }
// }

// readMessage();

// console.log("Reading file...");

// Why does "Reading file..." appear first?

// Because readFile() works asynchronously. Node.js can continue executing other code while the file is being read.

// This is a real-world pattern you'll use frequently when building backend applications.







// Exercise 1
// function processUser(username , callback){
//     console.log("User : " + username);

//     callback();
// }

// function process() {
//     console.log("User processed successfully!");
// }

// processUser("Print" , process)


// // Exercise 2

// const validate = new Promise((resolve , reject) => {
//     const age = 18;

//     if(age >= 18){
//         resolve("Access granted!")
//     } else {
//         reject("Access denied!")
//     }
// })

// validate
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((error) => {
//         console.log(error);
        
//     })






// // Exercise 3

// function getProducts(){
//     const product = ["Chair" , "bucket" , "soap"]
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(product)
//         }, 3000);
//     })
// }

// async function showProduct(){
//     try {
//         console.log("Waiting...");

//         const result = await getProducts();

//         console.log(result);
//     } catch (error) {
//         console.log("Error:", error);
//     }
    
    
// }

// showProduct();

// Exercise 4
// OUTPUT : A C B
// Bcz there is a timeout fuction while it will calculate and resolve or process code already move










const {saveOrder , processPayment , sendEmail} = require("./services");


// First way
// console.log("Customer place an order!");

// saveOrder()
//     .then((result)=>{
//         console.log(result);
        

//         return processPayment();
//     })

//     .then((result)=>{
//         console.log(result);
        

//         return sendEmail();
//     })

//     .then((result)=>{
//         console.log(result);
        
//         console.log("Order completed!");
        
//     })

//     .catch((error)=>{
//         console.log("ORDER FAILED : " + error);
        
//     })



// Second Way

async function placeOrder(){
    try{
        console.log("Customer place an order!");
        
        const order = await saveOrder();
        console.log(order);
        
        const payment = await processPayment();
        console.log(payment);

        const email = await sendEmail();
        console.log(email);
        
        console.log("ORDER COMPLETED!");
        
        
    } catch (error) {
        console.log("ORDER FAILED : " + error);
        
    }
}

placeOrder();