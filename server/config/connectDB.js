import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const connection = mongoose.connection;

        connection.once('connected', () => {
            console.log("Connected to DB");
        });

        connection.on("error", (error) => {
            console.log("Something is wrong with MongoDB", error);
        });
    } catch (err) {
        console.log("Listening error is", err);
    }
};

export default connectDb;