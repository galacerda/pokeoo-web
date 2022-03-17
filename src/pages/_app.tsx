import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SnackbarProvider } from '../providers/snackbar';
import GlobalStyles from '../styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pokeoo</title>
      </Head>
      <GlobalStyles />
      <SnackbarProvider>
        <Component {...pageProps} />
      </SnackbarProvider>
    </>
  );
}

export default App;
