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

    res.status(404).send({ error: error.message })

  }

};



exports.addToCart = async (req, res) => {
  const { _id, name, brandName, price, images } = req.body.product;
  const productSize = req.body.productSize;
  const items = []

  //query helper method
  const query = (item) => {
    if (item._id.toString() === productSize._id.toString()) {
      item.count++
      items.push(item);
    } else {
      const newCartItem = {
        productId: _id,
        sizeId: productSize._id,
        name,
        brandName,
        price,
        count: 1,
        size: productSize.size,
        featuredImage: images.model1[0],
      };
      items.push(newCartItem)
    }
  };

  try {

    const cart = await Cart.findById(req.user._id);

    cart.items.map(item => query(item));
    await cart.save();


    const cartDoc = await Cart.findById(req.user._id)
      .populate({
        path: "items",
        populate: { path: "productId", populate: { path: "productSizes" } },
      })
      .populate({
        path: "items",
        populate: { path: "sizeId", populate: { path: "Size" } },
      })
      .exec();
    res.send(cartDoc);

  } catch (error) {

    res.status(400).json({ error: error.message });

  }

};


    
exports.deleteCartItem = async (req, res) => {

  const cartItemId = req.params.cartItemId;
  const items = [];

  //query helper method
  const query = (item) => {

    if (item._id.toString() !== cartItemId.toString()) {
      items.push(item);
    }

  };

  try {

    const cart = await Cart.findById(req.user._id);

    cart.items.mep((item) => query(item));

    cart.items = items;
    await cart.save();

    res.send(cart);

  } catch (error) {

    res.send(error);

  }
};



exports.updateCartItem = async (req, res) => { 

  // bring in params
  const cartItemId = req.params.cartItemId
  const userId = req.user._id
  const  { key, value } = req.body
  const items = [];

  //query helper method
  const query = (item) => {
    if (item._id.toString() === cartItemId.toString()) {
      item[key] = value;
    }
    items.push(item);
  };
  
  try {    

    const cart = await Cart.findById(req.user._id);
    cart.items.map((item) => { query(item) });

    cart.items = items;
    await cart.save();

    const cartDoc = await Cart.findById(userId)
    .populate({
      path: "items",
      populate: { path: "productId", populate: { path: "productSizes" } },
    }).populate({
      path: "items",
      populate: { path: "sizeId", populate: { path: "Size" } },
    })  
    .exec();

    res.send(cartDoc);

  } catch (error) {

    res.status(400).send({ error: error.message })

  };

};