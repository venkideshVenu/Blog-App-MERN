import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, unique: true },
  username: String,
  password: String,
});

export const userModel = mongoose.model("user", userSchema);
