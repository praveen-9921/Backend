const express = require("express")

const app = express();

app.get("/" , (req , res) => {
    res.send("Welcome to our shopping website!")
})

app.get("/products" , (req , res) => {
    const category = req.query.category;

    res.send("Showing products in category : " + category);
})

app.get("/products/:id" , (req , res) => {
    const id = req.params.id;

    res.send("You selected product: " + id);
})

app.get("/users/:userId" , (req , res) => {
    res.send("User ID : " + req.params.userId);
})

app.use((req , res) =>{
    res.status(404).send("Page not found!")
})

app.listen(3000 , () => {
    console.log("Server is running on port 3000");
})