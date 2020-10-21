const mongoose = require("mongoose");

// structure
const productSchema = mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  id: Number,
});

module.exports = mongoose.model("products", productSchema);

// module.exports more commonly used when exporting just one thing.

// exports. used when exporting functions and values individually.
