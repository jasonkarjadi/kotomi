import { Head, Html, Main, NextScript } from "next/document";
import { FC } from "react";

const MyDocument: FC = () => {
  return (
    <Html lang="jp">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
