const { Router } = require("express");
const Product = require("../models/product.model.js");

const app = Router();

//get multiple products

app.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (error) {
    console.log(error);
    return res.status(404).send(error);
  }
});

//get single product by id

//get specific produt by id

app.get("/prod/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById({ id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/// add new products api

app.post("/add", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// update an element

app.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product Not Found" });
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// delete produuct

app.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      res.status(404).json({ message: "product Not Found" });
    }

    res.status(200).json({ message: "Product Deleted" });
  } catch (error) {
    res.send(error);
  }
});

module.exports = app;
