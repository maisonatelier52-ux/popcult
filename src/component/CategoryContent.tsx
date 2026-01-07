"use client";

import { useRef, useState } from "react";
import CategoryCard from "./CategoryCard";
import UpgradePromoCard from "./UpgradePromoCard";
import Pagination from "./Pagintation";

interface Author {
  name: string;
  role: string;
  bio: string;
  image: string;
  email: string;
  twitter: string;
  facebook: string;
  instagram: string;
  substack?: string;
  medium?: string;
}

interface NewsData {
  slug: string;
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  date: string;
  image: string;
  author:Author;
}

interface Props {
  data: NewsData[];
}

const ITEMS_PER_PAGE = 5;

export default function CategoryContent({ data }: Props) {
  const leftRef = useRef<HTMLDivElement>(null);
  const stopRef = useRef<HTMLDivElement>(null);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = data.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="w-full mb-8">
      <div className="flex flex-col lg:flex-row gap-8 md:gap-15">

        {/* LEFT SECTION */}
        <div className="relative w-full" ref={leftRef}>
          <div className="mt-4">
            {paginatedData.map((item, index) => (
              <div key={item.slug}>
                <CategoryCard data={item} />
                {index < paginatedData.length - 1 && (
                  <hr className="my-3 border-gray-300" />
                )}
              </div>
            ))}

            {/* PAGINATION */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full lg:w-1/3">
          <div className="sticky top-10">
            <UpgradePromoCard />
          </div>
        </div>
      </div>
    </div>
  );
}
