const mongoose = require("mongoose");

const CURD_Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const CRUDModel = mongoose.model("crud_data", CURD_Schema);
module.exports = CRUDModel;
