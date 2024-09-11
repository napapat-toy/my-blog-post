import PostForm from "../../components/PostForm";
import PostList from "../../components/PostList";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-center my-12 gap-8 lg:gap-24">
        <PostList />
        <PostForm />
      </div>
    </div>
  );
}
