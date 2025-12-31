'use client';

import { FiShare2, FiPrinter, FiMoreHorizontal, FiShare } from 'react-icons/fi';
import { FaXTwitter, FaFacebookF, FaLink } from 'react-icons/fa6';

export default function SocialShare() {
  return (
    <div className="flex items-center py-5 gap-3 text-sm text-black flex-wrap">
      {/* Share */}
      <button className="flex items-center gap-1 text-sm text-black">
      <FiShare className="text-base" />
      <span className="font-normal">Share</span>
    </button>

      {/* Icons */}
      <div className="flex items-center gap-2">
        <CircleIcon>
          <FaXTwitter className="text-[14px]" />
        </CircleIcon>

        <CircleIcon>
          <FaFacebookF className="text-[14px]" />
        </CircleIcon>

        <CircleIcon>
          <FaLink className="text-[14px]" />
        </CircleIcon>

        <CircleIcon>
          <FiPrinter className="text-[14px]" />
        </CircleIcon>

        <CircleIcon>
          <FiMoreHorizontal className="text-[16px]" />
        </CircleIcon>
      </div>

      {/* Divider */}
      {/* <span className="mx-1 text-gray-400">|</span> */}

      {/* Read Time */}
      {/* <span className="text-sm font-normal">6 Min Read</span> */}
    </div>
  );
}

/* -------------------------------- */
/* Circle Icon Button                */
/* -------------------------------- */

function CircleIcon({ children }: { children: React.ReactNode }) {
  return (
    <button className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:opacity-70 transition">
      {children}
    </button>
  );
}
