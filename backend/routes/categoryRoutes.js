const router = require('express').Router();
const slugify = require('slugify');
const { addCategoryController, getAllCategories } = require('../controllers/categoryController');



router.post('/category/create',addCategoryController);
router.get('/category/all',getAllCategories);


 


module.exports = router