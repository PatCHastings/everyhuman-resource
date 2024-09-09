import React from "react";
import NavBar from "./components/navBar/NavBar";
import ProductGrid from "./products/ProductGrid";
import MainPage from "./MainPage";
import { Container } from "@mui/material";
import "./App.css";

function App() {
  return (
    <div>
      <MainPage /> {/* Render MainPage here */}
    </div>
  );
}

export default App;
