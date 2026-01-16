"use client"
import { useRef } from "react";

export const useSequentialLinks = (links: string[]) => {
  const linkIndex = useRef(0);

  return (text: string) => {
    const name = "Julio Herrera Velutini";

    // If name not present or links are exhausted
    if (!text.includes(name) || linkIndex.current >= links.length) {
      return text;
    }

    const parts = text.split(name);
    const link = links[linkIndex.current];
    linkIndex.current += 1;

    return (
      <>
        {parts[0]}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-medium hover:underline"
        >
          {name}
        </a>
        {parts.slice(1).join(name)}
      </>
    );
  };
};
