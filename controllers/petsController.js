const Pets = require("../models/Pets");
const ToDo = require("../models/Pets");

const getAllPets = async (req, res) => {
  console.log("hi");
  try {
    const results = await Pets.findAll();
    res.status(200).json({ data: results });
  } catch (err) {
    res.status(500).json({ message: `${err.message}` });
  }
};

module.export = getAllPets;
