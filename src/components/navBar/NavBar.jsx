import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link as ScrollLink } from "react-scroll";
import "./navBar.css";

function NavBar({ isVisible }) {
  // State for the Menu button
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  // State for the Shopping Cart button
  const [cartAnchorEl, setCartAnchorEl] = useState(null);

  // Open the Menu
  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  // Open the Cart
  const handleCartClick = (event) => {
    setCartAnchorEl(event.currentTarget);
  };

  // Close the Menu
  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  // Close the Cart
  const handleCartClose = () => {
    setCartAnchorEl(null);
  };

  return (
    <div>
      {/* The AppBar is still at the top for branding or other purposes */}
      <AppBar
        position="fixed"
        sx={{
          top: 0,
          left: 0,
          right: 0,
          transition: "opacity 0.5s ease-in-out",
          opacity: isVisible ? 1 : 0,
          visibility: isVisible ? "visible" : "hidden",
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
            EveryHuman Resource
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Floating Menu Button - Top Left of the viewport */}
      <IconButton
        className="menu-button"
        edge="start"
        color="inherit"
        onClick={handleMenuClick}
        sx={{
          position: "fixed",
          top: "10px",
          left: "20px",
          zIndex: 2000,
          backgroundColor: "#1976d2",
          opacity: 0.2,
          transition: "opacity 0.3s ease-in-out",
          "&:hover": {
            opacity: 1,
          },
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Floating Shopping Cart Button - Top Right of the viewport */}
      <IconButton
        className="shopping-cart-button"
        edge="end"
        color="inherit"
        onClick={handleCartClick}
        sx={{
          position: "fixed",
          top: "10px",
          right: "20px",
          zIndex: 2000,
          backgroundColor: "#1976d2",
          opacity: 0.2,
          transition: "opacity 0.3s ease-in-out",
          "&:hover": {
            opacity: 1,
          },
        }}
      >
        <ShoppingCartIcon />
      </IconButton>

      {/* Dropdown Menu for Navigation */}
      <Menu
        id="navbar-menu"
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        onClose={handleMenuClose}
        keepMounted
      >
        {/* Scroll to sections within the same page */}
        <MenuItem>
          <ScrollLink
            to="about-us"
            smooth={true}
            duration={500}
            onClick={handleMenuClose}
          >
            About Us
          </ScrollLink>
        </MenuItem>

        <MenuItem>
          <ScrollLink
            to="problem-inventory"
            smooth={true}
            duration={500}
            onClick={handleMenuClose}
          >
            Problem Inventory
          </ScrollLink>
        </MenuItem>

        <MenuItem>
          <ScrollLink
            to="inventory-solutions"
            smooth={true}
            duration={500}
            onClick={handleMenuClose}
          >
            Inventory Solutions
          </ScrollLink>
        </MenuItem>

        <MenuItem>
          <ScrollLink
            to="everyhuman-products"
            smooth={true}
            duration={500}
            onClick={handleMenuClose}
          >
            everyhuman Products
          </ScrollLink>
        </MenuItem>

        <MenuItem>
          <ScrollLink
            to="promotional-products"
            smooth={true}
            duration={500}
            onClick={handleMenuClose}
          >
            EveryHuman Promotional Products
          </ScrollLink>
        </MenuItem>

        <MenuItem>
          <ScrollLink
            to="contact-us"
            smooth={true}
            duration={500}
            onClick={handleMenuClose}
          >
            Contact Us
          </ScrollLink>
        </MenuItem>

        {/* External Link */}
        <MenuItem onClick={handleMenuClose}>
          <a
            href="https://everyhumanaid.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Every Human Aid
          </a>
        </MenuItem>
      </Menu>

      {/* Dropdown Menu for the Shopping Cart */}
      <Menu
        id="cart-menu"
        anchorEl={cartAnchorEl}
        open={Boolean(cartAnchorEl)}
        onClose={handleCartClose}
        keepMounted
      >
        <MenuItem>Your Cart is Empty</MenuItem>
        <MenuItem>
          <a
            href="/checkout"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Checkout
          </a>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default NavBar;
