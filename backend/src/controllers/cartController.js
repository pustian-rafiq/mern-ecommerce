const Product = require('../models/product')
const slugify = require("slugify");
const shortid = require('shortid');

const Cart = require('../models/cart');
const product = require('../models/product');

exports.addtoCartController = (req,res) => {

    const newCart = new Cart({
        user: req.user._id,
        cartItems: req.body.cartItems
    })

    newCart.save((error,cart) => {
        if(error) return res.status(400).json({error})

        if(cart){
            return res.status(201).json({cart})
        }
    })

    
}