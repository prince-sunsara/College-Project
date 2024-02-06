import mongoose from "mongoose";

const uri = `mongodb+srv://princesunasara977:${process.env.MONGODB_API}@majorproject.safqimk.mongodb.net/?retryWrites=true&w=majority`

const DBConnection = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Database connection established!");
    } catch (err) {
        console.error(`Error connecting to database: ${err}`);
    }
}

export default DBConnection;