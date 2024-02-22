const express = require("express");
const {
  index,
  create,
  show,
  update,
  destroy,
} = require("../controllers/productController");
const router = express.Router();

// All product
router.get("/", index);

// Find User by id
router.get("/:id", show);

// Update User by id
router.put("/:id", update);

// Delete User by id
router.delete("/:id", destroy);

// Add New User
router.post("/", create);

module.exports = router;
