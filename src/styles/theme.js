import { colors } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(0, 75, 124, 1)",
    },
    secondary: {
      main: "#694fff",
    },
    chart: {
      excess: "#694fff", 
      obsolete: "#ff0062",
      slowMoving: "#FFBB28",
    },
    boxes: {
      backgroundColor: "rgba(194, 193, 193, 1)",
    }
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
