import { Global, ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";
import { globalStyles } from "@styles/global";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
    </ThemeProvider>
  );
};

export default App;
