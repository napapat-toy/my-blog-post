interface PostProps {
  id: string;
  username: string;
  title: string;
  description?: string;
}

interface PostParams {
  userId: string;
  title: string;
  description?: string;
}

interface CreateUserParams {
  username: string;
  name: string;
  password: string;
}
