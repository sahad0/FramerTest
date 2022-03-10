import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap//
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return <>
  <Head>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital@1&display=swap" /> 
  </Head>
  <Component {...pageProps} />
  
  </>
}

export default MyApp
