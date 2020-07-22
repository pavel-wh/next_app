import Link from 'next/link';
import MainLayout from 'layouts/main.layout';
import { AboutType } from 'interfaces/about';

export default function About({ title }: AboutType) {
  return (
    <MainLayout title={title}>
      <h1>{title}</h1>
      <Link href="/">
        <button>Go back to home</button>
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
