import Link from 'next/link';
import classes from 'assets/scss/error.module.scss';
import MainLayout from 'layouts/main.layout';

export default function ErrorPage() {
  return (
    <MainLayout>
      <h1 className={classes.error}>Error 404</h1>
      <p>
        Please{' '}
        <Link href="/">
          <a>go home</a>
        </Link>{' '}
        to safety
      </p>
    </MainLayout>
  );
}
