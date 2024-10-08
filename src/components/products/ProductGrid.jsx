import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useInventory } from "../context/InventoryContext";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { bgcolor } from "@mui/system";
import { useTheme } from "@mui/material/styles";

function ProductGrid() {
  const { selectedProducts } = useInventory(); // Access selected products from context
  const theme = useTheme();

  const COLORS = [theme.palette.boxes.backgroundColor];

  return (
    <Grid container spacing={3} sx={{ justifyContent: "center" }}>
      {selectedProducts.length > 0 ? (
        selectedProducts.map((product) => (
          <Grid item xs={10} sm={8} md={6} lg={6} key={product.id}>
            <Card
              sx={{
                boxShadow: 3,
                borderRadius: 2,
                bgcolor: theme.palette.boxes.backgroundColor,
                height: "100%",
              }}
            >
              {product.image ? (
                <CardMedia
                  component="img"
                  alt={product.name}
                  image={product.image} // Use the product's image
                  title={product.name}
                  sx={{
                    maxWidth: "100%",
                    maxHeight: "200px",
                    objectFit: "contain",
                    margin: "auto",
                  }}
                />
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "200px",
                    color: theme.palette.primary.main, // Apply theme color
                  }}
                >
                  <DriveFolderUploadOutlinedIcon sx={{ fontSize: "4rem" }} />
                </Box>
              )}
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
                  sx={{ marginTop: 2 }}
                >
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))
      ) : (
        <Typography variant="h6" sx={{ mt: 4 }}>
          go to Inventory Solutions section and enter a Problem Inventory item,
          review Current Inventory Overview, and then select which Items you
          want to appear in the Products section. to list for sale.
        </Typography>
      )}
    </Grid>
  );
}

export default ProductGrid;
