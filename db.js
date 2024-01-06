const mongoose = require("mongoose");

const connectToDB = () => {
  mongoose.connect(process.env.URI);
  console.log("connect to DB");
};

module.exports = connectToDB;
