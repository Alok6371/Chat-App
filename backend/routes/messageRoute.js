import express from 'express';
import { protectRoute } from '../controllers/userControler';
import { getMessages, getUserForSidebar, markMessaeAsSeen } from '../controllers/messageController';

const messageRouter = express.Router();

// Define routes for message-related operations
messageRouter.get("/users", protectRoute, getUserForSidebar);
messageRouter.get("/:id", protectRoute, getMessages);
messageRouter.put("mark/:id", protectRoute, markMessaeAsSeen);

export default messageRouter;