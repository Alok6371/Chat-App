const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./db/connectDB");
const authrouter = require("./routes/auth.route.js");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;


app.use(express.json()); //allows to parse incoming request :req.body

app.use("/",(req,res)=>{
    res.send("This is the Home Page")
})



app.listen(PORT, () => {
    connectDB();
    console.log("server is running on port: ", PORT);
});