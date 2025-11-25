import { User } from "../dtos/user.dto";

let users: User[] = [
  {
    id: "user1",
    username: "john_doe",
    email: "john@example.com",
    name: "John Doe",
    age: 30,
  },
  {
    id: "user2",
    username: "jane_smith",
    email: "jane@example.com",
    name: "Jane Smith",
    age: 25,
  },
];

export const userRepository = {
  getAll: () => users,

  getById: (id: string) => users.find((u) => u.id === id),

  create: (user: User) => {
    users.push(user);
    return user;
  },

  delete: (id: string) => {
    const index = users.findIndex((u) => u.id === id);
    if (index !== -1) users.splice(index, 1);
    return index !== -1;
  },

  update: (id: string, updatedUser: User) => {
    const index = users.findIndex((u) => u.id === id);
    if (index === -1) return null;

    users[index] = { ...users[index], ...updatedUser };
    return users[index];
  },
};
