import Link from 'next/link';
export default function About() {
  return (
    <>
      <h1>About page</h1>
      <Link href="/">
        <button>Go back to home</button>
      </Link>
    </>
  );
}
