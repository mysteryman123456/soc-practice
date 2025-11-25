import type { Request, Response } from "express";
import { userService } from "../services/user.services";
import { User, userSchema } from "../dtos/user.dto";

export const userController = {
  getUsers: (req: Request, res: Response) => {
    return res.json({ data: userService.getUsers() });
  },
  getUserById: (req: Request, res: Response) => {
    const userId = req.params.id;
    const response = userService.getUser(userId);
    if (response?.success) return res.json({ data: response.data });
    return res.json({ error: response?.error });
  },
  deleteUserById: (req: Request, res: Response) => {
    const userId = req.params.id;
    const response = userService.deleteUser(userId);
    if (response) return res.json({ message: "User deleted successfully" });
    return res.json({ error: "Failed to delete" });
  },
  updateUser: (req: Request, res: Response) => {
    return res.json();
  },
  postUser: (req: Request, res: Response) => {
    const data = req.body as User;
    if (!userSchema.safeParse(data).success)
      return res.json({ error: "Failed to validate data" });
    const response = userService.createUser(
      data.id,
      data.username,
      data.name,
      data.email,
      data.age
    );
    if (response?.success) return res.json({ data: response.data });
    return res.json({ error: response?.error });
  },
};
