import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>DAVID LIM</title>
        <meta name="description" content="Personal website of David Lim" />
        <link rel="icon" href="/DL.ico" />

        <meta property="og:image" content="/david_lim_image.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
