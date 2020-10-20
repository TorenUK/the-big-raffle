require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// schema
const products = require("./models/dbProducts");

const mongoAdminPassword = process.env.MONGO_ADMIN_PASSWORD;
const hostname = process.env.HOST;

// app setup
const app = express();
const port = process.env.PORT;
const connection_url = `mongodb+srv://admin:${mongoAdminPassword}@cluster0.exhbq.mongodb.net/the-big-raffle?retryWrites=true&w=majority`;

// middleware
app.use(express.json());
app.use(cors());

// db config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("connected to MongoDB");
});

// routes
app.get("/", (req, res) => {
  res.status(200).send("welcome to the big raffle back-end");
});

app.get("/products", (req, res) => {
  products.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// listener
app.listen(port, () => console.log(`listening on ${hostname} ${port}`));
