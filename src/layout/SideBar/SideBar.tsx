import React, { useState } from "react";
import {
  Box,
  IconButton,
  List,
  ListItemText,
  Stack,
  ListItemButton,
  styled,
  useMediaQuery,
} from "@mui/material";
import { RouteConfigs, IRouteConfigs } from "./routesConfig";
import { useLocation, useNavigate } from "react-router-dom";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import "./SideBar.scss";

const SideBar: React.FC = () => {
  const navigation = useNavigate();
  let location = useLocation();
  const [isSunny, setIsSunny] = useState<boolean>(true);
  const isSmallScreen = useMediaQuery((theme: any) =>
    theme.breakpoints.down("sm")
  );

  const $ListItemButton = styled(ListItemButton)(({ theme }) => ({
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
    [theme.breakpoints.down("sm")]: {
      maxWidth: "40px",
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
            {isSmallScreen ? (
              icon
            ) : (
              <>
                <ListItemText primary={name} className="list-item-text" />
                {icon}
              </>
            )}
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
        minWidth: `${isSmallScreen ? "70px" : "130px"}`,
      }}
    >
      <Stack
        spacing={10}
        sx={{
          marginRight: "10px",
          alignItems: "flex-end",
        }}
      >
        {/* <Box>
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
        </Box> */}
        <Box className="list-item">{generateList(RouteConfigs)}</Box>
      </Stack>
    </Box>
  );
};

export default SideBar;
