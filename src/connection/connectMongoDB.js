import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URL || "mongodb://127.0.0.1:27017/crud"
    );
    console.log("connect to DB success");
  } catch (e) {
    console.log("connect to DB fail");
  }
};

export default connectMongoDB;
