import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "productName", headerName: "Product Name", width: 150 },
  { field: "category", headerName: "Category", width: 130 },
  { field: "status", headerName: "Status", width: 130 },
  { field: "quantity", headerName: "Quantity", type: "number", width: 110 },
];

const rows = [
  {
    id: 1,
    productName: "Widget A",
    category: "Tools",
    status: "Excess",
    quantity: 150,
  },
  {
    id: 2,
    productName: "Widget B",
    category: "Tools",
    status: "Healthy",
    quantity: 80,
  },
  {
    id: 3,
    productName: "Widget C",
    category: "Electronics",
    status: "Problematic",
    quantity: 200,
  },
];

function InventoryTable() {
  return (
    <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
  );
}

export default InventoryTable;
