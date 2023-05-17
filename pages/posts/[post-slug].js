// Prod mode : SSG (static side generation HTML + JSON, uses getStaticProps)
import Head from 'next/head';
import { getPost, getSlugs } from '../../lib/posts';

// Check if given slug match a valid paths for this route
export async function getStaticPaths() {
  const allPostSlugs = await getSlugs();
  return {
    paths: allPostSlugs.map((slug) => ({ params: { 'post-slug': slug }})),
    // dynamic route results in static HTML files being generated because of this fallback :
    fallback: false, // if none paths above matches the request URL we will show 404 Not Found page
  };
}

// Dev mode : SSR
// Prod mode : pre-render by server (nodejs) and serve a json file for CSR
export async function getStaticProps(context) {
  console.log({context});
  const post = await getPost(context.params['post-slug']);
  return {
    props: { post },
  };
}

// Dev mode : SSR & CSR
// Prod mode : CSR
function PostPage({post}) {
  return (
    <>
      <Head>
        <title>{`${post.title} - AG's blog`}</title>
      </Head>
      <main>
        <p>{post.date}</p>
        <h1>{post.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </>
  );
}

export default PostPage;