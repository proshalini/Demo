import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MenuOverlay from "./components/MenuOverlay";
import SearchOverlay from "./components/SearchOverlay";
import MobileMenu from "./components/MobileMenu"; // Import MobileMenu
import Carousel from "./components/caraousel";
import Carouselnew from "./components/newCar"

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Toggle the menu overlay
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Toggle the search overlay
  const toggleSearchBox = () => setIsSearchOpen(!isSearchOpen);

  return (
    <>
    <div className="relative">
      {/* Header Section */}
      <Header
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        toggleSearchBox={toggleSearchBox}
      />

      {/* Search Overlay */}
      {isSearchOpen && <SearchOverlay toggleSearchBox={toggleSearchBox} />}

      {/* Menu Overlay */}
      {isMenuOpen && <MenuOverlay />}

      {/* Mobile Menu */}
      {isMenuOpen && <MobileMenu />} {/* This will render the mobile menu when isMenuOpen is true */}
      
    </div>
    <Carousel/>
    <Carouselnew/>
    </>
   
  );
};

export default App;
