const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  categoty: String,
});

module.exports = mongoose.model("products", productSchema);
