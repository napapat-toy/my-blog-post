import { getPostById } from "@/lib/post.action";
import React from "react";

const PostPage = async ({ params: { id } }: { params: { id: string } }) => {
  const post = await getPostById(id);

  return (
    <div className="w-full h-screen flex items-center justify-center drop-shadow-xl">
      <div className="w-[600px] h-fit bg-white rounded-md p-6">
        <div className="h-full w-full flex flex-col ">
          <h2 className="font-semibold text-3xl">{post?.title}</h2>
          <p className="text-xl mt-6">{post?.description}</p>
          <p className="text-slate-500 self-end justify-self-end">
            By {post?.username}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
