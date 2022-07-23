import Head from "next/head";
import { FC } from "react";

const MyIndex: FC = () => {
  return (
    <>
      <Head>
        <title>「コトミ」大和言葉を並べ立て、結び付け、描き出す</title>
      </Head>
      <>
        <h1 className="maintitle">言泉</h1>
      </>
      <style jsx>{`
        .maintitle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          writing-mode: vertical-lr;
          margin: 0;
        }
      `}</style>
    </>
  );
};

export default MyIndex;
