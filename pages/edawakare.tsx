import Head from "next/head";
import { FC } from "react";

const EdaWakare: FC = () => {
  const hiraganaRow =
    "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん";
  const katakanaRow =
    "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン";
  // may need to seperate kanarow rowbtn to be FC // 赤　金　目　心　手　見　女　戸　事言　日火　神上　所　子　人　一　二　取　切　固　水　木
  return (
    <>
      <Head>
        <title>「コトミ」枝分かれ</title>
      </Head>
      <>
        <div className="kanarow">
          {(true ? hiraganaRow : katakanaRow).split("").map((val, idx) => (
            <button key={idx} className="rowbtn">
              {val}
            </button>
          ))}
        </div>
      </>
      <style jsx>{`
        .kanarow {
          display: flex;
          flex-direction: row-reverse;
          justify-content: space-between;
          position: absolute;
          bottom: 10px;
          left: 0;
          padding: 0 10px;
        }
        .rowbtn {
          border: none;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 5px;
          flex: 1;
        }
        .rowbtn + .rowbtn {
          margin-right: 5px;
        }
        .rowbtn:hover {
          background: rgba(255, 255, 255, 0.6);
        }
      `}</style>
    </>
  );
};

export default EdaWakare;
