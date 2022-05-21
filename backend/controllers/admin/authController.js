const User = require('../../models/user');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.signupPostController = (req,res) => {
    User.findOne({email: req.body.email}).exec(async (error, user) => {
        if(user) 
            return res.status(400).json({
                error: "Admin alredy exists"
            });

        const {firstName, lastName,email,password} =req.body;
        const hash_password = await bcrypt.hash(password,10);
        const newUser = new User({
            firstName,
            lastName,
            email,
            hash_password,
            username: Math.random().toString(),
            role:'admin'
        });

        newUser.save((error,data) => {
            if(error){
                return res.status(400).json({
                    mesaage: "Something went wrong!"
                });
            }

            if (data) {
                
                return res.status(201).json({
                 message:"Admin has been created successfully"
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

//User login method

exports.loginPostController = (req,res) => {
    User.findOne({email: req.body.email}).exec( (error,user) => {
        if(error) 
            return res.status(400).json(error)
        if(user){
            if(user.authenticate(req.body.password)){

            console.log("wrong pass")
                const token = jwt.sign({_id: user._id}, process.env.SECRET_KEY,{expiresIn:'2d'});
                const {_id,firstName,lastName,email,role,fullName} = user;
                res.status(200).json({
                  token,
                  user: {
                    _id,
                    firstName,
                    lastName,
                    email,
                    fullName,
                    role
                  }
                })
            }else{
                return res.status(400).json({
                    message: "Admin email or password doesn't match "
                })
            }
        }else{
            return res.status(400).json({
                message: "Admin email or password doesn't match"
            })
        }
    })
}