const mongoose = require("mongoose");

const mongodb = () => {
  const con = mongoose.connect("mongodb://localhost:27017");
  if (con) {
    console.log("connected");
  } else {
    console.log("not connected");
  }
};
module.exports = mongodb;
