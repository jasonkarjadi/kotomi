import Head from "next/head";
import { FC } from "react";

const EdaWakare: FC = () => {
  return (
    <>
      <Head>
        <title>「コトミ」枝分かれ</title>
      </Head>
      <style jsx>{`
        .kanarow {
          display: flex;
          flex-direction: row-reverse;
          justify-content: space-between;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          padding: 0.5rem;
        }
        .rowbtn {
          border: none;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 0.5rem;
          flex: 1;
          height: 2rem;
          width: 2rem;
        }
        .rowbtn + .rowbtn {
          margin-right: 0.5rem;
        }
        .rowbtn:hover {
          background: rgba(255, 255, 255, 0.6);
        }
      `}</style>
    </>
  );
};

export default EdaWakare;
