const router = require('express').Router();
const {signupPostController, loginPostController} = require('../controllers/authController')
const verify = require('../middleware/verifyToken');
const { isRequestValidated, signupRequestValidation, signinRequestValidation } = require('../validators/authValidation');

//passing two validation middleware
router.post('/signup',signupRequestValidation,isRequestValidated ,signupPostController)
router.post('/login',signinRequestValidation,isRequestValidated,loginPostController)

router.post('/profile',verify, (req,res)=>{
    res.status(200).json({
        profile: "Success"
    })
})


module.exports = router