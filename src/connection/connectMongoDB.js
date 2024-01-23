import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connect to DB success");
  } catch (e) {
    console.log("connect to DB fail");
  }
};

export default connectMongoDB;
