import { Container, Typography, Box } from "@mui/material";
import React from "react";
import InventoryChart from "./InventoryChart";
import InventoryTable from "./InventoryTable";
import PlanningForm from "./PlanningForm";
import InventoryAccordion from "./InventoryAccordion";

function ProblemInventory() {
  return (
    <div id="problem-inventory" className="problem-inventory">
      <Container>
        {/* Section Header */}
        <Typography variant="h2" sx={{ mb: 4 }}>
          Problem Inventory
        </Typography>

        {/* Intro Text */}
        <Typography variant="body1" sx={{ mb: 2 }}>
          Great inventory analysis involves coordinating and managing inventory
          assets throughout product lifecycles so that all products of all
          inventory types and classifications are held in appropriate amounts
          relative to the needs within the organization. Anything else is
          problem inventory. It’s there without a plan. It arrives without an
          invitation and accumulates without observation. It’s difficult and
          costly when it hangs around and it takes special effort to make it
          leave. We will construct a planning process with you that addresses
          these points while avoiding inventory vulnerabilities and focusing on
          the process of creating a healthy asset listing. everyhuman® – we’re
          better together
        </Typography>

        {/* Inventory Chart Section */}
        <Box sx={{ mb: 6 }}>
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

export default ProblemInventory;
