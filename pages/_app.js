import Head from 'next/head';
import NavBar from "../components/NavBar";

function App({ Component, pageProps}) {
  return (
    <>
      <Head>
        <title>AG's blog</title>
        <meta name="description" value="This is my blog" />
      </Head>
      <header>
        <NavBar />
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default App;