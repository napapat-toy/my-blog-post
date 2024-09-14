import sdk from "node-appwrite";

const client = new sdk.Client();

export const {
  API_KEY,
  APPWRITE_ENDPOINT,
  PROJECT_ID,
  BLOG_POST_DATABASE_ID,
  USERS_COLLECTION_ID,
  POSTS_COLLECTION_ID,
} = process.env;

client.setEndpoint(APPWRITE_ENDPOINT!).setProject(PROJECT_ID!).setKey(API_KEY!);

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
