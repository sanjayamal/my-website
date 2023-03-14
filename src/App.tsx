import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div></div>
    </ThemeProvider>
  );
};

export default App;
