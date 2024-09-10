import React, { createContext, useState, useContext } from "react";

// Create Inventory Context
const InventoryContext = createContext();

// Custom hook to use inventory context
export const useInventory = () => useContext(InventoryContext);

// Inventory Provider Component
export const InventoryProvider = ({ children }) => {
  const [inventoryItems, setInventoryItems] = useState([
    {
      id: 1,
      name: "Item 1",
      category: "Excess",
      price: "$100",
      quantity: 500,
      status: "Available",
    },
    {
      id: 2,
      name: "Item 2",
      category: "Obsolete",
      price: "$200",
      quantity: 1200,
      status: "Available",
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
