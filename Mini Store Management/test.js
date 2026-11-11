const express = require("express")
const fs = require("fs")
const productRoutes = require('./routes/productRoutes')

const app = express();

app.use(express.json());

app.use("/products" , productRoutes)

app.get("/", (req, res) => {
    res.send("Welcome to Mini Store API!")
})

// app.get("/products", (req, res) => {
//     const result = fs.readFileSync("./data/products.json", "utf8")

//     const data = JSON.parse(result);

//     const category = req.query.category?.toLowerCase();
//     const brand = req.query.brand?.toLowerCase();

//     const filteredProducts = data.filter((product) => {
//         return (!category || product.category.toLowerCase() === category) && (!brand || product.brand.toLowerCase() === brand)
//     })

//     res.json(filteredProducts);

// })

// app.get("/products/:id", (req, res) => {

//     const products = JSON.parse(fs.readFileSync("./data/products.json", "utf8"))

//     const id = req.params.id;

//     const product = products.find((item) => {
//         return item.id === Number(id)
//     })

//     if (product) {
//         res.json(product);
//     } else {
//         res.status(404).json({
//             message: "Product Not found with this id"
//         })
//     }
// });

// app.post("/products", (req, res) => {
//     // const id = req.body.id;
//     // const name = req.body.name;
//     // const brand = req.body.brand;
//     // const category = req.body.category;
//     // const price = req.body.price;
//     // const stock = req.body.stock;

//     // shortcut
//     const product = req.body;

//     if (
//         product.id === undefined || product.id === null ||
//         product.name === undefined || product.name === null ||
//         product.brand === undefined || product.brand === null ||
//         product.category === undefined || product.category === null ||
//         product.price === undefined || product.price === null ||
//         product.stock === undefined || product.stock === null
//     ) {
//         return res.status(400).json({
//             message: "Please enter all fields"
//         });
//     }

//     if (typeof product.price !== "number" || typeof product.id !== "number" || typeof product.stock !== "number" || typeof product.name !== "string" || typeof product.category !== "string" || typeof product.brand !== "string") {
//         return res.status(400).json({
//             message: "Invalid product data types. Please check all fields."
//         })
//     }

//     if(product.name.trim() === "" || product.brand.trim() === "" || product.category.trim() === ""){
//         return res.status(400).json({
//             message: "Name, brand, and category cannot be empty."
//         });
//     }

//     if (product.id <= 0 || product.price <= 0 || product.stock < 0) {
//         return res.status(400).json({
//             message: "ID and price must be greater than 0. Stock cannot be negative."
//         })
//     }

//     const products = JSON.parse(fs.readFileSync("./data/products.json", "utf8"))

//     const existingProduct = products.find((item) => {
//         return item.id === product.id
//     });

//     if (existingProduct) {
//         return res.status(400).json({
//             message: "Product ID already exists"
//         });
//     }


//     products.push(product)

//     fs.writeFileSync("./data/products.json", JSON.stringify(products, null, 2))

//     res.status(201).json({
//         message: "Product Added",
//         product: product

//     })
// })

app.listen(3000, () => {
    console.log("Server is running on port 3000");

})