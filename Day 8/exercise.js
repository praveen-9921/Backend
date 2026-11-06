const express = require("express");

const app = express();

app.use(express.json());

app.post("/login" , (req , res ) => {
    const username = req.body.username;

    res.send(`Welcome, ${username}!`)
})

app.post("/products" , (req , res ) => {
    const name = req.body.name;
    const price = req.body.price;
    
    res.status(201).json({
        message : "Name and price received",
        data : {
            name : name,
            price : price
        }
    })

})

/*
1. Get : Used to retrieve data from the server.
   post : Used to send data to the server, commonly to create a new resource.

2. req.body helps to get data send by user for the server.

3.Middleware that parses incoming JSON request bodies, making the data accessible through req.body.

4.201 code means creation of something like user created.

*/

app.listen(3000, () =>{
    console.log("Server is running on port 3000");
    
})