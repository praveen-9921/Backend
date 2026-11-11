const fs = require("fs");

const getAllProducts = (req, res) => {
    try {
        const result = fs.readFileSync("./data/products.json", "utf8")

        const data = JSON.parse(result);

        const category = req.query.category?.toLowerCase();
        const brand = req.query.brand?.toLowerCase();

        const filteredProducts = data.filter((product) => {
            return (!category || product.category.toLowerCase() === category) && (!brand || product.brand.toLowerCase() === brand)
        })

        res.json(filteredProducts);
    } catch (error) {
        console.error("Something went wrong:", error.message);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

const getProductById = (req, res) => {
    try {
        const products = JSON.parse(fs.readFileSync("./data/products.json", "utf8"))

        const id = req.params.id;

        const product = products.find((item) => {
            return item.id === Number(id)
        })

        if (product) {
            res.json(product);
        } else {
            res.status(404).json({
                message: "Product Not found with this id"
            })
        }
    } catch (error) {
        console.error("Something went wrong:", error.message);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

const createProduct = (req, res) => {
    try {
        const product = req.body;

        if (
            product.id === undefined || product.id === null ||
            product.name === undefined || product.name === null ||
            product.brand === undefined || product.brand === null ||
            product.category === undefined || product.category === null ||
            product.price === undefined || product.price === null ||
            product.stock === undefined || product.stock === null
        ) {
            return res.status(400).json({
                message: "Please enter all fields"
            });
        }

        if (typeof product.price !== "number" || typeof product.id !== "number" || typeof product.stock !== "number" || typeof product.name !== "string" || typeof product.category !== "string" || typeof product.brand !== "string") {
            return res.status(400).json({
                message: "Invalid product data types. Please check all fields."
            })
        }

        if (product.name.trim() === "" || product.brand.trim() === "" || product.category.trim() === "") {
            return res.status(400).json({
                message: "Name, brand, and category cannot be empty."
            });
        }

        if (product.id <= 0 || product.price <= 0 || product.stock < 0) {
            return res.status(400).json({
                message: "ID and price must be greater than 0. Stock cannot be negative."
            })
        }

        const products = JSON.parse(fs.readFileSync("./data/products.json", "utf8"))

        const existingProduct = products.find((item) => {
            return item.id === product.id
        });

        if (existingProduct) {
            return res.status(400).json({
                message: "Product ID already exists"
            });
        }


        products.push(product)

        fs.writeFileSync("./data/products.json", JSON.stringify(products, null, 2))

        res.status(201).json({
            message: "Product Added",
            product: product

        })
    } catch (error) {
        console.error("Something went wrong:", error.message);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

const updateProduct = (req, res) => {
    try {
        const id = req.params.id;

        const updatedData = req.body;

        const products = JSON.parse(fs.readFileSync("./data/products.json", "utf8"))

        const index = products.findIndex((item) => {
            return item.id === Number(id)
        })

        if (index === -1) {
            return res.status(404).json({
                message: "Product not found"
            })
        }

        products[index] = {
            ...updatedData,
            id: Number(id)
        }

        fs.writeFileSync("./data/products.json", JSON.stringify(products, null, 2))

        res.status(200).json({
            message: "Product updated successfully",
            product: products[index]
        });
    } catch (error) {
        console.error("Something went wrong:", error.message);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

const deleteProduct = (req, res) => {
    try {
        const id = req.params.id;

        const products = JSON.parse(fs.readFileSync("./data/products.json", "utf8"));

        const index = products.findIndex((item) => {
            return item.id === Number(id);
        })

        if (index === -1) {
            return res.status(404).json({
                message: "Product Not Found"
            })
        }

        const deletedProduct = products[index]

        products.splice(index, 1)

        fs.writeFileSync("./data/products.json", JSON.stringify(products, null, 2))

        res.status(200).json({
            message: "Product deleted successfully",
            product: deletedProduct
        });
    } catch (error) {
        console.error("Something went wrong:", error.message);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}