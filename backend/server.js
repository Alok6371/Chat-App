import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
import http from "http";
import userRoute from "./routes/userRoute.js";


dotenv.config();
const app = express();
const server = http.createServer(app);



app.use(express.json()); //allows to parse incoming request :req.body

app.use("/api/auth", userRoute);
app.use("/", (req, res) => {
    res.send("This is the Home Page")
})

//Conect to Databse
connectDB();


const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log("server is running on port: ", PORT);
});