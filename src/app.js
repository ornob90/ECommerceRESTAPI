const express = require("express");
const cors = require("cors");
require("dotenv").config();

// middle wares

// error handlers
const globalErrorHandler = require("./utils/globalErrorHandler");

// routes
const sellerRoutes = require("./routes/seller");
const buyerRoutes = require("./routes/buyer");
const authRoutes = require("./routes/auth");

// utils
const connectDB = require("./db/connectDB");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: [process.env.LOCAL_CLIENT],
    credentials: true,
  })
);

// middlewares
app.use(sellerRoutes);
app.use(buyerRoutes);
app.use(authRoutes);

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server running...");
});

app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${res.originalUrl} on the server`);
  error.status = 404;

  next(error);
});

// error handling middleware
app.use(globalErrorHandler);

// const main = async () => {
//   await connectDB();
//   // sendEMail();
//   app.listen(port, () => {
//     console.log("Server running...");
//   });
// };

// main();

module.exports = app;
