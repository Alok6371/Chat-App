import mongoose from "mongoose";


const USerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: [true, 'Please Enter Email'],
    },
    password: {
        type: String,
        required: [true, 'Please Enter Password'],
    },
    profile:{
        type:String,
        default:""
    }
},{
    timestamps:true
});

const UserModel=mongoose.model('User',USerSchema);

module.exports=UserModel;