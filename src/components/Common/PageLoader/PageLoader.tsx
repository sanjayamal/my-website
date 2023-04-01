import { Box } from "@mui/material";
import React from "react";
import CircleLoader from "react-spinners/CircleLoader";

const PageLoader: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 47px)",
      }}
    >
      <CircleLoader
        color={"#ffcc00"}
        loading={true}
        size={150}
        aria-label="Loading Spinner"
      />
    </Box>
  );
};

export default PageLoader;
