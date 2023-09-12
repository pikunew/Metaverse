import Head from "next/head";
import "../styles/globals.css";
import { Abril_Fatface } from "@next/font/google";


const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Mahilabol</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
