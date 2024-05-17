const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const errorMiddleware = require("./middleware/Error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUploader = require("express-fileupload");

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
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
const blogs = require("./routes/blogsRoutes");
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
app.use("/api/v1", blogs);
module.exports = app;
