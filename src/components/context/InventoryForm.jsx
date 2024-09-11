import React, { useState } from "react";
import { useInventory } from "./InventoryContext";
import { Box, Button, TextField, Typography, MenuItem } from "@mui/material";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const categories = ["Excess", "Obsolete", "Slow-Moving"];
const statuses = ["Available", "Pending", "Sold"];

function InventoryForm() {
  const { addItem } = useInventory();
  const { uploadIcon } = DriveFolderUploadOutlinedIcon;
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    status: "Available",
    quantity: 0,
    img: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.category ||
      !formData.price ||
      !formData.quantity
    ) {
      alert("Please fill in all fields.");
      return;
    }
    addItem(formData);
    setFormData({
      name: "",
      category: "",
      price: "",
      status: "Available",
      quantity: 0,
      img: uploadIcon,
    });
  };
  console.log("data: ", formData);

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Add New Inventory Item
      </Typography>
      <TextField
        label="Product Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Category"
        name="category"
        value={formData.category}
        onChange={handleChange}
        select
        fullWidth
        sx={{ mb: 2 }}
      >
        {categories.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Price"
        name="price"
        value={formData.price}
        onChange={handleChange}
        type="number"
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Quantity"
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
        type="number"
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Status"
        name="status"
        value={formData.status}
        onChange={handleChange}
        select
        fullWidth
        sx={{ mb: 2 }}
      >
        {statuses.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <Button variant="contained" type="submit">
        Add Item
      </Button>
    </Box>
  );
}

export default InventoryForm;
