import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>DAVID LIM</title>
        <meta name="description" content="Your website description" />
        <link rel="icon" href="/DL.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
