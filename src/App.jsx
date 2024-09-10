import React from "react";
import NavBar from "./components/navBar/NavBar";
import ProductGrid from "./components/products/ProductGrid";
import MainPage from "./MainPage";
import { Container } from "@mui/material";
import "./App.css";
import { InventoryProvider } from "./components/context/InventoryContext";

function App() {
  return (
    <InventoryProvider>
      <MainPage />
    </InventoryProvider>
  );
}

export default App;
