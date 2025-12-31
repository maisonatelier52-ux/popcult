'use client';

import { FaQuoteLeft } from 'react-icons/fa';

interface ArticleQuoteProps {
  quote: string;
  author?: string;
}

export default function ArticleQuote({
  quote,
  author = 'Unknown',
}: ArticleQuoteProps) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-14 text-center text-black">
      {/* Quote Icon */}
      <FaQuoteLeft className="mx-auto text-red-600 text-4xl mb-6" />

      {/* Quote Text */}
      <p className="text-2xl md:text-3xl font-semibold leading-relaxed">
        {quote}
      </p>

      {/* Author */}
      {/* <div className="flex items-center justify-center gap-3 mt-6">
        <span className="w-6 h-px bg-red-600" />
        <span className="text-sm italic">{author}</span>
      </div> */}
    </div>
  );
}
