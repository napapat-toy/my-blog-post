import PostForm from "../../components/PostForm";
import PostList from "../../components/PostList";

const Home = async () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full h-full flex flex-col-reverse lg:flex-row items-center justify-center my-12 gap-8 lg:gap-24">
        <PostList />
        <PostForm />
      </div>
    </div>
  );
};

export default Home;
