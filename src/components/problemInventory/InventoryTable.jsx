import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useInventory } from "../context/InventoryContext";
import { Button } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "Product Name", width: 150 },
  { field: "category", headerName: "Category", width: 130 },
  { field: "price", headerName: "Price", width: 130 },
  { field: "quantity", headerName: "Quantity", width: 130 },
  { field: "status", headerName: "Status", width: 130 },
];

function InventoryTable() {
  const { inventoryItems, addToProductGrid } = useInventory(); // Access inventory items from context
  const [selectedRows, setSelectedRows] = useState([]);

  const handleAddToProductGrid = () => {
    const selectedItems = inventoryItems.filter((item) =>
      selectedRows.includes(item.id)
    );
    addToProductGrid(selectedItems); // Add selected items to ProductGrid
  };

  return (
    <div>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={inventoryItems}
          columns={columns}
          pageSize={5}
          checkboxSelection
          onSelectionModelChange={(newSelection) => {
            setSelectedRows(newSelection);
          }}
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={handleAddToProductGrid}
      >
        Add Selected to Product Grid
      </Button>
    </div>
  );
}

export default InventoryTable;
