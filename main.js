require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRouter");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4000;
const DB_URL = process.env.DB_URL;

mongoose
  .connect(DB_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server started http://localhost:${PORT}`);
    });
    console.log("connect succssfuly");
  })
  .catch(() => {
    console.log("connection Faild");
  });

app.use("/api/product", productRoutes);
