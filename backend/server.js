import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
import http from "http";
import userRoute from "./routes/userRoute.js";
import messageRouter from "./routes/messageRoute.js";


dotenv.config();
const app = express();
const server = http.createServer(app);


//Middleware Setup
app.use(express.json()); //allows to parse incoming request :req.body
app.use(cors());

//Route Setup
app.use("/", (req, res) => { res.send("This is the Home Page") })
app.use("/api/auth", userRoute);
app.use("api/messages", messageRouter);


//Conect to Databse
connectDB();


const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log("server is running on port: ", PORT);
});