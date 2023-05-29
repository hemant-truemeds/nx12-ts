import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import "src/styles/global.css";
import store from "@redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
