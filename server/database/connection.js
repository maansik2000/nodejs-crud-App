const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    //mongodb connection String
    const con = await mongoose.connect("mongodb://localhost:27017/CRUDAPP", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("mongodb connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
