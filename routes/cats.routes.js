const express = require("express");
const routes = express.Router();
const getAllCats = require("../controller/cats/get_all_cats.controller");
const viewCat = require("../controller/cats/view_cat.controller");
const updateCat = require("../controller/cats/edit_cat.controller");
const addCat = require("../controller/cats/add_new_cat.controller");
const deleteCat = require("../controller/cats/delete_cat.controller");
const upload = require("../middleware/multer");

routes.get("/", getAllCats);
routes.get("/:catId", viewCat);
routes.put("/:catId",upload.single('image'), updateCat);
routes.post("/", upload.single('image'), addCat);
routes.delete("/:catId", deleteCat);
module.exports = routes;