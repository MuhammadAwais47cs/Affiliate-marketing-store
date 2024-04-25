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
const subscriber = require("./routes/subscriber");

const brands = require("./routes/brandRoutes");
const sliders = require("./routes/sliderRoutes");
const products = require("./routes/productsRoutes");
const user = require("./routes/userRoute");
const mails = require("./routes/mailRoutes");
app.use("/api/v1", category);
app.use("/api/v1", products);
app.use("/api/v1", brands);
app.use("/api/v1", sliders);
app.use("/api/v1", user);
app.use("/api/v1", subscriber);
app.use("/api/v1", mails);
module.exports = app;
