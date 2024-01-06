const CRUDModel = require("../models/CRUD_model");

const createData = async (req, res) => {
  try {
    const { title, description } = req.body;
    const userInput = new CRUDModel({ title, description });
    const savedUserInput = await userInput.save();
    res.status(201).json({ data: savedUserInput });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const readData = async (req, res) => {
  try {
    const userData = await CRUDModel.findOne({});
    res.json(userData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateData = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const new_data = await CRUDModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(new_data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteData = async (req, res) => {
  try {
    const { id } = req.params;
    await CRUDModel.findByIdAndDelete(id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
module.exports = { createData, readData, updateData, deleteData };
