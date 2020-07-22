import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MainLayout from 'layouts/main.layout';
import { MyPost } from 'interfaces/post';
import { NextPageContext } from 'next';

interface PostPageProps {
  post: MyPost;
}

export default function Post({ post /*post: serverPost*/ }: PostPageProps) {
  /* При комбинировании фронтенда и бэкенда */
  const router = useRouter();
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
  ctx.query.id;
  const post: MyPost = await response.json();
  return {
    props: {
      post,
    },
  };
}
