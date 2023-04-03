import React from "react";
import "./PageTitle.scss";
import { Box } from "@mui/material";

interface IPageTitle {
  title: string;
}
const PageTitle: React.FC<IPageTitle> = ({ title }) => {
  return (
    <Box className="page-title-container">
      <Box className="box-title">
        <h2 className="title"> {title}</h2>
      </Box>
    </Box>
  );
};

export default PageTitle;
