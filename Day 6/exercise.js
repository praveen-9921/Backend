const express = require("express")

const app = express();

app.get("/", (req , res ) =>{
    res.send("Welcome to my Express application!")
})

app.get("/about", (req , res ) =>{
    res.send("About Me")
})

app.get("/skills", (req , res ) =>{
    res.send("JavaScript, Node.js, Express.js")
})

app.get("/contact", (req , res ) =>{
    res.send("Contact Page")
})
app.get("/projects", (req , res ) =>{
    res.send("My Projects")
})

app.get("/user" , (req , res ) =>{
    const user = {
        id : 101 ,
        name : "Praveen",
        course : "Backend Development",
        completedDays : 6,
        skills: ["JavaScript", "Node.js", "Express.js"]
    }

    res.json(user)
})

app.use((req , res) =>{
    res.status(404).send("404 - Sorry, this page does not exist!")
})

app.listen(3000 , ()=>{
    console.log("server is running on port 3000");
    
})







/* 
1. Express js is a library of js that helps developer to create a server and perform task easily its makes the task easy.
2 . --- no idea
3. app.get() help to get the request and response accordingly
4.res.send() use to send the simple string on other hand res.json use to send the json data
5. res.status() help to show the proper error message for user so they can get easily bcz user don't have idea about the codes
*/