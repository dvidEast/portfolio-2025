import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Load the Google Analytics library */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZB8Q1K7YLG"></script>
        {/* Initialize GA using dangerouslySetInnerHTML */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZB8Q1K7YLG', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
