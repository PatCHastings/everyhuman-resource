import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Box } from "@mui/material";
import { useInView } from "react-intersection-observer";

function LoadingTimeout({ type }) {
  const [isLoading, setIsLoading] = useState(true);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <Box ref={ref} sx={{ display: "flex", alignItems: "center" }}>
      {isLoading ? (
        <CircularProgress size={24} />
      ) : type === "success" ? (
        <CheckCircleOutlineIcon color="success" sx={{ fontSize: 32 }} />
      ) : (
        <ErrorOutlineIcon color="error" sx={{ fontSize: 32 }} />
      )}
    </Box>
  );
}

export default LoadingTimeout;
