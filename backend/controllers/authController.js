const User = require('../models/user');
const bcrypt = require('bcrypt')

exports.signupPostController = (req,res) => {
    User.findOne({email: req.body.email}).exec(async (error, user) => {
        if(user) 
            return res.status(400).json({
                error: "User alredy exists"
            });

        const {firstName, lastName,email,password} =req.body;
        const hash_password = await bcrypt.hash(password,10);
        const newUser = new User({
            firstName,
            lastName,
            email,
            hash_password,
            username: Math.random().toString(),
        });

        newUser.save((error,data) => {
            if(error){
                return res.status(400).json({
                    mesaage: "Something went wrong!"
                });
            }

            if (data) {
                
                return res.status(201).json({
                
                  user:data,
                });
              }
            // if (user) {
            //     const token = generateJwtToken(user._id, user.role);
            //     const { _id, firstName, lastName, email, role, fullName } = user;
            //     return res.status(201).json({
            //       token,
            //       user: { _id, firstName, lastName, email, role, fullName },
            //     });
            //   }

        })
    })
}