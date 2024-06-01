import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
    <Head>
      {/* PWA primary color */}
      {/* <meta name="theme-color" content={theme.palette.primary.main} /> */}
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <meta name="emotion-insertion-point" content="" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      ></meta>

    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
  );
}
