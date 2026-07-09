const Cart = require("../../model/cart.model");

const addToCart = async (req, res) => {
  try {

    const { userId, catId } = req.body;

    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({
        user: userId,
        cats: [catId],
      });
    } else {
      if (!cart.cats.includes(catId)) {
        cart.cats.push(catId);
      }
    }

    await cart.save();

    res.status(201).json({
      message: "Cat added to cart successfully",
      cart,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = addToCart;