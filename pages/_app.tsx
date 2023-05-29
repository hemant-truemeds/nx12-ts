import { Provider } from "react-redux";
import { StyledThemeProvider } from "@styles/theme";
import type { AppProps } from "next/app";
import store from "@redux/store";
import GlobalStyle from "@styles/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledThemeProvider>
      <Provider store={store}>
        <GlobalStyle />
        <Component {...pageProps} />;
      </Provider>
    </StyledThemeProvider>
  );
}

export default MyApp;
