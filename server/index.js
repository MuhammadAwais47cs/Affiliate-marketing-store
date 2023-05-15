const app = require("./app");
const dotenv = require("dotenv");
const { connect } = require("mongoose");
const connectDB = require("./config/connect.js");
const cloudinary = require("cloudinary");

// uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error :${err.message}`);
  console.log("Shutting down server due to uncaught exceptions");
  server.close(() => process.exit(1));
});
//config
dotenv.config({ path: "config/config.env" });
const server = app.listen(process.env.PORT, () => {
  console.log(`server is working on port ${process.env.PORT}`);
});
connectDB();
//  async () => {
//     try {

//     } catch (error) {
//         console.log('error :>> ', error);
//     }
// }
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down server due to unhandled promise rejection");
  server.close(() => process.exit(1));
});
