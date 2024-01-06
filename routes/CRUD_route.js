const express = require("express");
const {
  create_data,
  createData,
  readData,
  updateData,
  deleteData,
} = require("../controller/create_data");

const router = express.Router();

//create data
router.post("/create", createData);

//read data
router.get("/read", readData);

//update data
router.patch("/update/:id", updateData);

//delete data
router.delete("/delete/:id", deleteData);

module.exports = router;
