import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

const GA_ID = "G-ZB8Q1K7YLG";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window.gtag !== "undefined") {
        window.gtag("config", GA_ID, {
          page_path: url,
        });
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
