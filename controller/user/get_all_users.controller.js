const userModel = require("../../model/user.model");

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    return res.status(200).json({
      status_code: 200,
      message: "Get all users successfully",
      data: {
        users,
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

module.exports = getAllUsers;
