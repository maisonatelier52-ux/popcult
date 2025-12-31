'use client';

import {
  FiShare,
  FiMoreHorizontal,
} from 'react-icons/fi';
import { FaXTwitter, FaFacebookF } from 'react-icons/fa6';
import { HiLink } from 'react-icons/hi2';

export default function SocialShareList() {
  return (
    <div className="flex flex-col sticky top-5 items-center gap-2 text-black hidden md:flex">
       {/* Share */}
      <button className="flex flex-col items-center gap-1">
        <FiShare className="text-lg" />
        <span className="text-xs tracking-wide">SHARE</span>
      </button>


      {/* Icons Box */}
      <div className="flex flex-col items-center gap-4 border border-gray-300 px-3 py-4">
        <FaXTwitter className="text-lg cursor-pointer" />
        <FaFacebookF className="text-lg cursor-pointer" />
        <HiLink className="text-lg cursor-pointer" />
        <FiMoreHorizontal className="text-lg cursor-pointer" />
      </div>
    </div>
  );
}
