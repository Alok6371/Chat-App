import User from "../model/User.model";
import { generateToken } from "../utils/utils";



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

        const isPasswordCorrect = await bcrypt.compare(process, userData.password);
        
        if(!isPasswordCorrect){
            return res.json({ success: false, message: "Invalid Credentials" });    
        }
    }
    catch (err) {
        console.log("Error in login controller:", err.message);
        res.json({ success: false, message: err.message });
    }
}