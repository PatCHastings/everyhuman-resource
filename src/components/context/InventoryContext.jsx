import React, { createContext, useState, useContext } from "react";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

// Create Inventory Context
const InventoryContext = createContext();

// Custom hook to use inventory context
export const useInventory = () => useContext(InventoryContext);

// Inventory Provider Component
export const InventoryProvider = ({ children }) => {
  const { uploadIcon } = DriveFolderUploadOutlinedIcon;
  const [inventoryItems, setInventoryItems] = useState([
    {
      id: 1,
      name: "XL Boots",
      category: "Excess",
      price: "$120",
      quantity: 63,
      status: "Available",
      image: "boots.webp",
    },
    {
      id: 2,
      name: "Hardhat",
      category: "Obsolete",
      price: "$45",
      quantity: 230,
      status: "Available",
      image: "hardhat.webp",
    },
  ]);

  const [selectedProducts, setSelectedProducts] = useState([]);

  const addItem = (item) => {
    setInventoryItems((prevItems) => [
      ...prevItems,
      { ...item, id: prevItems.length + 1 },
    ]);
  };

  // Function to add selected items to the product grid
  const addToProductGrid = (selectedItems) => {
    setSelectedProducts((prevProducts) => [
      ...prevProducts,
      ...selectedItems.filter(
        (item) => !prevProducts.some((p) => p.id === item.id)
      ),
    ]);
  };

  return (
    <InventoryContext.Provider
      value={{ inventoryItems, addItem, selectedProducts, addToProductGrid }}
    >
      {children}
    </InventoryContext.Provider>
  );
};
