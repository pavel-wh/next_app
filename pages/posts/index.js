import Router from 'next/router';

export default function Posts() {
  const clickHandler = () => {
    Router.push('/about');
  };
  return (
    <React.Fragment>
      <h1>Posts Page!</h1>
      <button onClick={clickHandler}>Go to About page</button>
      <button onClick={() => Router.push('/posts/1')}>
        Go to Post #1 page
      </button>
    </React.Fragment>
  );
}
