import Head from "next/head";
import Link from "next/link";
import { FC } from "react";

const MyAbout: FC = () => {
  return (
    <>
      <Head>
        <title>「コトミ」大和言葉を並べ立て、結び付け、描き出す</title>
      </Head>
      <>
        <p>
          This site uses the JMdict/EDICT and KANJIDIC dictionary files. These
          files are the property of the{" "}
          <Link href="http://www.edrdg.org/">
            Electronic Dictionary Research and Development Group
          </Link>
          , and are used in conformance with the Group&apos;s{" "}
          <Link href="http://www.edrdg.org/edrdg/licence.html">licence</Link>.
        </p>
      </>
      <style jsx>{``}</style>
    </>
  );
};

export default MyAbout;
