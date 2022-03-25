import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SnackbarProvider } from '../providers/snackbar';
import GlobalStyles from '../styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pokeo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="POKEO - todo dia um pokemon novo para ser descoberto!"
        />
        <meta
          name="google-site-verification"
          content="W-bNLQy9k5gAx3gOGL3wlz3bT45LM9Q5FGj5luv3TqA"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <SnackbarProvider>
        <Component {...pageProps} />
      </SnackbarProvider>
    </>
  );
}

export default App;
