import { config } from "@fortawesome/fontawesome-svg-core";
import { AppProps } from "next/app";
import MyLayout from "../components/Layout";
import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <MyLayout>
      <Component {...pageProps} />
    </MyLayout>
  );
};

export default MyApp;
