import mongoose from "mongoose";

const messageSchema=new mongoose.Schema({
    text:{
        type:String,
        default:""
    },
    imageUrl:{
        type:String,
        default:""
    },
    videoUrl:{
        type:String,
        default:""
    },
    seen:{
        type:Boolean,
        default:false
    }

},{
    timestamps:true
})

const ConverSationSchema= new mongoose.Schema({
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    receiver:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    messages:{
        type:mongoose.Schema.Types.ObjectId,    
        ref:"User"
    }
},{
    timestamps:true
})


const messageModel=mongoose.model("Message",messageSchema);
const ConverSationModel=mongoose.model("Conversation",ConverSationSchema);


module.exports={messageModel,ConverSationModel};