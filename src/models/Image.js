import mongoose, { ObjectId, Schema } from "mongoose";

export default mongoose.model(
  "Image",
  new Schema(
    {
      _id: { type: ObjectId },
      path: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
      path: {
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
