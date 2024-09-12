import React from "react";
import { Box, Typography, Link, Container } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "primary.main",
        color: "white",
        py: 3,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          {/* Branding Section */}
          <Box>
            <Typography variant="h6">EveryHuman Resource</Typography>
            <Typography variant="body2">
              inventory management solutions
            </Typography>
          </Box>

          {/* Links Section */}
          <Box sx={{ mt: { xs: 2, sm: 0 } }}>
            <Link
              href="https://everyhumanaid.org/"
              underline="none"
              color="inherit"
              sx={{ mr: 2 }}
            >
              Everyhuman Aid
            </Link>
          </Box>

          {/* Contact Info */}
          <Box sx={{ mt: { xs: 2, sm: 0 } }}>
            <Typography variant="body2">
              Email: rhastings@everyhumanresource.com
            </Typography>
            <Typography variant="body2">Phone: </Typography>
          </Box>
        </Box>

        {/* Copyright Section */}
        <Box sx={{ textAlign: "center", mt: 3 }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} everyhuman Resource. All Rights
            Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
