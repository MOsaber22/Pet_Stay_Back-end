const express = require("express");
const routes = express.Router();

const createUser = require("../controller/user/create_user.controller");
const getAllUsers = require("../controller/user/get_all_users.controller");
const getUserById = require("../controller/user/get_user_by_id.controller");
const updateUser = require("../controller/user/update_user.controller");
const deleteUser = require("../controller/user/delete_user.controller");

routes.post("/", createUser);
routes.get("/", getAllUsers);
routes.get("/:userId", getUserById);
routes.put("/:userId", updateUser);
routes.delete("/:userId", deleteUser);

module.exports = routes;
