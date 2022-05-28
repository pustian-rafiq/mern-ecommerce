const router = require('express').Router();
const { adminMiddleware } = require('../middleware/verifyAuthentication');
const verify = require('../middleware/verifyToken');



router.post('/product/create',verify,adminMiddleware,(req,res)=> {
    res.status(200).json({
        message: "Product success"
    })
});
// router.get('/category/all',getAllCategories);



module.exports = router