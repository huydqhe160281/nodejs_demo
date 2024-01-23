import mongoose, { Schema, ObjectId } from "mongoose";

const tutorialSchema = new Schema(
  {
    _id: { type: ObjectId },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    imgaes: [
      {
        _id: ObjectId,
      },
    ],
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model("Tutorial", tutorialSchema);
