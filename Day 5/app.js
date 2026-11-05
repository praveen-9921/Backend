const http = require("http")

// create Server
const server = http.createServer((req , res) =>{
    // First
    // res.write("Hello! Welcome to my first Node.js server.");

    // res.end();

    // Second
    // if(req.url === "/"){
    //     res.end("Welcome to Home Page!")
    // }
    // else if(req.url === "/about"){
    //     res.end("Welcome to About Page!")
    // }
    // else if(req.url === "/contact"){
    //     res.end("Welcome to Contact Page!")
    // }
    // else {
    //     res.statusCode = 404;
    //     res.end("404 - Page Not Found!");
    // }


    // Third
    // console.log("URL : " , req.url);
    // console.log("Method:", req.method);

    // res.end("Request received!");



    // Forth
    const user = {
        id : 1,
        username : "Praveen",
        role : "Developer"
    }

    res.setHeader("content-type","application/json");

    res.end(JSON.stringify)
    

})

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000"); 
})