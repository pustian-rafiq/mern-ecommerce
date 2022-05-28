const router = require('express').Router();
const { addCategoryController, getAllCategories } = require('../controllers/categoryController');
const { adminMiddleware } = require('../middleware/verifyAuthentication');
const verify = require('../middleware/verifyToken');



router.post('/category/create',verify,adminMiddleware,addCategoryController);
router.get('/category/all',getAllCategories);


 


module.exports = router