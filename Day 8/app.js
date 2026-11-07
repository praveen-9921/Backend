const express = require("express")

const app = express();

app.use(express.json());  // This middleware tells Express to parse incoming JSON request bodies.

app.post("/register", (req , res) => {
    const name = req.body.name;
    const email = req.body.email;

    res.status(201).json({
        message : "Registration Successful!!",
        user : {
            name : name,
            email : email
        }
    })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
    
})