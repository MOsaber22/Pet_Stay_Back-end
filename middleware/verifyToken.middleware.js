const jwt = require("jsonwebtoken");
const userModel = require("../model/users.model");

const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || req.headers.Authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        status_code: 401,
        message: "Unauthorized - No token provided",
        data: null,
      });
    }

    const token = authHeader.split(" ")[1];

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findById(decoded.userId).select("-password");
    
    if (!user) {
      return res.status(404).json({
        status_code: 404,
        message: "User not found",
        data: null,
      });
    }

    if (!user.isActive) {
      return res.status(403).json({
        status_code: 403,
        message: "Account is deactivated",
        data: null,
      });
    }

    // Attach user to request object
    req.user = user;
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({
        status_code: 401,
        message: "Unauthorized - Token expired",
        data: null,
      });
    }
    return res.status(401).json({
      status_code: 401,
      message: "Unauthorized - Invalid token",
      data: null,
    });
  }
};

module.exports = verifyToken;
