"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed bottom-8 right-6 z-50
        w-12 h-12
        bg-black text-white
        flex flex-col items-center justify-center
        hover:bg-[#000080]
        transition-colors
      "
      aria-label="Scroll to top"
    >
      <span className="text-lg leading-none">⌃</span>
      <span className="text-lg leading-none -mt-1">⌃</span>
    </button>
  );
}
