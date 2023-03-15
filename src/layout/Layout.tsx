import React from "react";
import { Box, Stack } from "@mui/material";
import { SideBar } from "./SideBar";

const Layout: React.FC = () => {
  return (
    <Box>
      <Stack direction="row">
        <Box sx={{ backgroundColor: "lightblue", flex: "95%", padding: "2px" }}>
          Layout
        </Box>
        <SideBar />
      </Stack>
    </Box>
  );
};

export default Layout;
