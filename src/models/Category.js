import mongoose, { ObjectId, Schema } from "mongoose";

export default mongoose.model(
  "Category",
  new Schema(
    {
      _id: { type: ObjectId },
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
    {
      versionKey: false,
    }
  )
);
