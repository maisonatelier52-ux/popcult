"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type CategoryHeaderProps = {
  category: string;
};
export default function CategoryHeader({category}:CategoryHeaderProps) {
  
const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  
  const linesCount = resolvedTheme === "dark" ? 40 : 100;

  return (
    <header className={` py-5  px-4 sm:px-6 lg:px-8 relative overflow-hidden`}>
      {/* Vertical lines background */}
      <div className="absolute inset-0 flex">
        {[...Array(linesCount)].map((_, i) => (
          <div
            key={i}
            className={`flex-1 border-r ${resolvedTheme=='dark'?'border-gray-800':'border-gray-100'}`}
            style={{ minWidth: '1px' }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="container relative z-10">
        <h1 className="text-[35px] md:text-[40px] font-bold capitalize">
         {category}
        </h1>
      </div>
    </header>
  );
}