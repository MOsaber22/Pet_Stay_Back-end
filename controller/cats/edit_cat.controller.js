const catsModel = require("../../model/cats.model");

const editCat = async (req, res) => {
  const catId = req.params.catId;
  const catData = req.body;
  if (req.file) {
    catData.image = req.file.path;
  }

  try {
    const updatedCat = await catsModel.findByIdAndUpdate(catId, catData, {
      new: true,
      runValidators: true,
    });
    // console.log(updatedCat);
    if (!updatedCat) {
      return res.status(404).json({
        status_code: 404,
        message: "Cat Not Found",
        data: null,
      });
    }

    return res.status(200).json({
      status_code: 200,
      message: "Cat Updated Successfully",
      data: updatedCat,
    });
  } catch (err) {
    return res.status(500).json({
      status_code: 500,
      message: err.message,
      data: null,
    });
  }
};

module.exports = editCat;
