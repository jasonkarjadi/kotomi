import Head from "next/head";
import { FC } from "react";

const FuminoMoto: FC = () => {
  return (
    <>
      <Head>
        <title>「コトミ」文の素</title>
      </Head>
      <>
        <ul>
          <li>名詞</li>
          <li>代名詞</li>
          <li>動詞</li>
          <li>形容詞</li>
          <li>形容動詞</li>
          <li>副詞</li>
          <li>連体詞</li>
          <li>接続詞</li>
          <li>感動詞</li>
          <li>助詞</li>
          <li>助動詞</li>
        </ul>
      </>
      <style jsx>{`
        * {
          font-family: Zen Antique, serif;
        }
      `}</style>
    </>
  );
};

export default FuminoMoto;
