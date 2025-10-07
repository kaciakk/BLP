import React from "react";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
export default function ArrowBackToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-[#7ed957] text-white p-3 rounded-full shadow-lg hover:bg-[#6dc44d] transition duration-300 z-50 animate-bounce cursor-pointer"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
}
