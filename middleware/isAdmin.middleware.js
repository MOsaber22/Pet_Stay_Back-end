const isAdmin = (req, res, next) => {
  // `req.user` is expected to be populated by the `verifyToken` middleware
  if (!req.user) {
    return res.status(401).json({
      status_code: 401,
      message: "Unauthorized - No token provided",
      data: null,
    });
  }

  if (req.user.role !== "admin") {
    return res.status(403).json({
      status_code: 403,
      message: "Admins only",
      data: null,
    });
  }

  next();
};

module.exports = isAdmin;
