const express = require("express");
const router = express.Router();

const addToCart = require("../controllers/cart/add_to_cart.controller");
const removeFromCart = require("../controllers/cart/remove_from_cart.controller");
const clearCart = require("../controllers/cart/clear_cart.controller");

router.post("/", addToCart);
router.delete("/remove", removeFromCart);
router.delete("/clear", clearCart);

module.exports = router;