const catsModel = require("../../model/cats.model");

const viewCat = async (req, res) => {
  const catId = req.params.catId;
  //console.log(catId);
  try {
    const viewedCat = await catsModel.findById(catId);
    // console.log(viewedCat);
    if (!viewedCat) {
      return res.status(404).json({
        status_code: 404,
        message: "Cat Not Found",
        data: null,
      });
    }
    return res.status(200).json({
      status_code: 200,
      message: "Cat retrieved successfully",
      data: viewedCat,
    });
  } catch (err) {
    res.status(500).json({
      status_code: 500,
      message: err.message,
      data: null,
    });
  }
};

module.exports = viewCat;
