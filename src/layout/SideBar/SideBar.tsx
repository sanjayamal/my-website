import React, { useState } from "react";
import {
  Box,
  IconButton,
  List,
  ListItemText,
  Stack,
  ListItemButton,
  styled,
} from "@mui/material";
import { RouteConfigs, IRouteConfigs } from "./routesConfig";
import { useLocation, useNavigate } from "react-router-dom";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import "./SideBar.scss";
import { BarItem } from "../../constants";

const SideBar: React.FC = () => {
  const navigation = useNavigate();
  let location = useLocation();
  const [isSunny, setIsSunny] = useState<boolean>(true);
  console.log(location);

  const $ListItemButton = styled(ListItemButton)(() => ({
    borderRadius: "50px",
    justifyContent: "flex-end",
    marginBottom: "20px",
    height: "40px",
    "&:hover": {
      backgroundColor: "#ffcc00",
      color: "white",
    },
    "&:hover .list-item-text": {
      display: "block",
    },
    "&.Mui-selected": {
      backgroundColor: "#ffcc00",
      color: "white",
    },
    "&.Mui-selected .list-item-text": {
      display: "block",
    },
  }));

  const handleClick = (path: string) => {
    navigation(path);
  };

  const getSelectedListItem = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    } else {
      return location.pathname.toLowerCase() === path.toLowerCase();
    }
  };
  function generateList(items: Array<IRouteConfigs>) {
    return (
      <List sx={{ mt: 4 }}>
        {items.map(({ key, name, icon, path }: IRouteConfigs) => (
          <$ListItemButton
            key={key}
            onClick={() => handleClick(path)}
            selected={getSelectedListItem(path)}
          >
            <ListItemText primary={name} className="list-item-text" />
            {icon}
          </$ListItemButton>
        ))}
      </List>
    );
  }
  return (
    <Box
      sx={{
        flex: "5%",
        padding: "2px",
        minWidth: "130px",
      }}
    >
      <Stack
        spacing={10}
        sx={{
          marginRight: "10px",
          alignItems: "flex-end",
        }}
      >
        <Box>
          {isSunny && (
            <IconButton
              aria-label="moon"
              onClick={(e: any) => setIsSunny(!isSunny)}
            >
              <DarkModeOutlinedIcon />
            </IconButton>
          )}
          {!isSunny && (
            <IconButton
              aria-label="sun"
              onClick={(e: any) => setIsSunny(!isSunny)}
            >
              <LightModeOutlinedIcon />
            </IconButton>
          )}
        </Box>
        <Box>{generateList(RouteConfigs)}</Box>
      </Stack>
    </Box>
  );
};

export default SideBar;
