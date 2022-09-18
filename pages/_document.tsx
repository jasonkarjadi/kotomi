import { Head, Html, Main, NextScript } from "next/document";
import { FC } from "react";

const MyDocument: FC = () => {
  return (
    <Html lang="jp">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
