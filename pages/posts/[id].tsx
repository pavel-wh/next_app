import { useState, useEffect } from 'react';
import Link from 'next/link';
import LinkMaterial from '@material-ui/core/Link';
import { useRouter } from 'next/router';
import MainLayout from 'layouts/main.layout';
import { MyPost } from 'interfaces/post';
import { NextPageContext } from 'next';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';

interface PostPageProps {
  post: MyPost;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    breadcrumbs: {
      paddingTop: 20,
    },
  })
);

export default function Post({ post /*post: serverPost*/ }: PostPageProps) {
  const classes = useStyles();
  const router = useRouter();
  /* При комбинировании фронтенда и бэкенда */
  // const [post, setPost] = useState(serverPost);

  // useEffect(() => {
  //   async function load() {
  //     const response = await fetch(
  //       `${process.env.API_URL}/posts/${router.query.id}`
  //     );
  //     const data = await response.json();
  //     setPost(data);
  //   }
  //   if (!serverPost) {
  //     load();
  //   }
  // }, []);

  // if (!post) {
  //   return (
  //     <MainLayout>
  //       <p>Loading...</p>
  //     </MainLayout>
  //   );
  // }

  return (
    <MainLayout title={'Post #' + router.query.id}>
      <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
        <Link href="/">
          <LinkMaterial href="/" color="inherit">
            Home
          </LinkMaterial>
        </Link>
        <Link href="/posts">
          <LinkMaterial href="/posts" color="inherit">
            Posts
          </LinkMaterial>
        </Link>
        <Typography color="textPrimary">{post.title}</Typography>
      </Breadcrumbs>
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

/* При комбинировании фронтенда и бэкенда */
// Post.getInitialProps = async (ctx) => {
//   if (!ctx.req) {
//     return {
//       post: null,
//     };
//   }
//   const response = await fetch(`${process.env.API_URL}/posts/${ctx.query.id}`);
//   const post = await response.json();
//   return {
//     post,
//   };
// };

interface PostNextPageContext extends NextPageContext {
  query: {
    id: string;
  };
}

/* При киспользовании запросов только на бэкенде */
export async function getServerSideProps(ctx: PostNextPageContext) {
  const response = await fetch(`${process.env.API_URL}/posts/${ctx.query.id}`);
  const post: MyPost = await response.json();
  return {
    props: {
      post,
    },
  };
}
