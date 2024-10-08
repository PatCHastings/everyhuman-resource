import React from "react";
import { Typography, Container, Box } from "@mui/material";
import LoadingTimeout from "./animations/LoadingTimeout";

function ProblemInventory() {
  return (
    <div id="problem-inventory" className="problem-inventory">
      <Container>
        <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
          {/* Problem Inventory Title */}
          <Typography variant="h2" sx={{ mr: 2 }}>
            Problem Inventory
          </Typography>

          {/* LoadingTimeout component */}
          <LoadingTimeout type="error" />
        </Box>
        <Typography variant="body1" sx={{ mb: 6 }}>
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
      </Container>
    </div>
  );
}

export default ProblemInventory;
