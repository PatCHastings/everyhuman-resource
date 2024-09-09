import React from "react";
import { Container, Typography, Box } from "@mui/material";
import ProductGrid from "./ProductGrid";

function EveryhumanProducts() {
  return (
    <div>
      <Box id="everyhuman-products" className="everyhuman-products">
        <Container>
          <Typography variant="h2" sx={{ mb: 4 }}>
            EveryHuman Products
          </Typography>
          <Typography variant="body1" sx={{ mb: 6 }}>
            Explore our range of products designed to improve lives.
          </Typography>
          <ProductGrid />
        </Container>
      </Box>
    </div>
  );
}

export default EveryhumanProducts;
