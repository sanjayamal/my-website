import { BarItem } from "../../constants";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";

interface IRouteConfigs {
  key: number;
  name: string;
  path: string;
  icon: any;
}

export const RouteConfigs: Array<IRouteConfigs> = [
  {
    key: 1,
    name: BarItem.Home,
    path: "",
    icon: <HouseOutlinedIcon />,
  },
  {
    key: 2,
    name: BarItem.About,
    path: "/about",
    icon: <PersonOutlineOutlinedIcon />,
  },
  {
    key: 3,
    name: BarItem.Blogs,
    path: "/blogs",
    icon: <ArticleOutlinedIcon />,
  },
  {
    key: 4,
    name: BarItem.Contact,
    path: "/contact",
    icon: <ContactMailOutlinedIcon />,
  },
];