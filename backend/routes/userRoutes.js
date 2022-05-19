const router = require('express').Router();
const {signupPostController, loginPostController} = require('../controllers/authController')
const verify = require('../middleware/verifyToken')

router.post('/signup',signupPostController)
router.post('/login',loginPostController)

router.post('/profile',verify, (req,res)=>{
    res.status(200).json({
        profile: "Success"
    })
})


module.exports = router