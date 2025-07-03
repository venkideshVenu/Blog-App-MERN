import jwt from "jsonwebtoken";
import { config } from "@dotenvx/dotenvx";
import { userModel } from "../models/User.js";

config();

export default async function authMiddleware(req, res, next) {
  try {
    const token = req.headers.token;
    if (!token) {
      return res.status(401).send({
        message: "Access token is required",
        error: "No token provided",
      });
    }
    const parsedToken = jwt.verify(token, process.env.SECRET_STRING);
    const user = await userModel.findOne({ _id: parsedToken.id });

    if (!user) {
      return res.status(409).send({
        message: "User Not Found",
      });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
}
