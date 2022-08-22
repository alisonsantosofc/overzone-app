import { AppProps } from "../../node_modules/next/app";
import { Header } from "../components/Header";

import '../sass/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
