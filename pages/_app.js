import Head from 'next/head';
import NavBar from "../components/NavBar";
import '../styles/global.css';

function App({ Component, pageProps}) {
  return (
    <>
      <Head>
        <title>AG's blog</title>
        <meta name="description" value="This is my blog" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <header>
        <NavBar />
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default App;