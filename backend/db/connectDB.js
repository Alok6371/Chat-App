const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB connected: ${conn.connection}`);
    } catch (err) {
        console.log("Error connecting to MongoDb:" , err.message);
        process.exit(1); // 1 indicates failur e
    }
};
 
module.exports = { connectDB };