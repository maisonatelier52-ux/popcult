"use client";

import { useEffect, useRef, useState } from "react";
import CategoryCard from "./CategoryCard";
import UpgradePromoCard from "./UpgradePromoCard";

interface NewsData {
  slug: string;
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  date: string;
  image: string;
}

interface Props {
  data: NewsData[];
}

export default function CategoryContent({ data }: Props) {
  const leftRef = useRef<HTMLDivElement>(null);
  const stopRef = useRef<HTMLDivElement>(null);
  const [stopScroll, setStopScroll] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setStopScroll(entry.isIntersecting);
      },
      { root: null, threshold: 0.1 }
    );

    if (stopRef.current) observer.observe(stopRef.current);

    return () => observer.disconnect();
  }, []);


  return (
    <div className="w-full mb-8">
      <div className="flex flex-col lg:flex-row gap-15">

        {/* LEFT SECTION */}
        <div className="relative w-full" ref={leftRef}>
          <div className={`transition-transform duration-500 ${stopScroll ? "sticky top-[50px]" : ""}`}>


            <div className="mt-4">
              {data.map((item, index) => (
                <div key={index}>
                  <CategoryCard data={item} />
                  {index < data.length - 1 && (
                    <hr style={{ margin: "20px 0" }} className="text-gray-300" />
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full lg:w-1/3 lg:mt-0">
          <div className="sticky top-10">
            <UpgradePromoCard />
          </div>
        </div>
      </div>
    </div>
  );
}
