"use server";

import { revalidatePath } from "next/cache";
import { Posts } from "./data";
import { v4 as uuidv4 } from "uuid";

const clonePosts = [...Posts];

export const getPosts = async () => {
  try {
    return clonePosts;
  } catch (error) {
    console.log(error);
  }
};

export const getPostById = async (id: string) => {
  try {
    const post = await clonePosts.filter((post) => post.id === id);

    return post[0];
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async ({
  title,
  username,
  description,
}: {
  title: string;
  username: string;
  description: string;
}) => {
  try {
    const id = uuidv4();
    const newPost = {
      id,
      title,
      description,
      username,
    };

    clonePosts.push(newPost);
    console.log(clonePosts);

    revalidatePath("/");
    return clonePosts;
  } catch (error) {
    console.log(error);
  }
};
