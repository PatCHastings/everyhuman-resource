import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useInventory } from "../context/InventoryContext";
import { Box, Typography } from "@mui/material";

const data = [
  { name: "Healthy", value: 400 },
  { name: "Problematic", value: 300 },
  { name: "Excess", value: 300 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function InventoryChart() {
  const { inventoryItems } = useInventory(); // Access inventory items from context

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
    <PieChart width={400} height={400}>
      <Pie
        data={categoryData}
        cx={200}
        cy={200}
        innerRadius={60}
        outerRadius={80}
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
  );
}

export default InventoryChart;
