const userModel = require("../../model/users.model");

const deleteUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const deletedUser = await userModel.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({
        status_code: 404,
        message: "User Not Found",
        data: null,
      });
    }
    return res.status(200).json({
      status_code: 200,
      message: "User Deleted Successfully",
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

module.exports = deleteUser;
