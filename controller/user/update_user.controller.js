const userModel = require("../../model/user.model");

const updateUser = async (req, res) => {
  const userId = req.params.userId;
  const userData = req.body;

  try {
    const updatedUser = await userModel.findByIdAndUpdate(userId, userData, {
      new: true,
      runValidators: true,
    });
    if (!updatedUser) {
      return res.status(404).json({
        status_code: 404,
        message: "User Not Found",
        data: null,
      });
    }
    return res.status(200).json({
      status_code: 200,
      message: "User Updated Successfully",
      data: updatedUser,
    });
  } catch (err) {
    return res.status(500).json({
      status_code: 500,
      message: err.message,
      data: null,
    });
  }
};

module.exports = updateUser;
