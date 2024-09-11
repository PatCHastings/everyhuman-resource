import React from "react";
import { Container, Typography, Box } from "@mui/material";
import ProductGrid from "./ProductGrid";
import EveryhumanText from "../EveryhumanText";

function EveryhumanProducts() {
  return (
    <div>
      <Box id="everyhuman-products" className="everyhuman-products">
        <Container>
          <Typography variant="h2" sx={{ display: "inline-block", mb: 4 }}>
            <EveryhumanText /> {/* This slides in */}
            &nbsp;Products {/* This remains static */}
          </Typography>
          <Typography variant="body1" sx={{ mb: 6 }}>
            These products may be problematic in your warehouse, but you can
            unlock thier value by making them accessible to others:
          </Typography>
          <ProductGrid />
        </Container>
      </Box>
    </div>
  );
}

export default EveryhumanProducts;
