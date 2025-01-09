import { Global, ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";
import { css } from "@emotion/react";
import { globalStyles } from "./styles/global";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <p
        css={css`
          background-color: ${theme.color.feedback.negative};
          padding: 20px;
          ${theme.font.display4};
        `}
      >
        hello world!
      </p>
    </ThemeProvider>
  );
};

export default App;
