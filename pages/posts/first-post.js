import Head from 'next/head';

export async function getStaticProps() {
  return {
    props: {
      post: {
        title: "First Post",
        body: "My first post, as static props",
      },
    },
  };
}

function FirstPostPage({post}) {
  return (
    <>
      <Head>
        <title>{post.title} - AG's blog</title>
      </Head>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}

export default FirstPostPage;