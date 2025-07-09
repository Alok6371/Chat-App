import express from 'express';
import { protectRoute } from '../controllers/userControler.js';
import { getMessages, getUserForSidebar, markMessageAsSeen } from '../controllers/messageController.js';

const messageRouter = express.Router();

// Define routes for message-related operations
messageRouter.get("/users", protectRoute, getUserForSidebar);
messageRouter.get("/:id", protectRoute, getMessages);
messageRouter.put("/mark/:id", protectRoute, markMessageAsSeen);

export default messageRouter;