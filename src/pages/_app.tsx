import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SnackbarProvider } from '../providers/snackbar';
import GlobalStyles from '../styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pokeoo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="POKEO - todo dia um pokemon novo para ser descoberto!"
        />
        <meta
          name="google-site-verification"
          content="yIo-HeruajKCLed_nQnJSwEIETTmuV9Rka3JUV5zrCA"
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
