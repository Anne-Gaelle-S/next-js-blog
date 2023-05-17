// Prod mode : static HTML
import Head from 'next/head';
import Link from 'next/link';
import { getPostNamesAndTitles } from '../lib/posts';

export async function getStaticProps(context) {
  const posts = await getPostNamesAndTitles();
  return {
    props: { posts },
  };
}

function HomePage({posts}) {
  return (
    <>
      <Head>
        <title>AG's blog</title>
      </Head>
      <main>
        <h1>AG's blog</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default HomePage;
