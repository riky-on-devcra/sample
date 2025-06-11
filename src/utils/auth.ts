import bcrypt from "bcryptjs";

export const saltAndHashPassword = async (password: string, hashed: string) => {
  return await bcrypt.compare(password, hashed);
};
