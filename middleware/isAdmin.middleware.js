const userModel = require("../model/users.model");

const isAdmin = async (req, res, next) => {
  const userId = req.headers["x-user-id"];
  
  if (!userId) {
    return res.status(401).json({
      status_code: 401,
      message: "Unauthorized",
      data: null,
    });
  }

  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({
        status_code: 404,
        message: "User not found",
        data: null,
      });
    }

    if (user.role !== "admin") {
      return res.status(403).json({
        status_code: 403,
        message: "Admins only",
        data: null,
      });
    }

    req.admin = user;
    next();
  } catch (err) {
    return res.status(500).json({
      status_code: 500,
      message: err.message,
      data: null,
    });
  }
};

module.exports = isAdmin;
