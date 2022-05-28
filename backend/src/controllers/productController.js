const Product = require('../models/product')
const slugify = require("slugify");
const shortid = require('shortid');

exports.createProductController = (req,res) => {
    res.status(200).json({
        file: req.file,
        body: req.body
    });
}