// Prod mode : SSG (static side generation HTML + JSON, uses getStaticProps)
import Head from 'next/head';
import { getPost } from '../../lib/posts';

// Dev mode : SSR
// Prod mode : pre-render by server (nodejs) and serve a json file for CSR
export async function getStaticProps() {
  const post = await getPost('first-post');
  return {
    props: { post },
  };
}

// Dev mode : SSR & CSR
// Prod mode : CSR
function FirstPostPage({post}) {
  return (
    <>
      <Head>
        <title>{`${post.title} - AG's blog`}</title>
      </Head>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}

export default FirstPostPage;