# 🛒 Mini Store Management API

A RESTful backend API built with **Node.js and Express.js** to manage
products in a mini online store.

This project is part of my Node.js Backend Development learning journey.
It focuses on REST APIs, CRUD operations, request handling, validation,
error handling, and file-based data persistence.

## 🚀 Features

-   Get all products.
-   Get a single product by ID.
-   Filter products by category and brand.
-   Add new products.
-   Update existing products.
-   Delete products.
-   Validate incoming product data.
-   Prevent duplicate product IDs.
-   Handle missing products with proper HTTP status codes.
-   Handle unexpected server errors.
-   Store product data persistently using a JSON file.

## 🛠️ Technologies Used

-   Node.js
-   Express.js
-   JavaScript
-   File System (`fs` module)
-   JSON
-   Postman (API testing)

## 📁 Project Structure

``` text
mini-store-api/
├── controllers/
│   └── productController.js
├── routes/
│   └── productRoutes.js
├── data/
│   └── products.json
├── app.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## ⚙️ Installation and Setup

1.  Clone the repository:

``` bash
git clone YOUR_REPOSITORY_URL
```

2.  Navigate to the project directory:

``` bash
cd mini-store-api
```

3.  Install dependencies:

``` bash
npm install
```

4.  Start the server:

``` bash
node app.js
```

The server will run at:

``` text
http://localhost:3000
```

## 📡 API Endpoints

Base URL: `http://localhost:3000`

  Method   Endpoint          Description
  -------- ----------------- -------------------
  GET      `/`               Welcome message
  GET      `/products`       Get all products
  GET      `/products/:id`   Get product by ID
  POST     `/products`       Add a new product
  PUT      `/products/:id`   Update a product
  DELETE   `/products/:id`   Delete a product

### 🔍 Product Filtering

Filter products using query parameters.

**Filter by category:**

``` text
GET /products?category=mobile
```

**Filter by brand:**

``` text
GET /products?brand=samsung
```

**Filter by both:**

``` text
GET /products?category=mobile&brand=samsung
```

## 📦 Sample Product Data

``` json
{
  "id": 122,
  "name": "Samsung Galaxy",
  "brand": "Samsung",
  "category": "Mobile",
  "price": 50000,
  "stock": 10
}
```

## 🛡️ Validation and Error Handling

The API validates:

-   Required product fields.
-   Correct data types.
-   Empty product names, brands, and categories.
-   Positive product IDs and prices.
-   Non-negative stock values.
-   Duplicate product IDs.

HTTP status codes used:

  Status   Meaning
  -------- -----------------------
  200      Successful request
  201      Product created
  400      Invalid product data
  404      Product not found
  500      Internal server error

Unexpected errors are handled using JavaScript `try...catch`.

## 💾 Data Storage

Product information is stored in:

``` text
data/products.json
```

The Node.js `fs` module is used to read and write product data.

Data remains available after restarting the server because changes are
saved directly to the JSON file.

## 🧪 API Testing

The API has been tested using Postman.

Completed tests include:

-   Successful GET, POST, PUT and DELETE requests.
-   Missing required fields.
-   Invalid data types.
-   Negative product prices.
-   Negative stock values.
-   Duplicate product IDs.
-   Updating nonexistent products.
-   Deleting nonexistent products.
-   Multiple query filters.
-   Data persistence after server restart.

## 📚 Learning Progress

**Completed:**

-   Node.js fundamentals.
-   CommonJS modules.
-   npm and packages.
-   Callbacks, Promises and async/await.
-   HTTP server fundamentals.
-   Express.js fundamentals.
-   Route parameters and query parameters.
-   POST requests and request bodies.
-   REST API development.
-   CRUD operations.
-   Routes and controllers separation.
-   Input validation.
-   Error handling.
-   API testing with Postman.
-   JSON file-based data persistence.

**Upcoming improvements:**

-   PATCH endpoint for partial product updates.
-   Reusable validation functions.
-   Asynchronous file operations.
-   Database integration.
-   Authentication and authorization.

## 🎯 Project Goal

The goal of this project is to strengthen my backend development skills
by building a practical REST API from scratch and gradually improving
its architecture and functionality.

------------------------------------------------------------------------

**Status:** Core CRUD functionality completed ✅

**Currently learning:** Node.js Backend Development
