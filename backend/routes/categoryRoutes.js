const router = require('express').Router();
const slugify = require('slugify');
const Category = require('../models/category');


router.post('/category/create',(req, res) => {

    console.log(req.body.name)
    const categoryObject = {
        name: req.body.name,
        slug: slugify(req.body.name)
    };

    if(req.body.parentId){
        categoryObject.parentId = req.body.parentId;
    }

    const newCategory = Category(categoryObject);

    newCategory.save((error,category) => {
        if(error) return res.status(400).json({err})
        if(category){
            res.status(201).json({category})
        }
    })

})


 


module.exports = router