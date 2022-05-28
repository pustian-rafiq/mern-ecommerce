const router = require('express').Router();
const { addCategoryController, getAllCategories } = require('../controllers/categoryController');
const { adminMiddleware } = require('../middleware/verifyAuthentication');
const verify = require('../middleware/verifyToken');



router.post('/create',verify,adminMiddleware,addCategoryController);
router.get('/all',getAllCategories);


 


module.exports = router