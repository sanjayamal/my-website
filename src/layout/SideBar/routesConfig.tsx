import { BarItem } from "../../constants";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { IconButton, styled } from "@mui/material";

export interface IRouteConfigs {
  key: number;
  name: string;
  path: string;
  icon: any;
}

const $IconButton = styled(IconButton)(() => ({
  margin: "0px -16px 0 5px",
}));

export const RouteConfigs: Array<IRouteConfigs> = [
  {
    key: 1,
    name: BarItem.Home,
    path: "/",
    icon: (
      <$IconButton aria-label="house">
        <HouseOutlinedIcon />
      </$IconButton>
    ),
  },
  {
    key: 2,
    name: BarItem.Project,
    path: "/projects",
    icon: (
      <$IconButton aria-label="project">
        <AppsOutlinedIcon />
      </$IconButton>
    ),
  },
  {
    key: 3,
    name: BarItem.About,
    path: "/about",
    icon: (
      <$IconButton aria-label="about">
        <PersonOutlineOutlinedIcon />
      </$IconButton>
    ),
  },
  {
    key: 4,
    name: BarItem.Blogs,
    path: "/blogs",
    icon: (
      <$IconButton aria-label="blogs">
        <ArticleOutlinedIcon />
      </$IconButton>
    ),
  },
  {
    key: 5,
    name: BarItem.Contact,
    path: "/contact",
    icon: (
      <$IconButton aria-label="contact">
        <ContactMailOutlinedIcon />
      </$IconButton>
    ),
  },
];

// export const RouteConfigs: Array<IRouteConfigs> = [
//   {
//     key: 1,
//     name: BarItem.Home,
//     path: "",
//     icon: <HouseOutlinedIcon />,
//   },
//   {
//     key: 2,
//     name: BarItem.About,
//     path: "/about",
//     icon: <PersonOutlineOutlinedIcon />,
//   },
//   {
//     key: 3,
//     name: BarItem.Blogs,
//     path: "/blogs",
//     icon: <ArticleOutlinedIcon />,
//   },
//   {
//     key: 4,
//     name: BarItem.Contact,
//     path: "/contact",
//     icon: <ContactMailOutlinedIcon />,
//   },
// ];
