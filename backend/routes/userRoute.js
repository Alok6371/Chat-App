import express from 'express';
import { signup, login, protectRoute, checkAuth, updateProfile } from '../controllers/userControler.js';


const userRoute = express.Router();

userRoute.post('/signup', signup);
userRoute.post('/login', login);
userRoute.put('/update-profile', protectRoute, updateProfile);
userRoute.get('/check-auth', protectRoute, checkAuth);


export default userRoute;