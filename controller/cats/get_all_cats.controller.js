const catsModel = require("../../model/cats.model");

const getAllCats = async (req, res) => {
  try {
    const cats = await catsModel.find();
    // console.log(cats);
    return res.status(200).json({
      status_code: 200,
      message: "get all cats successfully",
      data: {
        cats,
      },
    });
  } catch (err) {
    return res.status(500).json({
      status_code: 500,
      message: err.message,
      data: null,
    });
  }
};

module.exports = getAllCats;
