import { useState, useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

export default function Posts({ posts }) {
  const clickHandler = () => {
    Router.push('/about');
  };
  return (
    <React.Fragment>
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
                query: ``,
              }}
              as={`/posts/${post.id}`}
            >
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

Posts.getInitialProps = async (ctx) => {
  const response = await fetch('http://localhost:4200/posts');
  const posts = await response.json();
  return {
    posts,
  };
};
