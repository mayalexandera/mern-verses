const Size = require("../models/Size");
const Order = require("../models/Order");
const Cart = require("../models/Cart");
const User = require("../models/User")


exports.placeOrder = async (req, res) => {
  try {

    const cartId = req.body.cartId;
    const user = req.user._id;
    const {estShipping, total, subTotal } = req.body.totals
    
    const cart = await Cart.findById(user);
    
    const order = new Order({
      cartId,
      items: cart.items,
      totals:{
        estShipping: estShipping,
        total: total,
        subTotal: subTotal
      },
      user,
      estShipDate: new Date(Date.now() + 10 * 24 * 60 * 1000 * 60),
    });
    await order.save();

    console.log(order)
    
    const orderDoc = await Order.findById(order._id);
    
    // update inventory
    orderDoc.items.forEach(async (item) => {
      try {
        const size = await Size.findById(item.sizeId);
        size.quantity -= item.count;
        await size.save();
      } catch(error) {
        res.status(400).send({message: error.message})
      }
    });
    
    //update user credits
    const userDoc = await User.findById(user)
    userDoc.membership[0].credits -= 1
    await userDoc.save()
    
    //populateOrder
    const newOrder = await Order.findById(order._id)
    .populate({ path: "items", populate: { path: "productId" } })
    .populate({ path: "items", populate: { path: "sizeId" } })
    .populate("user")
    .exec();
    
    res.send(newOrder);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
  };
  
  exports.fetchCurrentUserOrders = async (req, res) => {
  try {

    const query = { user: req.user._id };
    const orders = await Order.find(query)
    .populate({ path: "items", populate: { path: "productId" } })
    .populate({ path: "items", populate: { path: "sizeId" } })
    .exec();

    if(orders.length > 0) {
      res.send(orders)
    }

    else {
      res.send({ status: 404, message: "No orders found."})
    }

  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

exports.fetchOrder = async (req, res) => {
  const orderId = req.params.orderId
  
  try {
    const order = await Order.findById(orderId)
      .populate({ path: "items", populate: { path: "productId" } })
      .populate({ path: "items", populate: { path: "sizeId" } })
      .exec();

      res.send(order)

  } catch (error) {
    res.status(400).send({ message: error.message })
  }
}