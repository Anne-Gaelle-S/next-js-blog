// Prod mode : static HTML
import Head from 'next/head';
import Link from 'next/link';

function HomePage() {
  return (
    <>
      <Head>
        <title>AG's blog</title>
      </Head>
      <main>
        <h1>AG's blog</h1>
        <ul>
          <li>
            <Link href="/posts/first-post">First Post</Link>
          </li>
        </ul>
      </main>
    </>
  );
}

export default HomePage;
