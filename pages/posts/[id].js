import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();
  return (
    <React.Fragment>
      <h1>Post Page {router.query.id}</h1>
    </React.Fragment>
  );
}
