export * from "./common";

import { ThemeProvider } from "styled-components";

export const StyledThemeProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const theme = {
    colors: {
      powderWhite: "#FFFDF9",
      persianGreen: "#06B49A",
      lightBlue: "#AFDBD2",
      onyx: "red",
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
      small: "1em",
      medium: "2em",
      large: "3em",
    },
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
