import { AppProps } from "next/app";
import MyLayout from "../components/Layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <MyLayout>
      <Component {...pageProps} />
    </MyLayout>
  );
};

export default MyApp;
