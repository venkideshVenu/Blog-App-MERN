import { z } from "zod";

const signUpBodySchema = z.object({
  email: z.string().email(),
  username: z.string().min(1, "Username is required").max(20),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters"),
});

const signInBodySchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters"),
});

const blogValidator = z.object({
  title: z.string(),
  content: z.string(),
});

export { signUpBodySchema, signInBodySchema, blogValidator };
