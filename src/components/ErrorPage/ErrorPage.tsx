import { Box, Typography } from "@mui/material";
import React from "react";
import { useRouteError } from "react-router-dom";
import "./ErrorPage.scss";

const ErrorPage: React.FC = () => {
  const error: unknown = useRouteError();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <div>
        <Typography variant="h1" className="errorCode">
          404
        </Typography>
      </div>
      <div>
        <Typography variant="body1" className="error">
          Oops! PAGE NOT FOUND
        </Typography>
      </div>
    </Box>
  );
};

export default ErrorPage;
