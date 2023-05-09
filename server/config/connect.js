const mongoose = require("mongoose");
uri =
  "mongodb+srv://admin:admin@cluster0.rzbahaf.mongodb.net/Cluster0?retryWrites=true&w=majority";
// uri =
// "mongodb://admin:admin@ac-vnq6j1b-shard-00-00.rzbahaf.mongodb.net:27017,ac-vnq6j1b-shard-00-01.rzbahaf.mongodb.net:27017,ac-vnq6j1b-shard-00-02.rzbahaf.mongodb.net:27017/?ssl=true&replicaSet=atlas-12w7gj-shard-0&authSource=admin&retryWrites=true&w=majority";

const connectDB = () => {
  console.log("connectDB");
  return (
    mongoose.set("strictQuery", false),
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  );
};

module.exports = connectDB;
