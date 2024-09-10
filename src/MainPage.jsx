import React from "react";
import { useState } from "react";
import NavBar from "./components/navBar/NavBar";
import { Container, Typography, Box } from "@mui/material";
import { useInView } from "react-intersection-observer";
import ProductGrid from "./components/products/ProductGrid";
import AboutUs from "./components/AboutUs";
import "./mainPage.css";
import EveryhumanProducts from "./components/products/EveryhumanProducts";
import InventorySolutions from "./components/InventorySolutions";
import ProblemInventory from "./components/problemInventory/ProblemInventory";
import PromotionalProducts from "./PromotionalProducts";
import Contact from "./components/contact/Contact";
import EveryHumanText from "./components/EveryhumanText";

function MainPage() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const handleMouseEnter = () => setIsNavVisible(true);
  const handleMouseLeave = () => setIsNavVisible(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  // AboutUs - Intersection observer
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });
  // AboutUs - Inline animation
  // only runs the first time it scrolls into view
  const aboutUsAnimationStyles = {
    opacity: aboutInView && !hasAnimated ? 1 : 0,
    transform:
      aboutInView && !hasAnimated ? "translateY(150px)" : "translateY(0)",
    transition: "opacity 0.9s ease-out, transform 0.9s ease-out",
  };
  const coverImageAnimationStyles = {
    opacity: aboutInView ? 1 : 0,
    transform: aboutInView ? "translateY(-150px)" : "translateY(0)",
    transition: "opacity 0.9s ease-out, transform 0.9s ease-out",
    position: "absolute",
    width: "100vw",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "10",
  };

  // Products - Intersection observer
  const { ref: productsRef, inView: productsInView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  // Inventory Solutions - Intersection observer
  const { ref: inventorySolutionsRef, inView: inventorySolutionsInView } =
    useInView({
      triggerOnce: false,
      threshold: 0.4,
    });

  // Problem Inventory - Intersection observer
  const { ref: problemInventoryRef, inView: problemInventoryInView } =
    useInView({
      triggerOnce: true,
      threshold: 0.4,
    });

  // Promotional Products - Intersection observer
  const { ref: promotionalProductsRef, inView: promotionalProductsInView } =
    useInView({
      triggerOnce: false,
      threshold: 0.4,
    });

  return (
    <div>
      {/* Hover area at the top of the viewport to trigger NavBar */}
      <div
        className="nav-hover-area"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <NavBar isVisible={isNavVisible} />
      </div>

      {/* Covering Image Positioned Over AboutUs */}
      <div className="cover-image-container" style={coverImageAnimationStyles}>
        <img
          src="/everyhuman-promo-prod.png"
          alt="Cover"
          className="cover-image"
        />
      </div>

      {/* About Us Section */}
      <div ref={aboutRef} style={aboutUsAnimationStyles}>
        <AboutUs />
      </div>

      {/* EveryHuman Products Section */}
      <Box
        ref={productsRef}
        sx={{
          opacity: productsInView ? 1 : 0,
          transform: productsInView ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <EveryhumanProducts />
      </Box>

      {/* Inventory Solutions Section */}
      <Box
        ref={inventorySolutionsRef}
        sx={{
          opacity: inventorySolutionsInView ? 1 : 0,
          transform: inventorySolutionsInView
            ? "translateY(0)"
            : "translateY(40px)",
          transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <InventorySolutions />
      </Box>

      {/* Problem Inventory Section */}
      <Box
        ref={problemInventoryRef}
        sx={{
          opacity: problemInventoryInView ? 1 : 0,
          transform: problemInventoryInView
            ? "translateY(0)"
            : "translateY(40px)",
          transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "200vh",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <ProblemInventory />
      </Box>

      {/* Promotional Products Section */}
      <Box
        ref={promotionalProductsRef}
        sx={{
          opacity: promotionalProductsInView ? 1 : 0,
          transform: promotionalProductsInView
            ? "translateY(0)"
            : "translateY(40px)",
          transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <PromotionalProducts />
      </Box>

      <Box
        id="contact-us"
        sx={{
          height: "100vh",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Contact />
      </Box>
    </div>
  );
}

export default MainPage;
