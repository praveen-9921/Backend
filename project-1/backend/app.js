const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

// Connect frontend
app.use(express.static(path.join(__dirname,"../frontend")));

// Temporary storage
let users = [];

app.post("/register" , (req , res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    // Check if fields are empty
    if (!name || !email || !password) {
        return res.status(400).json({
            message: "Please fill all fields!"
        });
    }

    // Check existing email
    const existingUser = users.find(
        user => user.email === email
    );


    if (existingUser) {
        return res.status(409).json({
            message: "Email already registered!"
        });
    }

     // Store user
    users.push({
        name: name,
        email: email,
        password: password
    });

    res.status(201).json({
        message : "Register successfully"
    })
})

app.post("/login", (req , res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = users.find(
        user =>
            user.email === email &&
            user.password === password
    );

    if (!user) {
        return res.status(401).json({
            message: "Invalid email or password!"
        });
    }

    res.status(200).json({
        message: "Login successful!"
    });
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
    
})