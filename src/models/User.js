import { ObjectId, Schema } from "mongoose";

export const userSchema = new Schema({
  id: { type: ObjectId },
  name: String,
  age: Number,
});
