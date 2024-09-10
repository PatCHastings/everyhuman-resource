import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useInventory } from "../context/InventoryContext"; // Adjust path
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
  const { inventoryItems, addToProductGrid } = useInventory(); // Access inventory context
  const [selectionModel, setSelectionModel] = useState([]); // State to track selected rows

  // Function to handle adding selected rows to ProductGrid
  const handleAddToProductGrid = () => {
    const selectedItems = inventoryItems.filter((item) =>
      selectionModel.includes(item.id)
    );
    console.log("Selected Rows: ", selectionModel); // Debug selected rows
    console.log("Selected Items: ", selectedItems); // Debug selected items
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
          onRowSelectionModelChange={(newSelection) => {
            // Ensure that newSelection is an array of IDs
            if (Array.isArray(newSelection)) {
              setSelectionModel(newSelection); // Set the selection model to the IDs of the selected rows
            }
          }}
          rowSelectionModel={selectionModel} // Bind the current selection model
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
