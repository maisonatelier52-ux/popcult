"use client"
  
import { useEffect, useRef, useState } from "react";
import SubscribeNewsletter from "./SubscribeNewsletter";
import CategorySectionHeader from "./CategorySectionHeader";
import EditorialGrid2x2 from "./EditorialGrid2x2";

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

export default function TravelSectionWithSubscribe({ data }: Props) {
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
    <section className="mx-auto mt-5">
      <div className="flex flex-col lg:flex-row gap-15">

        {/* LEFT: Subscribe */}
        <div className="w-full lg:w-70" >
          <div className="sticky top-10">
            <SubscribeNewsletter />
          </div>
        </div>

        {/* RIGHT: Category */}
        <div className="w-full" ref={leftRef} >
          <CategorySectionHeader title="Finance" />
          <div className="mt-8">
            <EditorialGrid2x2
              data={[data[0], data[1], data[2], data[3]]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
