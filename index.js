const express = require("express");
const app = express();
const mongodb = require("./models/mongodb");
const bodyParser = require("body-parser");
const Product = require("./models/product.model.js");
const productController = require("./controllers/productController");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// get content from the db

app.use("/api/product", productController);
//db connection online
mongodb();
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
