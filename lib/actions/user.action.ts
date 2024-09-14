import { ID } from "node-appwrite";
import { users } from "../appwrite.config";
import { parseStringify } from "../utils";
// import bcrypt from "bcrypt";

export const createUser = async (user: CreateUserParams) => {
  try {
    // const saltRounds = 10;

    // const hashedPassword = await bcrypt.hash(user.password, saltRounds);

    const newUser = await users.create(
      ID.unique(),
      user.username,
      undefined,
      undefined,
    //   hashedPassword,
      user.name
    );

    return parseStringify(newUser);
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (userId: string) => {
  try {
    const user = await users.get(userId);

    return parseStringify(user);
  } catch (error) {
    console.log(error);
  }
};
