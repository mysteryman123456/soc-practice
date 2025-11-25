import { z } from "zod/v3";

export const userSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
  name: z.string().min(3, "Name is required"),
  email: z.string().email("Invalid email address"),
  id: z.string().trim().min(1, "User id is required"),
  age: z.number().int().positive("Age must be a positive integer"),
});

export type User = z.infer<typeof userSchema>;
