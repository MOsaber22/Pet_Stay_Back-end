const catsModel = require("../../model/cats.model");

const deleteCat = async (req, res) => {
  const catId = req.params.catId;
  // console.log(catId);
  try {
    const deletedCat = await catsModel.findByIdAndDelete(catId);
    // console.log(deletedCat);
    if (!deletedCat) {
      return res.status(404).json({
        status_code: 404,
        message: "Cat Not Found",
        data: null,
      });
    }
    
    return res.status(200).json({
      status_code: 200,
      message: "Cat Deleted Successfully",
      data: null,
    });
  } catch (err) {
    return res.status(500).json({
      status_code: 500,
      message: err.message,
      data: null,
    });
  }
};

module.exports = deleteCat;
