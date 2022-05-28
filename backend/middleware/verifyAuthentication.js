

exports.userMiddleware = (req,res,next) => {
    if(req.user.role !== 'user'){
        return res.status(400).json({
            message: 'User access denied'
        });
    }
    next();
}
exports.adminMiddleware = (req,res,next) => {
    console.log("req",req.user._id)
    if(req.user.role !== 'admin'){
        return res.status(400).json({
            message: 'Admin access denied'
        });
    }
    next();
}