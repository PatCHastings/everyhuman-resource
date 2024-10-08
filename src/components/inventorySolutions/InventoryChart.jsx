import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useInventory } from "../context/InventoryContext";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function InventoryChart() {
  const { inventoryItems } = useInventory(); // Access inventory items from context
  const theme = useTheme();

  const COLORS = [
    theme.palette.chart.excess,
    theme.palette.chart.obsolete,
    theme.palette.chart.slowMoving,
  ];

  // Calculate the data for the chart by category
  const categoryData = inventoryItems.reduce((acc, item) => {
    const categoryIndex = acc.findIndex((data) => data.name === item.category);
    if (categoryIndex === -1) {
      acc.push({ name: item.category, value: 1 });
    } else {
      acc[categoryIndex].value += 1;
    }
    return acc;
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        textAlign: "center",
        mb: 4,
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        Inventory Health Breakdown
      </Typography>
      <PieChart width={300} height={300}>
        <Pie
          data={categoryData}
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={90}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {categoryData.map((entry, index) => (
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
