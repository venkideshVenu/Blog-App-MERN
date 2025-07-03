import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId

const blogSchema = new Schema({
  title: { type: String, unique: true },
  content: String,
  author: ObjectId,
  createdAt: { type: Date, default: Date.now },
});

export const blogModel = mongoose.model("blog", blogSchema);

