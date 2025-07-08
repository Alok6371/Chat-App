import User from "../model/User.model";
import { generateToken } from "../utils/utils";
import bcrypt from "bcrypt";
import cloudinary from "../db/clodinary.js";



//Signup new user
export const signup = async (req, res) => {
    const { fullName, password, email, bio } = req.body;

    try {
        if (!fullName || !password || !email || !bio) {
            return res.json({ success: false, message: "Missing Details" });
        }
        const user = await User.findOne({ email });
        if (user) {
            retunrres.json({ success: false, message: "Usrer already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            fullName,
            email,
            password: hashedPassword,
            bio,
        })

        const token = generateToken(newUser._id);
        res.status({ success: true, userData: newUser, message: "User Created Successfully" });
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
        const userData = awaitUser.findOne({ email });

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
        })
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
        const { profilePic, bio, fullName } = req.body;

        const userId = req.user._id;
        let updateUser;

        if (profilePic) {
            updateUser = await User.findByIdAndUpdate(userId, {
                bio,
                fullName
            }, { new: true });
        } else {
            const upload = await cloudinary.uploader.upload(profilePic);

            updateUser = await User.findByIdAndUpdate(userId, { profilePic: upload.secure_url, bio, fullName }, { new: true });
        }
        res.json({ success: true, user: updateUser });
    }
    catch (err) {
        console.log("Error in updateProfile controller:", err.message);
        res.json({ success: false, message: err.message });
    }
}