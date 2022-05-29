
const Cart = require('../models/cart');


exports.addtoCartController = async (req, res) => {

    // One user can have one card and multiple products, but one user can't have more than one card
    // If he tries to add more card, the existing card wil be returned
    console.log("user id", req.user._id)
    const carts =await Cart.find()
    console.log("carts", carts)
    Cart.find({ user: req.user._id })
        .exec((error, cart) => {
            if (error) return res.status(400).json({ error })
            if (cart.length > 0) {
                // if the cart already exist, we can only update our cart
                // return res.status(200).json({cart})
                console.log("cart", cart)
                //console.log("cart", req.body.cartItems.product)
                const product = req.body.cartItems.product;
                const isItemAdded = cart[0].cartItems.find((c) => {
                   // console.log(c)
                   return c.product === product
                })

                if (isItemAdded) {
                    Cart.findOneAndUpdate({
                        "user": req.user._id,
                        "cartItems.product": product
                    },
                        {
                            "$set": {
                                "cartItems": {
                                    ...req.body.cartItems,
                                    quantity: item.quantity + req.body.cartItems.quantity
                                }
                            }
                        }).exec((error, _cart) => {
                            if (error) return res.status(400).json({ error })

                            if (_cart) {
                                return res.status(201).json({ cartif: _cart })
                            }
                        })
                } else {
                    Cart.findOneAndUpdate({ user: req.user._id }, {
                        "$push": {
                            "cartItems": req.body.cartItems
                        }
                    }).exec((error, _cart) => {
                        if (error) return res.status(400).json({ error })

                        if (_cart) {
                            return res.status(201).json({ cartelse: _cart })
                        }
                    })
                }



            } else {
                // if the cart not exist, we can only create a new cart
                const newCart = new Cart({
                    user: req.user._id,
                    cartItems: req.body.cartItems
                })

                newCart.save((error, cart) => {
                    if (error) return res.status(400).json({ error })

                    if (cart) {
                        return res.status(201).json({ cart })
                    }
                })
            }
        })



}