const mongoose = require("mongoose");

// structure
const orderSchema = mongoose.Schema({
  id: String,
  order: Array,
  email: String,
});

module.exports = mongoose.model("orders", orderSchema);

// module.exports more commonly used when exporting just one thing.

// exports. used when exporting functions and values individually.
