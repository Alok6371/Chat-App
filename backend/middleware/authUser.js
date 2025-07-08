import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';

//Middlewate to protect Route
export const protectRoute = async (req, res, next) => {
    try {
        const token = req.headers.token;

        const decoded = jwt.vefify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.userId).select("-password");

        if(!user) return res.json({ success: false, message: "User not found" });

        req.user= user;
        next();
    }
    catch (err) {
        console.log("Error in protectRoute middleware:", err.message);
        res.json({ success: false, message: "Unauthorized Access" });
    }
}

//Controller to check if user is authenticated
export const checkAuth=(req,res)=>{
    res.json({success:true,user:req.user});
}