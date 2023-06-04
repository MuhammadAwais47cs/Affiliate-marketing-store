const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const errorMiddleware = require("./middleware/Error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUploader = require("express-fileupload");
// const connection_url = 'mongodb+srv://admin:admin@cluster0.rzbahaf.mongodb.net/?retryWrites=true&w=majority'
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUploader());
// middleware for error
app.use(errorMiddleware);

// Routes Imports

const category = require("./routes/categoryRoutes");
const brands = require("./routes/brandRoutes");
const products = require("./routes/productsRoutes");
const user = require("./routes/userRoute");
app.use("/api/v1", category);
app.use("/api/v1", products);
app.use("/api/v1", brands);
app.use("/api/v1", user);
module.exports = app;
