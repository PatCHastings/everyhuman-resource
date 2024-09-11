import { Container, Typography, Box, Grid } from "@mui/material";
import React from "react";
import InventoryChart from "./InventoryChart";
import InventoryTable from "./InventoryTable";
import PlanningForm from "./PlanningForm";
import InventoryAccordion from "./InventoryAccordion";
import InventoryForm from "../context/InventoryForm";
import { display, maxWidth } from "@mui/system";

function InventorySolutions() {
  return (
    <div id="inventory-solutions" className="inventory-solutions">
      <Container maxWidth="lg">
        {/* Section Header */}
        <Typography variant="h2" sx={{ mb: 4, textAlign: "center" }}>
          Inventory Solutions
        </Typography>

        <Typography variant="body1" sx={{ mb: 6 }}>
          Every Human Inventory Solutions will assist the organization in
          understanding, managing, and achieving results with problem inventory.
          With your permission, we’ll add your high-risk products; your excess
          and obsolete, your extremely slow-moving inventory items to our
          national database of ‘helping’ products eligible for donation to meet
          existing needs within the greater charitable community.
        </Typography>

        {/* Container with maxWidth to prevent overflow */}
        <Box sx={{ maxWidth: "1000px", width: "90vw", mx: "auto" }}>
          {/* InventoryForm and InventoryChart Side by Side */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={8} sm={8} md={6}>
              <Box
                sx={{
                  p: 3,
                  boxShadow: 3,
                  borderRadius: 2,
                  bgcolor: "rgba(250, 250, 250, 0.8)",
                }}
              >
                <Typography variant="h4" sx={{ mb: 2 }}>
                  Add New Inventory Item
                </Typography>
                <InventoryForm />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 3,
                  boxShadow: 3,
                  borderRadius: 2,
                  bgcolor: "rgba(250, 250, 250, 0.8)",
                }}
              >
                <Typography variant="h4" sx={{ mb: 2 }}>
                  Inventory Health Breakdown
                </Typography>
                <InventoryChart />
              </Box>
            </Grid>
          </Grid>

          {/* InventoryTable Below */}
          <Box
            sx={{
              p: 3,
              boxShadow: 3,
              borderRadius: 2,
              bgcolor: "rgba(250, 250, 250, 0.8)",
              mb: 6,
              width: "100%",
            }}
          >
            <Typography variant="h4" sx={{ mb: 2 }}>
              Current Inventory Overview
            </Typography>
            <InventoryTable />
          </Box>

          {/* Planning Form Section */}
          <Box sx={{ mb: 6, width: "100%" }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Create a Custom Inventory Plan
            </Typography>
            <PlanningForm />
          </Box>

          {/* Inventory Analysis and Strategy Accordion */}
          <Box sx={{ mb: 6, maxWidth: "1000px" }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Detailed Inventory Reports
            </Typography>
            <InventoryAccordion />
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default InventorySolutions;
