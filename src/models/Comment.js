import mongoose, { ObjectId, Schema } from "mongoose";

export default mongoose.model(
  "Comment",
  new Schema(
    {
      _id: { type: ObjectId },
      username: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
      createAt: {
        type: Date,
        required: true,
      },
    },
    {
      versionKey: false,
    }
  )
);
