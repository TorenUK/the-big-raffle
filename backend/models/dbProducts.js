const mongoose = require("mongoose");

// structure
const productSchema = mongoose.Schema({
  id: String,
  name: String,
  image: String,
  price: Number,
  tickets: Number,
});

module.exports = mongoose.model("products", productSchema);

// module.exports more commonly used when exporting just one thing.

// exports. used when exporting functions and values individually.
