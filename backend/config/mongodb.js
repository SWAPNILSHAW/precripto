import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/demo`);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error(`MongoDB connection error: ${error.message}`);
        // Do not crash the entire process with process.exit(1) so the server stays alive
    }
};

export default connectDB;
