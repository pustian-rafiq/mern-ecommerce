const Product = require('../models/product')
const slugify = require("slugify");
const shortid = require('shortid');

exports.createProductController = (req,res) => {

    // res.status(200).json({
    //     file: req.files,
    //     body: req.body
    // });

    console.log("user",  req.user)
    const {name,price,description,category,quantity,createdBy} = req.body;

    let productPictures = []
    if(req.files.length > 0){
        productPictures = req.files.map( file => {
            return {img : file.filename}
        })
    }

    const newProduct = new Product({
        name: name,
        slug: slugify(name),
        price,
        quantity,
        description,
        productPictures,
        category,
        createdBy: req.user._id,
    });

    newProduct.save((error, product) => {
        if (error) return res.status(400).json({ error });
        if (product) {
          res.status(201).json({ product, files: req.files });
        }
      });
}