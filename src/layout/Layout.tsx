import React from "react";
import { Box, Stack } from "@mui/material";
import { SideBar } from "./SideBar";
import { Outlet } from "react-router-dom";

const Layout: React.FC<any> = () => {
  return (
    <Box>
      <Stack direction="row">
        <Box sx={{ backgroundColor: "lightblue", flex: "95%", padding: "2px" }}>
          <Outlet />
        </Box>
        <SideBar />
      </Stack>
    </Box>
  );
};

export default Layout;
