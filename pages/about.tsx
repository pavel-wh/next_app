import Link from 'next/link';
import MainLayout from 'layouts/main.layout';
import { About } from 'interfaces/about';

export default function About({ title }: About) {
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
  const responnse = await fetch('http://localhost:4200/about');
  const data = await responnse.json();

  return {
    title: data.title,
  };
};
