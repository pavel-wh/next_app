import Link from 'next/link';
import MainLayout from 'layouts/main.layout';
export default function About({ title }) {
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
