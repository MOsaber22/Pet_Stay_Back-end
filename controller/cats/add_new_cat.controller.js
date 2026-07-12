const catsModel = require("../../model/cats.model");

const addNewCat = async (req, res) => {
  const { name, age, gender, breed, image, location, weight } = req.body;
  if (!name || !age || !gender || !breed || !location || !weight ) {
    return res.status(400).json({
      status_code: 400,
      message: "please enter all required fields",
      data: null,
    });
  }
  try {
    const newCat = await catsModel.create(req.body);
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
