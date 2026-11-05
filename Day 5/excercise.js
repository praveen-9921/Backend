// // Exercise 1

// const http = require("http")

// const server = http.createServer((req , res) =>{
//     res.write("Welcome to my backend!")

//     res.end();
// })



// // Exercise 2

// const server = http.createServer((req , res) =>{
    
//     if(req.url === "/"){
//         res.end("Home Page!")
//     }else if (req.url === "/about"){
//         res.end("About Me")
//     }else if (req.url === "/skills"){
//         res.end("Node.js, JavaScript, MongoDB")
//     }else{
//         res.statusCode = 404;
//         res.end("404 Page Not Found")
//     }
// })




// // Exercise 3

// const server = http.createServer ((req , res) =>{
//     const user = {
//         "name": "Praveen",
//         "age": 22,
//         "skills": ["JavaScript", "Node.js"]
//     }

//     res.setHeader("content-type","application/json");

//     res.end(JSON.stringify(user))
// })


// server.listen(3000, () => {
//     console.log("Server running on port 3000");
// });


// // Exercise 4
// /*
// Ans 1 > req is basically what user request for the like which url what method etc
//  res is bascially what server return on that reuqest like user request for the home page so res will return that.


// Ans 2 > server.listen help us to run the server on the particular port so we can check it and get an error

// Ans 3 > JSON.stringify() help us to convert the json file to the string formate so it will be readable

// Ans 4 > maybe server will not where to stop it will continue

// */