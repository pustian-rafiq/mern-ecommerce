const Product = require('../models/product')
const slugify = require("slugify");
const shortid = require('shortid');

exports.addtoCartController = (req,res) => {

res.status(200).json("cart")
    
}