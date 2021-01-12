const mongoose = require("mongoose");
const CartItemSchema = require("../models/CartItem");
const CartItem = mongoose.model("CartItem", CartItemSchema);

module.exports = (app) => {

  app.post("/api/users/:id/cart", async (req, res) => {

   const item = req.user.cart.filter(item => item.size.toString() === req.body.params.size.toString()) 
   
   if (item[0]) {
     item[0].count += req.body.params.count
   } else {
     const newCartItem = new CartItem({
       product: req.body.params.product,
       size: req.body.params.size,
       count: req.body.params.count,
       price: req.body.params.price,
       name: req.body.params.name,
      });
      
      req.user.cart.push(newCartItem)
    }
    await req.user.save()
    res.send(req.user);
  });
};
