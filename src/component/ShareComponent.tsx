"use client";

import { FaTimes, FaShareAlt, FaLink, FaFlipboard } from 'react-icons/fa';
import { FiShare } from 'react-icons/fi';

interface ShareArticleProps {
  url?: string;
  title?: string;
}

export default function ShareComponent({ url = "https://default-url.com", title = "Share This Article" }: ShareArticleProps) {
  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank");
  };

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="flex items-center justify-between border-t-2 border-b-2 border-dotted border-gray-200 mt-10 py-4 my-4">
      {/* Share Text */}
      <button className="flex items-center gap-1 text-sm text-black">
        <FiShare className="text-base" />
<span className="hidden md:inline font-normal">{title}</span>

      </button>

      {/* Icon Buttons */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => alert("Close action")}
          className="p-2 bg-gray-100 hover:bg-gray-200 rounded transition"
          title="Close"
        >
          <FaTimes />
        </button>
        <button
          onClick={shareToFacebook}
          className="p-2 bg-gray-100 hover:bg-gray-200 rounded transition"
          title="Share on Flipboard"
        >
          <FaFlipboard />
        </button>
        <button
          onClick={copyLink}
          className="p-2 bg-gray-100 hover:bg-gray-200 rounded transition"
          title="Copy Link"
        >
          <FaLink />
        </button>
      </div>
    </div>
  );
}
