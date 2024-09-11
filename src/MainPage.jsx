import React from "react";
import { useState } from "react";
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
  const [hasAnimated, setHasAnimated] = useState(false);

  // AboutUs - Intersection observer
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "10",
  };

  // Other section observers
  const { ref: productsRef, inView: productsInView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });
  const { ref: problemInventoryRef, inView: problemInventoryInView } =
    useInView({ triggerOnce: false, threshold: 0.4 });
  const { ref: inventorySolutionsRef, inView: inventorySolutionsInView } =
    useInView({ triggerOnce: false, threshold: 0.4 });
  const { ref: promotionalProductsRef, inView: promotionalProductsInView } =
    useInView({ triggerOnce: false, threshold: 0.4 });

  return (
    <div>
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
      <Container
        maxWidth="md"
        ref={aboutRef}
        sx={{ ...aboutUsAnimationStyles, padding: "200px 0" }}
      >
        <AboutUs />
      </Container>

      {/* Problem Inventory Section */}
      <Container
        maxWidth="md"
        ref={problemInventoryRef}
        sx={{ padding: "200px 0" }}
      >
        <Box
          sx={{
            opacity: problemInventoryInView ? 1 : 0,
            transform: problemInventoryInView
              ? "translateY(0)"
              : "translateY(40px)",
            transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
          }}
        >
          <ProblemInventory />
        </Box>
      </Container>

      {/* Inventory Solutions Section */}
      <Container
        maxWidth="md"
        ref={inventorySolutionsRef}
        sx={{ padding: "200px 0" }}
      >
        <InventorySolutions />
      </Container>

      {/* EveryHuman Products Section */}
      <Container maxWidth="md" ref={productsRef} sx={{ padding: "20px 0" }}>
        <Box
          sx={{
            opacity: productsInView ? 1 : 0,
            transform: productsInView ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
            textAlign: "center",
          }}
        >
          <EveryhumanProducts />
        </Box>
      </Container>

      {/* Promotional Products Section */}
      <Container
        maxWidth="md"
        ref={promotionalProductsRef}
        sx={{ padding: "300px 0" }}
      >
        <Box
          sx={{
            opacity: promotionalProductsInView ? 1 : 0,
            transform: promotionalProductsInView
              ? "translateY(0)"
              : "translateY(40px)",
            transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
          }}
        >
          <PromotionalProducts />
        </Box>
      </Container>

      {/* Contact Us Section */}
      <Container maxWidth="md" id="contact-us" sx={{ padding: "20px 0" }}>
        <Contact />
      </Container>
    </div>
  );
}

export default MainPage;
