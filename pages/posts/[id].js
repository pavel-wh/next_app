import { useRouter } from 'next/router';
import MainLayout from 'layouts/main.layout.js';

export default function Post() {
  const router = useRouter();
  return (
    <MainLayout title={'Post #' + router.query.id}>
      <h1>Post Page {router.query.id}</h1>
    </MainLayout>
  );
}
