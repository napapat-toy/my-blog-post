import React from "react";
import PostCard from "./PostCard";
import { getPosts } from "@/lib/actions/appwrite.action";
import { Post } from "@/types/appwrite";

const PostList = async () => {
  const posts = await getPosts();

  console.log(posts);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.documents.length > 0
        ? posts?.documents?.map(({ $id, author, title, description }:Post) => (
            <PostCard
              key={$id}
              author={author}
              title={title}
              description={description}
              postId={$id}
            />
          ))
        : (
          <div className="">
            <h2 className="">No posts</h2>
          </div>
        )}
    </div>
  );
};

export default PostList;
