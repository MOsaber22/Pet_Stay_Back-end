const express = require("express");
const router = express.Router();

const getAllCarts = require("../controller/cart/get_cart.controller");
const addToCart = require("../controller/cart/add_to_cart.controller");
const removeFromCart = require("../controller/cart/remove_from_cart.controller");
const clearCart = require("../controller/cart/clear_cart.controller");

router.get("/", getAllCarts);
router.post("/", addToCart);
router.delete("/remove", removeFromCart);
router.delete("/clear", clearCart);

module.exports = router;