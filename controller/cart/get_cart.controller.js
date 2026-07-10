const Cart = require("../../model/cart.model");

const getAllCarts = async (req, res) => {
  try {
    const carts = await Cart.find().populate("cats");

    res.status(200).json({
      message: "All carts retrieved successfully",
      data: carts,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = getAllCarts;