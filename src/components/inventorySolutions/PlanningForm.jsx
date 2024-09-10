import { TextField, Button, Box, Typography, Slider } from "@mui/material";
import React from "react";

function PlanningForm() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "50%",
        margin: "0 auto",
      }}
    >
      <Typography variant="h6">Create a Custom Inventory Plan</Typography>
      <TextField label="Product Name" variant="outlined" />
      <TextField label="Category" variant="outlined" />
      <Typography gutterBottom>Risk Level</Typography>
      <Slider
        defaultValue={30}
        aria-labelledby="risk-level"
        step={10}
        marks
        min={0}
        max={100}
      />
      <Button variant="contained" color="primary">
        Submit Plan
      </Button>
    </Box>
  );
}

export default PlanningForm;
