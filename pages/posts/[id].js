import Link from 'next/link';
import { useRouter } from 'next/router';
import MainLayout from 'layouts/main.layout.js';

export default function Post({ post }) {
  const router = useRouter();
  return (
    <MainLayout title={'Post #' + router.query.id}>
      <h1>
        Post #{post.id}: {post.title}
      </h1>
      <p>{post.body}</p>
      <Link href={`/posts/`}>
        <a>Back to posts</a>
      </Link>
    </MainLayout>
  );
}

Post.getInitialProps = async (ctx) => {
  const response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`);
  const post = await response.json();
  return {
    post,
  };
};
