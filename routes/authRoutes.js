const express = require("express");
const { signup, login } = require("../controller/authController");
const {
  verifyToken,
  checkRole,
} = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

// test route for role based access, only admin can access this
router.get(
  "/admin-only",
  verifyToken,
  checkRole("admin"),
  (req, res) => {
    res.status(200).json({
      message: "Welcome admin",
      user: req.user,
    });
  }
);

module.exports = router;