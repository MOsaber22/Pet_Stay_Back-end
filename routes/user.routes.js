const express = require("express");
const routes = express.Router();


const getAllUsers = require("../controller/user/get_all_users.controller");
const getUserById = require("../controller/user/get_user_by_id.controller");
const updateUser = require("../controller/user/update_user.controller");

const isAdmin = require("../middleware/isAdmin.middleware");


routes.get("/", isAdmin, getAllUsers);
routes.get("/:userId", getUserById);
routes.put("/:userId", isAdmin, updateUser);


module.exports = routes;
