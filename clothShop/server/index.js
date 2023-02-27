const express = require("express");
const app = express();

const mongoose = require("mongoose");
const path = require("path");

///////////////////////  static file config  ///////////////////////////////
app.use(express.static("public"));

///////////////////////  environment variable config  ///////////////////////
const dotenv = require("dotenv");
dotenv.config();
///////////////////////  cors config  ///////////////////////////////////////
var cors = require("cors");
app.use(cors());
// cross set
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

///////////////////////  body parser config  ///////////////////////////////////
var bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

///////////////////////////////// router ///////////////////////////////////////
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const cartRouter = require("./routes/cart");
const orderRouter = require("./routes/order");
const checkRouter = require("./routes/strip");

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api/checkout", checkRouter);

///////////////////////  db connect server run  ///////////////////////////////////

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => app.listen(8080))
  .catch((err) => console.log(err));
