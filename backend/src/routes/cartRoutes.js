const router = require('express').Router();
const { addtoCartController } = require('../controllers/cartController');
const { userMiddleware } = require('../middleware/verifyAuthentication');
const verify = require('../middleware/verifyToken');



router.post('/addToCart',verify,userMiddleware,addtoCartController);



module.exports = router