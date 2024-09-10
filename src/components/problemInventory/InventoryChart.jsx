import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Box, Typography } from "@mui/material";

const data = [
  { name: "Healthy", value: 400 },
  { name: "Problematic", value: 300 },
  { name: "Excess", value: 300 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

function InventoryChart() {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Inventory Health Breakdown
      </Typography>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          innerRadius={60}
          outerRadius={120}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </Box>
  );
}

export default InventoryChart;
