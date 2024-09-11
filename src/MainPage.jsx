import React, { useState } from "react";
import NavBar from "./components/navBar/NavBar";
import { Container, Typography, Box } from "@mui/material";
import { useInView } from "react-intersection-observer";
import ProductGrid from "./components/products/ProductGrid";
import AboutUs from "./components/AboutUs";
import "./mainPage.css";
import EveryhumanProducts from "./components/products/EveryhumanProducts";
import ProblemInventory from "./components/ProblemInventory";
import InventorySolutions from "./components/inventorySolutions/InventorySolutions";
import PromotionalProducts from "./PromotionalProducts";
import Contact from "./components/contact/Contact";
import EveryHumanText from "./components/EveryhumanText";

function MainPage() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const handleMouseEnter = () => setIsNavVisible(true);
  const handleMouseLeave = () => setIsNavVisible(false);

  // Intersection Observers for various sections
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const { ref: productsRef, inView: productsInView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const { ref: problemInventoryRef, inView: problemInventoryInView } =
    useInView({ triggerOnce: true, threshold: 0.4 });
  const { ref: inventorySolutionsRef, inView: inventorySolutionsInView } =
    useInView({ triggerOnce: true, threshold: 0.4 });
  const { ref: promotionalProductsRef, inView: promotionalProductsInView } =
    useInView({ triggerOnce: true, threshold: 0.4 });

  // Animation styles
  const sectionAnimationStyles = (inView) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(40px)",
    transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
    marginBottom: "50px", // Space between sections
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

      {/* About Us Section */}
      <Box ref={aboutRef} sx={sectionAnimationStyles(aboutInView)}>
        <AboutUs />
      </Box>

      {/* Problem Inventory Section */}
      <Box
        ref={problemInventoryRef}
        sx={sectionAnimationStyles(problemInventoryInView)}
      >
        <ProblemInventory />
      </Box>

      {/* Inventory Solutions Section */}
      <Box
        ref={inventorySolutionsRef}
        sx={sectionAnimationStyles(inventorySolutionsInView)}
      >
        <InventorySolutions />
      </Box>

      {/* EveryHuman Products Section */}
      <Box ref={productsRef} sx={sectionAnimationStyles(productsInView)}>
        <EveryhumanProducts />
      </Box>

      {/* Promotional Products Section */}
      <Box
        ref={promotionalProductsRef}
        sx={sectionAnimationStyles(promotionalProductsInView)}
      >
        <PromotionalProducts />
      </Box>

      {/* Contact Section */}
      <Box
        id="contact-us"
        sx={{
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
