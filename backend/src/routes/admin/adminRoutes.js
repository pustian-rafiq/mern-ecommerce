const router = require('express').Router();
const {signupPostController, loginPostController} = require('../../controllers/admin/authController');
const { signupRequestValidation, isRequestValidated, signinRequestValidation } = require('../../validators/authValidation');


router.post('/signup',signupRequestValidation,isRequestValidated,signupPostController)
router.post('/login',signinRequestValidation,isRequestValidated,loginPostController)


module.exports = router