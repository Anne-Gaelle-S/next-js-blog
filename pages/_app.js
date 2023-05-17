function App({ Component, pageProps}) {
  console.log('[App] render  ', pageProps);
  return ( 
    <Component {...pageProps} />
  );
}

export default App;