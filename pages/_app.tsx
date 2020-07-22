import NextNprogress from 'nextjs-progressbar';
import 'assets/scss/main.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        options={{
          color: '#29D',
          startPosition: 0.3,
          height: 3,
          easing: 'ease',
          speed: 500,
        }}
      />
      <Component {...pageProps} />
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Roboto', sans-serif;
        }
      `}</style>
    </>
  );
}
