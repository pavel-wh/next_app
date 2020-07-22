import Router from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

export default function MainLayout({ children, title = 'Next App' }) {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <title>{title} | Next Course</title>
        <meta name="description" content="app in next.js course" />
        <meta name="keywords" content="next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href={'/posts'}>
          <a>Posts</a>
        </Link>
      </nav>
      <main>{children}</main>
      <style jsx>{`
        nav {
          position: fixed;
          height: 60px;
          left: 0;
          top: 0;
          right: 0;
          background: darkblue;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        nav a {
          padding: 25px;
          color: #fff;
        }
        main {
          padding-top: 60px;
        }
      `}</style>
    </React.Fragment>
  );
}
