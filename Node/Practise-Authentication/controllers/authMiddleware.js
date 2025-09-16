
const jwt=require('jsonwebtoken')
exports.checkForAuth=async (req,res,next)=>{
    try {
         const token=req.cookies.token;
   // console.log("token found in cookie",token)
    if(!token){
        return res.status(401).json({
            status:"fail",
            message:'Unauthorized'
        })
    }
    const decoded=jwt.verify(token,process.env.JWT_SECRET)
   // console.log("Decoded token is",decoded)
    req.user=decoded

    next()
        
    } catch (error) {
         
        res.status(500).json({
            status: 'Error',
            message: 'Server error'
        });
    }

}