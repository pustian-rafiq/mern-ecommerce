const slugify = require("slugify");
const Category = require('../models/category');

exports.addCategoryController = (req, res) => {

    // console.log(req.body.name)
    const categoryObject = {
        name: req.body.name,
        slug: slugify(req.body.name)
    };

    if (req.body.parentId) {
        categoryObject.parentId = req.body.parentId;
    }

    const newCategory = Category(categoryObject);

    newCategory.save((error, category) => {
        if (error) {
            console.log(error)
            return res.status(400).json({ err })
        }
        if (category) {
            return res.status(201).json({ category })
        }
    })

}

exports.getAllCategories = async (req, res) => {
    // Fetch all categories procedure-1

    // Category.find().exec((error,categories) => {
    //     if(error) return res.status(400).json({err})

    //     if(categories) {
    //         return res.status(200).json({categories})
    //     }
    // })

     // Fetch all categories procedure-2
    try {

        const categories =await Category.find();
       // console.log("categories",categories)
        res.status(200).json(categories)
    } catch (err) {
        res.status(400).json((err));
    }

}