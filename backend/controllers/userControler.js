import User from "../model/UserModel.js";
import { generateToken } from "../utils/utils.js";
import bcrypt from "bcryptjs";
import cloudinary from "../db/cloudinary.js";



//Signup new user
export const signup = async (req, res) => {
    const { name, password, email, bio } = req.body; // changed fullName to name

    try {
        if (!name || !password || !email || !bio) {
            return res.json({ success: false, message: "Missing Details" });
        }
        const user = await User.findOne({ email });
        if (user) {
            return res.json({ success: false, message: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            bio,
        });

        const token = generateToken(newUser._id);
        res.json({ success: true, userData: newUser, token, message: "User Created Successfully" });
    }
    catch (err) {
        console.log("Error in signup controller:", err.message);
        res.json({ success: false, message: err.message });
    }
}

//Login user
export const login = async (req, res) => {
    try {
        const { password, email } = req.body;
        const userData = await User.findOne({ email });

        if (!userData) {
            return res.json({ success: false, message: "Invalid Credentials" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, userData.password);

        if (!isPasswordCorrect) {
            return res.json({ success: false, message: "Invalid Credentials" });
        }
        const token = generateToken(userData._id);

        res.json({
            success: true,
            userData,
            token,
            message: "User Logged In Successfully"
        });
    }
    catch (err) {
        console.log("Error in login controller:", err.message);
        res.json({ success: false, message: err.message });
    }
}

//controller to get user is authenticated
export const checkAuth = (req, res) => {
    res.json({ success: true, user: req.user });
}

//Controller to update user profile details

export const updateProfile = async (req, res) => {
    try {
        const { profilePic, bio, name } = req.body; // changed fullName to name

        const userId = req.user._id;
        let updateUser;

        if (profilePic) {
            const upload = await cloudinary.uploader.upload(profilePic);
            updateUser = await User.findByIdAndUpdate(
                userId,
                { profilePic: upload.secure_url, bio, name },
                { new: true }
            );
        } else {
            updateUser = await User.findByIdAndUpdate(
                userId,
                { bio, name },
                { new: true }
            );
        }
        res.json({ success: true, user: updateUser });
    }
    catch (err) {
        console.log("Error in updateProfile controller:", err.message);
        res.json({ success: false, message: err.message });
    }
}

// Dummy protectRoute middleware (replace with real JWT logic)
export const protectRoute = (req, res, next) => {
    // Example: attach a dummy user for testing
    req.user = { _id: "dummyuserid" };
    next();
};