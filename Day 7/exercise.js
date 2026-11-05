const express = require("express");

const app = express();

app.get("/" , (req , res) => {
    res.send("Weclome to Home Page!!")
})

// exercise 1
app.get("/products/:id" , (req , res) => {
    res.send("You selected product ID: " , req.params.id);
})

// exercise 2
app.get("/users/:userId" , (req , res) => {
    res.send(`Welcome ${req.params.userId} !`)
})

// Exercise 3
app.get("/products" , (req , res) => {
    const category = req.query.category;
    const brand = req.query.brand;

    res.send(`Category: ${category} \n Brand: ${brand}`)
})

/*
Exercise 4
1. Route parameter basically helps what we want.
2. Query parameter helps us like what kind of product like price , color , company etc
3. idk
4. /101 is route parameter
5. ?category=mobile
*/

app.listen(3000, () => {
    console.log("Server is running port 3000");
})