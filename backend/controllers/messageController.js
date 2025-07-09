import User from "../model/UserModel.js";
import Message from "../model/Message";


//Get all users except the logged in user

import User from "../model/UserModel";

export const getUserForSidebar = async () => {
    try {
        const userId = req.user._id;
        const filteredUsers = await User.find({ _id: { $ne: userId } }).select("-password -__v");

        //Count number of message not seen by the user
        const unSeenMessage = {}
        const promises = filteredUsers.map(async () => {
            const messages = await Message.find({
                senderId: userId._id, receiverId: userId, seen: false
            })
            if (messages.length > 0) {
                unSeenMessage[user._id] = messages.length;
            }
        })
        await Promise.all(promises);
        res.json({
            success: true,
            users: filteredUsers,
            unSeenMessage
        });
    }
    catch (err) {
        console.log("Error in getUserForSidebar controller:", err.message);
        res.json({ success: false, message: err.message });
    }
}

//// Get all message for selelcted User
export const getMessages = async (req, res) => {
    try {
        const { id: selectedUserId } = req.params;
        const myId = req.user._id;

        const messages = await Message.find({
            $or: [
                {
                    senderId: myId,
                    receiverId: selectedUserId
                },
                {
                    senderId: selectedUserId,
                    receiverId: myId
                }
            ]
        })
        await Message.updateMany({
            senderId: selectedUserId,
            receiverId: myId,
        },
            { seen: true });
        res.json({
            success: true,
            messages: messages,
        });

    } catch (err) {
        console.log("Error in getMessages controller:", err.message);
        res.json({ success: false, message: err.message });
    }
}

//api to mark message as seen using message id
export const markMessaeAsSeen = async (req, res) => {
    try {
        const { id } = req.params;
        await Message.findByIdAndUpdate(id, { seen: true });
        res.json({ success: true });
    }
    catch (err) {
        console.log("Error in markMessaeAsSeen controller:", err.message);
        res.json({ success: false, message: err.message });
    }
}