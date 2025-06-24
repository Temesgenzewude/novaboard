export type User = {
  id: string;
  username: string;
  email: string;
  location: string;
  phone: string;
  role: "Admin" | "User";
  image: string;
  firstName: string;
  lastName: string;
};
