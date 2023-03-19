import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#f0f0e8",
          "&:hover": {
            backgroundColor: "#ffcc00", // set the hover color here
            color: "white",
          },
        },
      },
    },
  },
});
