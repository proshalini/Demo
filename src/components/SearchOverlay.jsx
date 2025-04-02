import React, { useEffect, useState } from "react";
import CrossIcon from "./CrossIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchOverlay = ({ toggleSearchBox }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation after a slight delay
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false); // Trigger fade-out and slide-up animation
    setTimeout(toggleSearchBox, 500); // Wait for animation to complete before closing
  };

  return (
    <div
      id="searchOverlay"
      className={`fixed left-0 w-full flex flex-col items-center justify-start z-40 top-[110px] bg-white bg-opacity-90 transition-all duration-500 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
    >
      <div
        id="searchBox"
        className="w-full h-[118px] flex flex-col items-center justify-center"
      >
        <div className="w-1/3 relative border-b-2 border-gray-400">
          <input
            id="searchInput"
            type="text"
            placeholder="Search Here..."
            className="w-full p-2 text-xl border-none outline-none bg-transparent"
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"/>

          
          <button
            id="closeSearch"
            className="absolute top-[-20px] right-[-30px]"
            onClick={handleClose}
          >
            <CrossIcon className="h-6 w-6 cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
