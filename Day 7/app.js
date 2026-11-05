const express = require("express");

const app = express();

//  ------------------- Route parameters -----------
// app.get("/products", (req, res) => {
//     res.send("All products");
// });

// app.get("/products/:id" , (req , res) => {
//     res.send("Product ID: " + req.params.id);
// })

// app.get("/users" , (req , res ) =>{
//     res.send("All products")
// })

// app.get("/users/:userId" , (req , res ) => {
//     const id = req.params.userId;

//     res.send("User ID : " + id);
// })


app.get("/", (req , res ) =>{
    res.send("Welcome to the Home Page!!!")
})

// ----------------- . Query parameters (req.query) -----------
app.get("/products" , (req , res) => {
    const category = req.query.category;
    const brand = req.query.brand;

    res.send(`Category: ${category}, Brand: ${brand}`)
})

//  ------------------- Route parameters -----------
// app.get("/products", (req, res) => {
//     res.send("All products");
// });

// app.get("/products/:id" , (req , res) => {
//     res.send("Product ID: " + req.params.id);
// })

// app.get("/users" , (req , res ) =>{
//     res.send("All products")
// })

// app.get("/users/:userId" , (req , res ) => {
//     const id = req.params.userId;

//     res.send("User ID : " + id);
// })


app.listen(3000 , () => {
    console.log("server is running on port 3000");
})