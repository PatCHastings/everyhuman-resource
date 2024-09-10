import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { useInventory } from "../context/InventoryContext";

function ProductGrid() {
  const { selectedProducts } = useInventory(); // Access selected products from context

  console.log("Selected Products: ", selectedProducts);

  return (
    <Grid container spacing={3}>
      {selectedProducts.length > 0 ? (
        selectedProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                alt={product.name}
                height="140"
                image="/default-product-image.jpg" // Placeholder image
                title={product.name}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {product.price}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Quantity: {product.quantity}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "10px" }}
                >
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))
      ) : (
        <Typography variant="h6" sx={{ mt: 4 }}>
          No products selected.
        </Typography>
      )}
    </Grid>
  );
}

export default ProductGrid;
