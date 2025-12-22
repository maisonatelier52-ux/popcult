"use client";

import { useEffect, useRef, useState } from "react";
import HorizontalFeaturedArticle from "./HorizontalFeaturedArticle";
import UpgradePromoCard from "./UpgradePromoCard";
import CategorySectionHeader from "./CategorySectionHeader";

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

export default function   LatestNewsWithStickyPromo({data}:Props) {
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
      <div className="w-full py-8 mb-8 mt-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div
          className={`relative col-span-1 lg:col-span-2`}
          ref={leftRef}
        >
          <div
            className={`transition-transform duration-500 ${stopScroll ? "sticky top-[50px]" : ""
              }`}
          >
            <CategorySectionHeader title="More News" />
            <div id="first-more-section">
              <div className="border-b border-[#615e5e54] pb-6">
                <HorizontalFeaturedArticle data={data[0]} />
              </div>
            </div>

            <div className="space-y-3 mt-8">
              <div className="md:border-b border-[#615e5e54] pb-4 md:pb-3">
                <HorizontalFeaturedArticle data={data[1]} />
              </div>
              <div className="md:border-b border-[#615e5e54] pb-4 md:pb-3">
                <HorizontalFeaturedArticle data={data[2]} />
              </div>
            </div>

            <div className="mt-8" id="second-more-section" ref={stopRef}>
              <div className="border-t border-b border-[#615e5e54] pt-5 pb-8">
                <HorizontalFeaturedArticle data={data[4]} />
              </div>
              <div className="space-y-3 mt-8">
                <div className="md:border-b border-[#615e5e54] pb-5 md:pb-3">
                  <HorizontalFeaturedArticle data={data[5]} />
                </div>
                <div className="md:border-b border-[#615e5e54] pb-5 md:pb-3">
                  <HorizontalFeaturedArticle data={data[6]} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="col-span-1 lg:col-span-1 mt-6 lg:mt-0">
          <div className="sticky top-10">
            
            <div className="mt-4">
             <UpgradePromoCard />
            </div>
            
        
          </div>
        </div>
      </div>
    </div>
  );
}
