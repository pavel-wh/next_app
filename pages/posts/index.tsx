import { useState, useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import MainLayout from 'layouts/main.layout';
import { MyPost } from 'interfaces/post';
import { NextPageContext } from 'next';

interface PostsPageProps {
  posts: MyPost[];
}

export default function Posts({ posts: serverPosts }: PostsPageProps) {
  const [posts, setPosts] = useState(serverPosts);

  useEffect(() => {
    async function load() {
      const response = await fetch(`${process.env.API_URL}/posts`);
      const data = await response.json();
      setPosts(data);
    }
    if (!serverPosts) {
      load();
    }
  }, []);

  if (!posts) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }

  const clickHandler = () => {
    Router.push('/about');
  };
  return (
    <MainLayout>
      <h1>Posts Page!</h1>
      <button onClick={clickHandler}>Go to About page</button>
      <button onClick={() => Router.push('/posts/1')}>
        Go to Post #1 page
      </button>
      <Link href="/posts/1">
        <button>Go to Post #1 page</button>
      </Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              href={{
                pathname: `/posts/[id]`,
              }}
              as={`/posts/${post.id}`}
            >
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
}

Posts.getInitialProps = async (ctx: NextPageContext) => {
  if (!ctx.req) {
    return {
      posts: null,
    };
  }
  const response = await fetch(`${process.env.API_URL}/posts`);
  const posts: MyPost[] = await response.json();
  return {
    posts,
  };
};
