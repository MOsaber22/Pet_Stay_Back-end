const Cart = require("../../models/cart.models");

const addToCart = async (req, res) => {
  try {
    console.log(req.body);

    const { userId, catId } = req.body;

    console.log("User ID:", userId);
    console.log("Cat ID:", catId);

    let cart = await Cart.findOne({ user: userId });

    console.log("Found Cart:", cart);

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