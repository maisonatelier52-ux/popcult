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
<div className="hidden md:block w-full bg-[#041f4a] text-white">

  <div className="mx-auto px-4">
    <Link
      href={`/${data.category}/${data.slug}`}
      title={data.title}
      className="flex items-center gap-2 py-3 truncate"
    >
      <span className="whitespace-nowrap font-bold text-[16px]">
        What&apos;s Hot:
      </span>

      <span className="truncate text-[17px] font-semibold">
        {data.title}
      </span>
    </Link>
  </div>
</div>

  );
}
