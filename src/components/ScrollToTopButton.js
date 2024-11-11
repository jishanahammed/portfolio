import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true); // Show button after 300px scroll
    } else {
      setIsVisible(false); // Hide button when scroll is less than 300px
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Listen for scroll events

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up event listener
    };
  }, []);

  return (
    <div>
      {/* Scroll to top button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 h-12 w-12 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
          title="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
