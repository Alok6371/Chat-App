import mongoose from "mongoose";


const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log("Database Connected");
        })
        await mongoose.connect(`${process.env.MONGO_URL}/ChatApp`);
    } catch (err) {
        console.log("Error connecting to MongoDb:", err.message);
        process.exit(1); // 1 indicates failur e
    }
};

// module.exports = { connectDB };
export { connectDB };