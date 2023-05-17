// Prod mode : SSG (static side generation HTML + JSON, uses getStaticProps)
import { readFile } from 'fs/promises';
import Head from 'next/head';

// Dev mode : SSR
// Prod mode : pre-render by server (nodejs) and serve a json file for CSR
export async function getStaticProps() {
  const jsonContent = await readFile('content/posts/first-post.json', 'utf8');
  const post = JSON.parse(jsonContent);
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
        <title>{post.title} - AG's blog</title>
      </Head>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}

export default FirstPostPage;