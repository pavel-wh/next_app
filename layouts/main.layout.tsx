import React from 'react';
import Head from 'next/head';
import Nav from 'components/app/Nav';
import Container from '@material-ui/core/Container';

export default function MainLayout({ children, title = 'Next App' }) {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <title>{title} | Next Course</title>
        <meta name="description" content="app in next.js course" />
        <meta name="keywords" content="next.js" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Nav />
      <Container maxWidth={false}>{children}</Container>
      <style jsx>{``}</style>
    </React.Fragment>
  );
}
