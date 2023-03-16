import { Box, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { RouteConfigs } from "./routesConfig";

const SideBar: React.FC = () => {
  return (
    <Box sx={{ flex: "5%", padding: "2px" }}>
      <Stack spacing={2}>
        {RouteConfigs.map(({ path, icon, key }) => (
          <div key={key}>
            <Link to={path}>{icon}</Link>
          </div>
        ))}
      </Stack>
    </Box>
  );
};

export default SideBar;
