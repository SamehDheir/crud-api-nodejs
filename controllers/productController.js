const Product = require("../models/product");

const index = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const create = async (req, res) => {
  try {
    const products = await Product.create(req.body);
    console.log(res.status(200).json(products));
  } catch (error) {
    console.log(res.status(500).json({ message: error.message }));
  }
};

const show = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      res.status(404).json("product not found 🥹");
    }
    const updateProduct = await Product.findById(id);
    res.status(200).json(updateProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id, req.body);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }
    const deleteProduct = await Product.findById(id);
    res.status(200).json({ message: "delete product successsfuly" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};
