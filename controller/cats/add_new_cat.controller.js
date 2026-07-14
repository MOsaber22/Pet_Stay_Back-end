const catsModel = require("../../model/cats.model");

const addNewCat = async (req, res) => {
  const { name, age, gender, breed, location, weight, temperament, story } =
    req.body;
  const image = req.file;
  if (!image) {
    return res.status(400).json({
      status_code: 400,
      message: "Please upload a cat image.",
      data: null,
    });
  }
  if (!name || !age || !gender || !breed || !location || !weight) {
    return res.status(400).json({
      status_code: 400,
      message: "please enter all required fields",
      data: null,
    });
  }
  try {
    const newCat = await catsModel.create({
      name,
      age,
      gender,
      breed,
      location,
      weight,
      temperament,
      story,
      image: image.path,
    });
    return res.status(201).json({
      status_code: 201,
      message: "New cat added successfully",
      data: newCat,
    });
  } catch (err) {
    return res.status(500).json({
      status_code: 500,
      message: err.message,
      data: null,
    });
  }
};

module.exports = addNewCat;
