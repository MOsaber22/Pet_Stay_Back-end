const express = require("express");
const routes = express.Router();


const getAllUsers = require("../controller/user/get_all_users.controller");
const getUserById = require("../controller/user/get_user_by_id.controller");
const updateUser = require("../controller/user/update_user.controller");

const isAdmin = require("../middleware/isAdmin.middleware");
const verifyToken = require("../middleware/verifyToken.middleware");

routes.get("/", verifyToken, isAdmin, getAllUsers);
routes.get("/:userId", verifyToken, getUserById);
routes.put("/:userId", verifyToken, isAdmin, updateUser);


module.exports = routes;
