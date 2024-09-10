import { Container, Typography, Box } from "@mui/material";
import React from "react";
import InventoryChart from "./InventoryChart";
import InventoryTable from "./InventoryTable";
import PlanningForm from "./PlanningForm";
import InventoryAccordion from "./InventoryAccordion";
import InventoryForm from "../context/InventoryForm";
import { display } from "@mui/system";

function InventorySolutions() {
  return (
    <div id="inventory-solutions" className="inventory-solutions">
      <Container>
        {/* Section Header */}
        <Typography variant="h2" sx={{ mb: 4 }}>
          Inventory Solutions
        </Typography>
        {/* Add New Inventory Form */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Add New Inventory Item
          </Typography>
          <InventoryForm />
          {/* This is the entry point where users add items */}
        </Box>
        {/* Inventory Chart Section */}
        <Box
          sx={{
            display: "grid",
            mb: 6,
            bgcolor: "rgba(150, 250, 250, 0.8)",
            boxShadow: 1,
            borderRadius: 2,
          }}
        >
          <Typography variant="h4" sx={{ mb: 2 }}>
            Inventory Health Breakdown
          </Typography>
          <InventoryChart />
        </Box>
        {/* Inventory Table Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Current Inventory Overview
          </Typography>
          <InventoryTable />
        </Box>
        {/* Planning Form Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Create a Custom Inventory Plan
          </Typography>
          <PlanningForm />
        </Box>
        {/* Inventory Analysis and Strategy Accordion */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Detailed Inventory Reports
          </Typography>
          <InventoryAccordion />
        </Box>
      </Container>
    </div>
  );
}

export default InventorySolutions;
