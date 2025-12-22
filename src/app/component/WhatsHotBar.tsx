'use client';

import Link from 'next/link';

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
  data: NewsData;
}

export default function WhatsHotBar({data}: Props) {
  return (
    <div className="w-full bg-red-600">
      <div className="max-w-7xl mx-auto px-4">
         <Link
        href={`/${data.category}/${data.slug}`}
        title={data.title}
        style={{ color: "inherit" }}
      
          className="flex items-center gap-2 py-3 text-white text-sm sm:text-base font-semibold truncate"
        >
          <span className="whitespace-nowrap font-bold">
            What&apos;s Hot:
          </span>

          <span className="truncate">
            {data.title}
          </span>
        </Link>
      </div>
    </div>
  );
}
