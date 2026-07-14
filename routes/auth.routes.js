const express = require("express");
const routes = express.Router();

const register = require("../controller/auth/register.controller");
const login = require("../controller/auth/login.controller");

routes.post("/register", register);
routes.post("/login", login);

module.exports = routes;
