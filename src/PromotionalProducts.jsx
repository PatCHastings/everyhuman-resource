import React from "react";
import { Typography, Container } from "@mui/material";

function PromotionalProducts() {
  return (
    <div id="promotional-products" className="promotional-products">
      <Container>
        <Typography variant="h2" sx={{ mb: 4 }}>
          Everyhuman Promotional Products
        </Typography>
        <Typography variant="body1" sx={{ mb: 6 }}>
          Enjoy the smooth and sleek feel of our promotional products while
          expressing your support for a good cause.
        </Typography>
      </Container>
    </div>
  );
}

export default PromotionalProducts;
