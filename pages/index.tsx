import Head from 'next/head';
import Link from 'next/link';
import MainLayout from 'layouts/main.layout';

export default function Index() {
  return (
    <MainLayout>
      <h1 className="title">Welcome to Next.js!</h1>

      <style jsx>{``}</style>

      <style jsx global>{``}</style>
    </MainLayout>
  );
}
