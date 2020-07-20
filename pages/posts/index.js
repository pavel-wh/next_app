import Router from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

export default function Posts() {
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
    </React.Fragment>
  );
}
