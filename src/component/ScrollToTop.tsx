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
    w-10 h-10
    bg-black
    hover:bg-[#041f4a] text-white
    flex items-center justify-center

    transition-all duration-200 ease-out

hover:shadow-[4px_4px_0px_#000]
hover:translate-x-1
hover:translate-y-1
  "
  aria-label="Scroll to top"
>
  <svg
    width="18"
    height="22"
    viewBox="0 0 18 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2 12 L9 5 L16 12" stroke="white" strokeWidth="1" />
    <path d="M2 19 L9 12 L16 19" stroke="white" strokeWidth="1" />
  </svg>
</button>


  );
}
