import React from "react";
import PostCard from "./PostCard";
import { getPosts } from "@/lib/post.action";

const PostList = async () => {
  const posts = await getPosts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts?.map(({ id, username, title, description }) => (
        <PostCard
          key={id}
          author={username}
          title={title}
          description={description}
          postId={id}
        />
      ))}
    </div>
  );
};

export default PostList;
