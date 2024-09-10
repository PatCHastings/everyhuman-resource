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

const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$100",
    image: "/hat.png",
  },
  { id: 2, name: "Product 2", price: "$200", image: "/shirt-black.webp" },
  { id: 3, name: "Product 3", price: "$300", image: "/shirt-white.webp" },
];

function ProductGrid() {
  const { inventoryItems } = useInventory();

  return (
    <Grid container spacing={3}>
      {inventoryItems.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card>
            <CardMedia
              component="img"
              alt={product.name}
              height="140"
              image={product.image || "/default-image.jpg"}
              title={product.name}
            />
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                {product.price}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                style={{
                  marginTop: "10px",
                }}
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductGrid;
