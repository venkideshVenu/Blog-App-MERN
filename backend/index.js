import { config } from "@dotenvx/dotenvx";
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import connectDB from "./config/database.js";
import cors from "cors";
import {
  blogValidator,
  signInBodySchema,
  signUpBodySchema,
} from "./utils/validators.js";
import { userModel } from "./models/User.js";
import { blogModel } from "./models/Blog.js";
import authMiddleware from "./middleware/auth.js";

config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

// signup route
app.post("/signup", async (req, res) => {
  try {
    const parsedBodySafe = signUpBodySchema.safeParse(req.body);

    if (!parsedBodySafe.success) {
      return res.status(400).json({
        message: "Invalid input format",
        error: parsedBodySafe.error.errors,
      });
    }

    const { email, username, password } = parsedBodySafe.data;

    const existingUser = await userModel.findOne({
      email: email,
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
        error: "Email is already registered",
      });
    }

    const existingUsername = await userModel.findOne({ username: username });

    if (existingUsername) {
      return res.status(409).send({
        success: false,
        message: "Username already taken",
        error: "Please choose a different username",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 5);

    const user = await userModel.create({
      email: email,
      username: username,
      password: hashedPassword,
    });

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      userId: user._id,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
});

// sign in route
app.post("/signin", async (req, res) => {
  try {
    const parsedBodySafe = signInBodySchema.safeParse(req.body);

    if (!parsedBodySafe.success) {
      return res.status(400).json({
        message: "Invalid input format",
        error: parsedBodySafe.error.errors,
      });
    }

    const { email, password } = parsedBodySafe.data;

    const user = await userModel.findOne({
      email: email,
    });

    if (!user) {
      return res.status(409).json({
        success: false,
        message: "Invalid Credentials",
        error: "User Not Exists",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!user || !isPasswordCorrect) {
      return res.status(409).json({
        success: false,
        message: "Invalid Password",
        error: "Password is ",
      });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.SECRET_STRING
    );

    res.status(200).send({
      success: true,
      message: "Signed In Successfully",
      token: token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
});

// get all blogs
app.get("/blogs/all", authMiddleware, async (req, res) => {
  try {
    const blogs = await blogModel.find();
    res.status(200).send({
      message: "All blogs Retreived Successfully",
      blogs: blogs,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

// get the blogs of the current user
app.get("/blogs", authMiddleware, async (req, res) => {
  try {
    const blogs = await blogModel.find({ author: req.user.username });
    res.status(200).send({
      message: "All User blogs Retreived Successfully",
      blogs: blogs,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

// create blog
app.post("/createBlog", authMiddleware, async (req, res) => {
  try {
    const parsedData = blogValidator.safeParse(req.body);

    if (!parsedData.success) {
      return res.status(409).send({
        message: "Invalid Input Fields",
        error: parsedData.error.errors,
      });
    }

    const { title, content } = parsedData.data;

    const blog = await blogModel.create({
      title: title,
      content: content,
      author: req.user.username,
    });

    res.status(201).send({
      message: "Blog Created Successfully",
      createdBlog: blog,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

// update / edit a blog
app.put('/editBlog/:id', authMiddleware, async (req, res) => {
  try {
    const parsedData = blogValidator.safeParse(req.body);

    if (!parsedData.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid Input Fields",
        error: parsedData.error.errors,
      });
    }

    const { title, content } = parsedData.data;
    const blogId = req.params.id;

    // Find the blog first
    const existingBlog = await blogModel.findById(blogId);

    if (!existingBlog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
        error: "No blog exists with the provided ID",
      });
    }

    // Check if the user is the author of the blog
    if (existingBlog.author !== req.user.username) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized",
        error: "You can only edit your own blogs",
      });
    }

    // Update the blog
    const updatedBlog = await blogModel.findByIdAndUpdate(
      blogId,
      {
        title: title,
        content: content,
        updatedAt: new Date(),
      },
      { new: true } // Return the updated document
    );

    res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      blog: updatedBlog,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
});

// get a blog using id
app.get("/blog/:id", authMiddleware, async (req, res) => {
  try {
    const blog = await blogModel.findById(req.params.id);

    if (!blog) {
      return res.status(404).send({
        message: "Blog not found",
        error: "No blog exists with the provided ID",
      });
    }
    res.status(200).send({
      message: "Blog Retreived Successfully",
      blog: blog,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

// delete a blog
app.delete("/deleteBlog/:id", authMiddleware, async (req, res) => {
  try {
    const blog = await blogModel.findByIdAndDelete(req.params.id);

    res.status(410).send({
      message: "Blog Deleted Successfully",
      blog: blog,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

// get user information
app.get('/profile',authMiddleware,(req, res) =>{
  res.status(200).send({
    message :"Profile Retrieved Successfully",
    user : req.user
  })
})

// main function
function main() {
  connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

main();
