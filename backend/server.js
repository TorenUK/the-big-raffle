require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// schema
const Products = require("./models/dbProducts");
const Orders = require("./models/dbOrders");
const { AllOutOutlined } = require("@material-ui/icons");

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
  Products.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// get individual order to display on order.js page

app.get("/order/:id", (req, res) => {
  Orders.findById(req.params.id).then((order) => {
    res.status(200).send(order);
  });
});

// update db tickets when purchase is made

app.post("/update/:id", (req, res) => {
  Products.findById(req.params.id)
    .then((product) => {
      product.tickets = product.tickets - req.body.tickets;

      product
        .save()
        .then(() => res.send("product stock updated!"))
        .catch((err) => res.status(400).send("err -> ", err));
    })
    .catch((err) => res.status(400).send("error ->", err));
});

app.post("/orders", (req, res) => {
  const newOrder = new Orders({
    order: req.body.basket,
    email: req.body.email,
  });

  // created new order object

  newOrder
    .save()
    .then(() => res.send(newOrder)) // send new order object back to front end
    .catch((err) => res.status(400).send("error", err));
});

app.post("/create-payment-intent", async (req, res) => {
  // Create a PaymentIntent with the order amount and currency

  const { total } = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "gbp",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// listener
app.listen(port, () => console.log(`listening on ${hostname} ${port}`));
