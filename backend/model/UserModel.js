import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    name: { // changed from fullName to name
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
        default: "",
        minlength: 6
    },
    bio: {
        type: String,
    },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;