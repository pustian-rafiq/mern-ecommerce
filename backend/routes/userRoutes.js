const router = require('express').Router();
const {signupPostController} = require('../controllers/authController')


router.post('/signup',signupPostController)


module.exports = router