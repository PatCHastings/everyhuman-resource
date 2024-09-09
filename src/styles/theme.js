import { colors } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(0, 75, 124, 1)",
    },
    secondary: {
      main: "#6145a3",
    },
  },
  typography: {
    h1: {
      fontSize: "2.5rem",
    },
    h2: {
      fontSize: "2rem",
    },
  },
});

export default theme;
