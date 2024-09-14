import { Models } from "node-appwrite";

interface Post extends Models.Document {
  userId: string;
  title: string;
  description: string;
  author: string;
}
