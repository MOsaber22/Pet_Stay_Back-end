const Cart = require("../../models/cart.models");

const getCart = async (req, res) => {
  try {
    const { userId } = req.body;

    const cart = await Cart.findOne({ user: userId }).populate("cats");

    if (!cart) {
      return res.status(404).json({
        message: "Cart not found",
      });
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = getCart;