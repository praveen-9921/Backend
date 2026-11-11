const express = require("express")
const productRoutes = require('./routes/productRoutes')

const app = express();

app.use(express.json());

app.use("/products" , productRoutes)

app.get("/", (req, res) => {
    res.send("Welcome to Mini Store API!")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})