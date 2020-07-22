import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MainLayout from 'layouts/main.layout.js';

export default function Post({ post: serverPost }) {
  /* При комбинировании фронтенда и бэкенда */
  // const router = useRouter();
  // const [post, setPost] = useState(serverPost);

  // useEffect(() => {
  //   async function load() {
  //     const response = await fetch(
  //       `http://localhost:4200/posts/${router.query.id}`
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
//   const response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`);
//   const post = await response.json();
//   return {
//     post,
//   };
// };

/* При киспользовании запросов только на бэкенде */
export async function getServerSideProps(ctx) {
  const response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`);
  const post = await response.json();
  return {
    props: {
      post,
    },
  };
}
