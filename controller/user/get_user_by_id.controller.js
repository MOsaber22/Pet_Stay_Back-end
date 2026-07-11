const userModel = require("../../model/users.model");

const getUserById = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({
        status_code: 404,
        message: "User Not Found",
        data: null,
      });
    }
    return res.status(200).json({
      status_code: 200,
      message: "User retrieved successfully",
      data: user,
    });
  } catch (err) {
    return res.status(500).json({
      status_code: 500,
      message: err.message,
      data: null,
    });
  }
};

module.exports = getUserById;
