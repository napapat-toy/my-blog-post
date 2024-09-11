import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface PostCardProps {
  title: string;
  description?: string;
  author: string;
  postId: string;
}

const PostCard = ({ title, description, author, postId }: PostCardProps) => {
  return (
    <Link href={`/post/${postId}`}>
      <Card className="w-[250px] h-full max-h-[200px] drop-shadow-sm hover:drop-shadow-lg transition cursor-pointer">
        <CardHeader>
          <CardTitle className="truncate">{title}</CardTitle>
          <CardDescription className="truncate">{description}</CardDescription>
        </CardHeader>
        <CardFooter className="items-end">
          <p className="text-slate-600">
            By <span className="truncate">{author}</span>
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default PostCard;
