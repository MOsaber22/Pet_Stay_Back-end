const Cart = require("../../models/cart.models");

const removeFromCart = async (req, res) => {
  try {
    console.log(req.body);
    const { userId, catId } = req.body;

    console.log(userId);
    console.log(catId);
    const cart = await Cart.findOne({ user: userId });
    console.log(cart);
    if (!cart) {
      return res.status(404).json({
        message: "Cart not found",
      });
    }

    cart.cats = cart.cats.filter(
      (id) => id.toString() !== catId
    );

    await cart.save();

    res.status(200).json({
      message: "Cat removed successfully",
      cart,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = removeFromCart;