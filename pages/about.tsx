import Link from 'next/link';
import MainLayout from 'layouts/main.layout';
import { AboutType } from 'interfaces/about';
import Button from '@material-ui/core/Button';

export default function About({ title }: AboutType) {
  return (
    <MainLayout title={title}>
      <h1>About page</h1>
      <Link href="/">
        <Button variant="contained" color="primary">
          Go back to home
        </Button>
      </Link>
    </MainLayout>
  );
}

About.getInitialProps = async () => {
  const responnse = await fetch(`${process.env.API_URL}/about`);
  const data = await responnse.json();

  return {
    title: data.title,
  };
};
