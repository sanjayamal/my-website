import React, { Suspense } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { PageLoader } from "./components/Common";

const App: React.FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
