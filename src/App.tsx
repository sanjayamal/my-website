import React, { Suspense } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { CircularProgress } from "@mui/material";

const App: React.FC = () => {
  return (
    //TODO add nice Loading
    <Suspense fallback={<CircularProgress />}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
