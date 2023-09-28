import Head from "next/head";
import "../styles/globals.css";
import { Abril_Fatface } from "@next/font/google";
import Script from "next/script";
// import GoogleAnalytics from "@bradgarropy/next-google-analytics";
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


 {/* Google tag (gtag.js)  */}

{/* <GoogleAnalytics measurementId="UA-286963877-1"/> */}
 <Script 
      strategy="afterInteractive" 
      src="https://www.googletagmanager.com/gtag/js?id=UA-286963877-1"
 />
  
  <Script id="google-analytics" strategy="afterInteractive">
       {`
       window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
       `} 

      
  </Script>


    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
