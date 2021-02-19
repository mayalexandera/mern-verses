const Cart = require("../models/Cart");

exports.fetchCart = async (req, res) => {
  try {
    const cart = await Cart.findById(req.user._id)
    .populate({
      path: "items",
      populate: { path: "productId", populate: { path: "productSizes" } },
    })
    .populate({
      path: "items",
      populate: { path: "sizeId", populate: { path: "Size" } },
    });
    res.send(cart);
  } catch (error) {
    res.send(error)
  }
};

exports.addToCart = async (req, res) => {
  try {
    const cart = await Cart.findById(req.user._id);
    const { _id, name, brandName, price, images } = req.body.product;
    const productSize = req.body.productSize;
    
    const item = cart.items.filter(
      (i) => i.sizeId.toString() === productSize._id.toString()
      );
      let newCartItem;
      
      if (item[0]) {
        item[0].count++;
        newCartItem = item[0];
      } else {
        newCartItem = {
          productId: _id,
          sizeId: productSize._id,
          name,
          brandName,
          price,
          count: 1,
          size: productSize.size,
          featuredImage: images.model1[0],
        };
        cart.items.push(newCartItem);
      }
      await cart.save();
      const result = await Cart.findById(req.user._id)
      .populate({
        path: "items",
        populate: { path: "productId", populate: { path: "productSizes" } },
      }).populate({
        path: "items",
        populate: { path: "sizeId", populate: { path: "Size" } },
      })
      .exec();
      res.send(result);
    } catch(error) {
      res.status(400).json({error: "Your request could not be processed."})
    }
    };
    
    exports.deleteCartItem = async (req, res) => {
      try {
    const cart = await Cart.findById(req.user._id);
    const newList = await cart.items.filter(
      (item) => item._id.toString() !== req.params.cartItemId.toString()
      );
      cart.items = newList;
      await cart.save();
      res.send(cart);
    } catch(error) {
      res.send(error)
    }
};

exports.updateCartItem = async (req, res) => {
  const cart = await Cart.findById(req.user._id);
  const items = [];

  cart.items.map((item) => {
    const value = req.body.value;
    const field = req.body.field;
    if (item._id.toString() === req.params.cartItemId.toString()) {
      item[field] = value;
      items.push(item);
    }
  });
  cart.items = items;
  await cart.save();
  const result = await Cart.findById(req.user._id)
    .populate({
      path: "items",
      populate: { path: "productId", populate: { path: "productSizes" } },
    }).populate({
      path: "items",
      populate: { path: "sizeId", populate: { path: "Size" } },
    })  
    .exec();
  res.send(result);
};
