const express = require("express")

// create express application
const app = express();

app.get("/" , (req , res)=>{
    res.send("Welcome to my express server!")
})

app.get("/about" , (req , res) => {
    res.send("Welcome to About Page!!")
})

app.get("/skills" , (req , res) => {
    res.send("Welcome to Skills Page!!")
})

app.get("/contact" , (req , res) => {
    res.send("Welcome to Contact Page!!")
})

app.get("/user" , (req , res) =>{
    const user = {
        id : 1,
        name : "Praveen",
        age: 22,
        skills: ["JavaScript", "Node.js"]
    }

    res.json(user);
})

app.use((req , res) => {
    res.status(400).send("404 - Page Not Found!!!")
})

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
    
})