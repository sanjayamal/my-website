import { Button, styled } from "@mui/material";

const ButtonWithIcon = styled(Button)(() => ({
  borderRadius: "50px",
  height: "42px",
  borderColor: "#ffcc00",
  color: "#766f6f",
  transition: "all 1s linear",
  "&:hover": {
    color: "white",
    backgroundColor: "#ffcc00",
    borderColor: "#ffcc00",
  },
}));

export default ButtonWithIcon;
