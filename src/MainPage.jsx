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
import CircularProgress from "@mui/material/CircularProgress";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import LoadingTimeout from "./components/animations/LoadingTimeout";
import Footer from "./components/Footer";

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
    position: "relative", // Ensure the image stays within the section
    width: "100%", // Ensure image takes the full width of the container
    height: "auto",
    display: "block", // Make sure the image isn't floating
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

      {/* About Us Section */}
      <Container
        maxWidth="md"
        ref={aboutRef}
        sx={{
          ...aboutUsAnimationStyles,
          position: "relative", // Ensure the container has relative positioning
          padding: "200px 0",
        }}
      >
        {/* Cover Image Positioned Over AboutUs */}
        <Box
          sx={{
            ...coverImageAnimationStyles,
            position: "absolute", // Image is placed absolutely within the Container
            top: 60,
            left: 0,
            right: 0,
            zIndex: 2,
          }}
        >
          <img
            src="/everyhuman-promo-prod.png"
            alt="Cover"
            className="cover-image"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "500px",
              zIndex: 2,
            }}
          />
        </Box>
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
      <Container maxWidth="md" id="contact-us" sx={{ padding: "100px 0" }}>
        <Contact />
      </Container>
      <div>
        {/* footer */}
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
