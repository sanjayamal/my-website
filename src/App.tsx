import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { Layout } from "./layout";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
};

export default App;
