import { useInView } from "react-intersection-observer";
import { Typography, Box } from "@mui/material";
import "./animations.css"; // Custom CSS file for animations

function EveryhumanText() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5, // Adjust as needed
  });

  return (
    <Box ref={ref} sx={{ display: "inline-block", overflow: "hidden" }}>
      <Typography
        variant="h2"
        className={inView ? "slide-in" : "slide-out"}
        sx={{
          fontFamily: "'Segoe Script', cursive",
          display: "inline-block", // So it stays inline with "Products"
        }}
      >
        everyhuman
      </Typography>
    </Box>
  );
}

export default EveryhumanText;
