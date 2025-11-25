import { userRepository } from "../repositories/user.repository";

export const userService = {
  getUsers: () => {
    return userRepository.getAll();
  },

  getUser: (id: string) => {
    const user = userRepository.getById(id);
    if (!user) return { success: false, error: "User not found" };
    return { success: true, data: user };
  },

  createUser: (
    id: string,
    username: string,
    email: string,
    name: string,
    age: number
  ) => {
    if (!id || !username || !email || !name) {
      return { success: false, error: "All fields are required" };
    }

    if (userRepository.getById(id))
      return { success: false, error: "User ID already exists" };

    const newUser = { id, username, email, name, age };
    const created = userRepository.create(newUser);
    return { success: true, data: created };
  },

  deleteUser: (id: string) => {
    const deleted = userRepository.delete(id);
    if (!deleted) return { success: false, error: "User not found" };
    return { success: true };
  },

  updateUser: (
    id: string,
    username: string,
    email: string,
    name: string,
    age: number
  ) => {
    const user = userRepository.getById(id);
    if (!user) {
      return { success: false, error: "User not found" };
    }

    const updatedUser = userRepository.update(id, {
      username,
      id,
      email,
      name,
      age,
    });
    return { success: true, data: updatedUser };
  },
};
