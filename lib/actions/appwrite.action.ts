"use server";

import { ID } from "node-appwrite";
import {
  BLOG_POST_DATABASE_ID,
  databases,
  POSTS_COLLECTION_ID,
} from "../appwrite.config";
import { parseStringify } from "../utils";
import { revalidatePath } from "next/cache";

export const getPosts = async () => {
  try {
    const posts = await databases.listDocuments(
      BLOG_POST_DATABASE_ID!,
      POSTS_COLLECTION_ID!
    );

    // console.log(posts);

    return parseStringify(posts);
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (post: PostParams) => {
  try {
    const newPost = await databases.createDocument(
      BLOG_POST_DATABASE_ID!,
      POSTS_COLLECTION_ID!,
      ID.unique(),
      post
    );

    console.log(newPost);

    revalidatePath("/");

    return parseStringify(newPost);
  } catch (error) {
    console.log(error);
  }
};
