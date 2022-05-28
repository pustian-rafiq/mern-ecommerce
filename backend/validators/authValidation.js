const { check, validationResult } = require("express-validator");

exports.signupRequestValidation =[
    check('firstName')
    .notEmpty()
    .withMessage('First name is required'),

    check('lastName')
    .notEmpty()
    .withMessage('Last name is required'),

    check('email')
    .isEmail()
    .withMessage('Valid email is required'),

    check('password')
    .isLength({min: 6 })
    .withMessage('Password must be at least 6 characters'),
]
exports.signinRequestValidation =[
    
    check('email')
    .isEmail()
    .withMessage('Valid email is required'),

    check('password')
    .isLength({min: 6 })
    .withMessage('Password must be at least 6 characters'),
]

exports.isRequestValidated = (req,res,next) => {
    const errors = validationResult(req);

    if(errors.array().length > 0 ){
        return res.status(400).json({
            error: errors.array()[0].msg
        });
    }
      //After check valition, Call the next function to work forward
      next();
}