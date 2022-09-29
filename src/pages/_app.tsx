import {SessionProvider, useSession} from 'next-auth/react';
import {AppProps} from '../../node_modules/next/app';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Header} from '../components/Header';
import {LoadingProvider} from '../hooks/useLoading';

import '../sass/global.scss';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <LoadingProvider>
          <Header />
          <ToastContainer autoClose={5000} toastClassName="toast-container" />
          <Component {...pageProps} />
        </LoadingProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
